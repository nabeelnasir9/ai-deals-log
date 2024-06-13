import dbConnect from '../../../lib/dbConnect';
import User from '../../../lib/models/User';

export default async function handler(req, res) {
  await dbConnect();

  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    res.status(200).json({ message: 'User verified' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
