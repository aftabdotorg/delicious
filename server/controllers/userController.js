import User from "../models/User.js";

const createUser = async (req, res) => {
  const { name, email, password, location } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });

    if (existingUser) {
      res.status(400).json({ message: "User already exists !" });
    } else {
      const newUser = await User.create({
        name: name,
        email: email,
        password: password,
        location: location,
      });
      res.status(201).json({ id: newUser._id, created: true });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export { createUser };
