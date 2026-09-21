import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request: Request) {
  try {
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
      return NextResponse.json(
        { error: "Razorpay API credentials missing on server" },
        { status: 401 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const { amount, currency = "INR", receipt } = body;

    const parsedAmount = Number(amount);
    if (isNaN(parsedAmount) || parsedAmount < 100) {
      return NextResponse.json(
        { error: "Invalid amount. Minimum amount is 100 paise." },
        { status: 400 }
      );
    }

    const razorpay = new Razorpay({
      key_id,
      key_secret,
    });

    const options = {
      amount: parsedAmount,
      currency,
      receipt: receipt || `rcpt_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error: any) {
    console.error("Razorpay create-order error:", error);
    if (error?.statusCode === 401 || error?.error?.code === "AUTHENTICATION_FAILED") {
      return NextResponse.json(
        { error: "Authentication with Razorpay API failed" },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: error?.description || error?.message || "Internal server error while creating order" },
      { status: 500 }
    );
  }
}
