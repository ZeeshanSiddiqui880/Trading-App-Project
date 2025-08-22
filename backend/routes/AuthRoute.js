const { Signup, Login } = require("../controllers/AuthController");
const {
  userVerification,
  verifyUser,
} = require("../middlewares/AuthMiddleware");
const express = require("express");
const router = express.Router();

// router.post("/", userVerification);
router.post("/", verifyUser);
router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
