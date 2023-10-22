import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const createUser = async (req, res) => {
  const { name, email, password, location } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists !" });
    } else {
      const salt = await bcrypt.genSalt(10);
      let hashedPassword = await bcrypt.hash(password, salt);
      try {
        const newUser = await User.create({
          name,
          email,
          password: hashedPassword,
          location,
        });
        return res.status(201).json({ id: newUser._id, created: true });
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: "invalid user !" });
    }

    const comparePass = await bcrypt.compare(password, user.password);

    if (!comparePass) {
      return res.status(400).json({ errors: "invalid credentials !" });
    }

    //  jwt token
    const dataObj = {
      userObj: {
        id: user.id,
      },
    };

    const authToken = jwt.sign(dataObj, process.env.JWT_SECRET)

    return res.status(200).json({ success: true, authToken: authToken });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export { createUser, loginUser };
