// pages/api/clerk/webhook.js
import { Webhook } from "@clerk/clerk-sdk-node";
import dbConnect from '../../../lib/dbConnect';
import User from '../../../lib/models/User';

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

  const wh = new Webhook(webhookSecret);

  let evt;

  try {
    evt = await wh.verify(req.body, req.headers);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  const eventType = evt.type;
  const event = evt.data;

  await dbConnect();

  switch (eventType) {
    case "user.created":
      const { id, email_addresses } = event;
      const email = email_addresses[0].email_address;

      let user = await User.findOne({ email });

      if (!user) {
        user = new User({
          _id: id,
          email,
          isVerified: true,
        });

        await user.save();
      }

      break;
    // Handle other Clerk events here as needed
    default:
      break;
  }

  res.status(200).send("Webhook received");
}
