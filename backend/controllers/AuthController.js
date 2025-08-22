const { UsersModel } = require("../model/UserModel");

const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

// module.exports.Signup = async (req, res, next) => {
//   try {
//     const { email, password, username, createdAt } = req.body;
//     const existingUser = await UsersModel.findOne({ email });
//     if (existingUser) {
//       return res.json({ message: "User already exists" });
//       console.log(existingUser);
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const user = await UsersModel.create({
//       email,
//       password: hashedPassword,
//       username,
//       createdAt,
//     });
//     const token = createSecretToken(user._id);
//     // res.cookie("token", token, {
//     //   withCredentials: true,
//     //   httpOnly: true,
//     //   secure: process.env.NODE_ENV === "production",
//     //   sameSite: "Lax",
//     // });
//     res.cookie("token", token, {
//       withCredentials: true,
//       httpOnly: false,
//     });
//     // res
//     //   .status(201)
//     //   .json({ message: "User logged in successfully", success: true });

//     res.status(201).json({
//       message: "User logged in successfully",
//       success: true,
//       token,  
//     });

//     console.log(user);

//     // res
//     //   .status(201)
//     //   .json({ message: "User signed in successfully", success: true, user });
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports.Login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.json({ message: "All fields are required" });
//     }
//     const user = await UsersModel.findOne({ email });
//     if (!user) {
//       return res.json({ message: "Incorrect password or email" });
//     }
//     const auth = await bcrypt.compare(password, user.password);
//     if (!auth) {
//       return res.json({ message: "Incorrect password or email" });
//     }
//     const token = createSecretToken(user._id);
//     // res.cookie("token", token, {
//     //   withCredentials: true,
//     //   httpOnly: false,
//     // });
//     // res
//     //   .status(201)
//     //   .json({ message: "User logged in successfully", success: true });
//     res.cookie("token", token, {
//       withCredentials: true,
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "Lax",
//     });
//     res.status(201).json({
//       message: "User signed in successfully",
//       success: true,
//       token,  
//       user,
//     });

//     next();
//   } catch (error) {
//     console.error(error);
//   }
// };


module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await UsersModel.create({
      email,
      password: hashedPassword,
      username,
      createdAt,
    });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await UsersModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(400).json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });

    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
