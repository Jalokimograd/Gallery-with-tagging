const User = require("../models/user");

exports.login = async function (req, res, next) {
  const { user, pwd } = req.body;

  data = {
    user: user,
    pwd: pwd,
    accessToken: "taki sobie token",
    roles: "standardowa",
  };

  res.json(data);
};
