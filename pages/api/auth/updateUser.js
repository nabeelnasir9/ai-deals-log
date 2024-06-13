import { jwtMiddleware } from './jwtMiddleware';
import dbConnect from '../../../lib/dbConnect';
import User from '../../../lib/models/User';

const handler = async (req, res) => {
  await dbConnect();

  const { fullName, occupation, country, phoneNumber } = req.body;

  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      console.log("User not found for update:", req.user._id);
      return res.status(404).json({ message: 'User not found' });
    }

    user.fullName = fullName;
    user.occupation = occupation;
    user.country = country;
    user.phoneNumber = phoneNumber;
    await user.save();

    console.log("User updated successfully:", user);

    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).json({ message: error.message });
  }
};

export default jwtMiddleware(handler);