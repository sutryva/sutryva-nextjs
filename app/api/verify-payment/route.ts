import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_secret) {
      return NextResponse.json(
        { success: false, error: "Razorpay secret key not configured on server" },
        { status: 500 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    // Validate missing fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: razorpay_order_id, razorpay_payment_id, and razorpay_signature are required.",
        },
        { status: 400 }
      );
    }

    // HMAC-SHA256(order_id + "|" + payment_id, KEY_SECRET)
    const generated_signature = crypto
      .createHmac("sha256", key_secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const generatedBuffer = Buffer.from(generated_signature, "utf-8");
    const signatureBuffer = Buffer.from(razorpay_signature, "utf-8");

    const isSignatureValid =
      generatedBuffer.length === signatureBuffer.length &&
      crypto.timingSafeEqual(generatedBuffer, signatureBuffer);

    if (!isSignatureValid) {
      return NextResponse.json(
        { success: false, error: "Signature verification failed. Signature mismatch." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Payment verified successfully",
        order_id: razorpay_order_id,
        payment_id: razorpay_payment_id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Razorpay verify-payment error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error during verification" },
      { status: 500 }
    );
  }
}
