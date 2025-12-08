import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.json({
      message: "No token provided",
      success: false,
    });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    console.log(err.message);
    res.json({ message: "Invalid token", success: false });
  }
};


export default auth;