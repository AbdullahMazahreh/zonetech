const User = require("../models/UserModel");

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.query.id);
    res.status(200).json({
      status: "success",
      data: {
        user: user,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: "Couldnt find user",
    });
  }
};
