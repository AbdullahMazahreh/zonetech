const express = require("express");

const { signup, login } = require("../controllers/authController");
const { getUserById } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.route("/").get(getUserById);

module.exports = router;
