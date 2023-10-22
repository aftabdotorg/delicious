import User from "../models/User.js";

const createUser = async (req, res) => {
  const { name, email, password, location } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists !" });
    } else {
      try {
        const newUser = await User.create({
          name,
          email,
          password,
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

    if (password !== user.password) {
      return res.status(400).json({ errors: "invalid credentials !" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export { createUser, loginUser };
