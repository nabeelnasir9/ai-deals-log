import dbConnect from '../../../lib/dbConnect';
import User from '../../../lib/models/User';
import { jwtMiddleware } from './jwtMiddleware';

const handler = async (req, res) => {
  await dbConnect();

  const userId = req.user._id;

  try {
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default jwtMiddleware(handler);