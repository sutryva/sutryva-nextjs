"use client";

import { useState } from "react";
import { CreditCard, CheckCircle2, AlertCircle, XCircle, Loader2 } from "lucide-react";

interface CheckoutButtonProps {
  amountInRupees?: number; // Amount in INR (e.g. 500 = ₹500)
  buttonText?: string;
  className?: string;
  description?: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutButton({
  amountInRupees = 500,
  buttonText = "Pay Now with Razorpay",
  className = "",
  description = "Sutryva Engineering Service",
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "cancelled" | null;
    message: string | null;
    paymentId?: string;
  }>({ type: null, message: null });

  const loadScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (typeof window === "undefined") return resolve(false);
      if (window.Razorpay) return resolve(true);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    setStatus({ type: null, message: null });

    try {
      const isScriptLoaded = await loadScript();
      if (!isScriptLoaded) {
        setStatus({
          type: "error",
          message: "Failed to load Razorpay SDK. Please check your internet connection.",
        });
        setLoading(false);
        return;
      }

      // Step 1: Call Backend to create Razorpay Order
      const amountInPaise = amountInRupees * 100;
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountInPaise,
          currency: "INR",
          receipt: `rcpt_${Date.now()}`,
        }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok || !orderData.order_id) {
        throw new Error(orderData.error || "Failed to create order on backend.");
      }

      const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      if (!keyId) {
        throw new Error("NEXT_PUBLIC_RAZORPAY_KEY_ID is missing.");
      }

      // Step 2: Configure Razorpay Checkout Options
      const options = {
        key: keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Sutryva Technologies",
        description: description,
        image: "https://sutryva.com/favicon.ico",
        order_id: orderData.order_id,
        handler: async function (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) {
          try {
            // Step 3: Verify Payment Signature on Backend
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyRes.ok && verifyData.success) {
              setStatus({
                type: "success",
                message: `Payment successful & verified!`,
                paymentId: response.razorpay_payment_id,
              });
            } else {
              setStatus({
                type: "error",
                message: verifyData.error || "Payment verification failed.",
              });
            }
          } catch (err: any) {
            setStatus({
              type: "error",
              message: err?.message || "An error occurred during payment verification.",
            });
          } finally {
            setLoading(false);
          }
        },
        modal: {
          ondismiss: function () {
            setStatus({
              type: "cancelled",
              message: "Payment cancelled by user.",
            });
            setLoading(false);
          },
        },
        prefill: {
          name: "Sutryva Client",
          email: "client@sutryva.com",
          contact: "9876543210",
        },
        theme: {
          color: "#84cc16", // Lime theme color
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response: any) {
        console.error("Razorpay payment failed:", response.error);
        setStatus({
          type: "error",
          message: response.error?.description || "Payment failed. Please try again.",
        });
        setLoading(false);
      });

      rzp.open();
    } catch (err: any) {
      console.error("Payment initiation error:", err);
      setStatus({
        type: "error",
        message: err?.message || "Something went wrong. Please try again.",
      });
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`inline-flex items-center justify-center gap-2 rounded-md font-body font-semibold px-6 py-3 transition-all cursor-pointer ${
          loading
            ? "bg-graphite-700 text-graphite-300 cursor-not-allowed"
            : "bg-lime text-graphite-950 hover:bg-lime/90 active:scale-[0.99]"
        } ${className}`}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Processing...
          </>
        ) : (
          <>
            <CreditCard className="h-4 w-4" /> {buttonText} (₹{amountInRupees})
          </>
        )}
      </button>

      {status.type === "success" && (
        <div className="flex items-start gap-2 p-3 bg-emerald-950/60 border border-emerald-500/30 rounded-md text-emerald-300 text-sm">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
          <div>
            <p className="font-semibold">{status.message}</p>
            {status.paymentId && (
              <p className="text-xs text-emerald-400/80 font-mono mt-0.5">
                Payment ID: {status.paymentId}
              </p>
            )}
          </div>
        </div>
      )}

      {status.type === "error" && (
        <div className="flex items-center gap-2 p-3 bg-rose-950/60 border border-rose-500/30 rounded-md text-rose-300 text-sm">
          <AlertCircle className="h-5 w-5 shrink-0 text-rose-400" />
          <p>{status.message}</p>
        </div>
      )}

      {status.type === "cancelled" && (
        <div className="flex items-center gap-2 p-3 bg-amber-950/60 border border-amber-500/30 rounded-md text-amber-300 text-sm">
          <XCircle className="h-5 w-5 shrink-0 text-amber-400" />
          <p>{status.message}</p>
        </div>
      )}
    </div>
  );
}
