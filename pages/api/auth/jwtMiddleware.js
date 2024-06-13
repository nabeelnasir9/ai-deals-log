import jwt from 'jsonwebtoken';
import dbConnect from '../../../lib/dbConnect';
import User from '../../../lib/models/User';

export const jwtMiddleware = (handler) => async (req, res) => {
  await dbConnect();

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    console.log("Authorization token missing");
    return res.status(401).json({ message: 'Authorization token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token decoded:", decoded);
    req.user = await User.findById(decoded.userId).select('-password');
    if (!req.user) {
      console.log("Invalid token, user not found");
      return res.status(401).json({ message: 'Invalid token' });
    }
    return handler(req, res);
  } catch (error) {
    console.error("JWT verification error:", error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};
