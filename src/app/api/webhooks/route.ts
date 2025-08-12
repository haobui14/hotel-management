import { createBooking, updateHotelRoom } from "@/libs/apis";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const checkout_session_completed = "checkout.session.completed";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-04-10",
});

export const POST = async (req: Request) => {
  const reqBody = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) {
      return;
    }
    event = stripe.webhooks.constructEvent(reqBody, sig, webhookSecret);
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 500 });
  }

  //load our event
  switch (event.type) {
    case checkout_session_completed:
      const session = event.data.object;

      const {
        // @ts-ignore
        metadata: {
          // @ts-ignore
          adults,
          // @ts-ignore
          checkinDate,
          // @ts-ignore
          checkoutDate,
          // @ts-ignore
          children,
          // @ts-ignore
          hotelRoom,
          // @ts-ignore
          numberOfDays,
          // @ts-ignore
          user,
          // @ts-ignore
          discount,
          // @ts-ignore
          totalPrice,
        },
      } = session;

      await createBooking({
        adults: Number(adults),
        checkinDate,
        checkoutDate,
        children: Number(children),
        hotelRoom,
        numberOfDays: Number(numberOfDays),
        discount: Number(discount),
        totalPrice: Number(totalPrice),
        user,
      });

      //Update hotel room
      await updateHotelRoom(hotelRoom);

      return NextResponse.json("Booking Successful", {
        status: 200,
        statusText: "Bookking Successful",
      });

    default:
      console.log(`Unhandled event type ${event.type}`);
      break;
  }

  return NextResponse.json("Event Received", {
    status: 200,
    statusText: "Event Received",
  });
};
