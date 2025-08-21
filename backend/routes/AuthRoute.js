const { Signup, Login } = require("../controllers/AuthController");
const {
  userVerification,
  VerifyToken,
} = require("../middlewares/AuthMiddleware");
const express = require("express");
const router = express.Router();

router.post("/", userVerification);
router.post("/verify", VerifyToken);
router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
