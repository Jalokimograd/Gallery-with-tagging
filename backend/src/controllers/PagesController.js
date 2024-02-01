const User = require("../models/user");

exports.login = async function (req, res, next) {
  const { user, pwd } = req.body;

  data = {
    accessToken: "taki sobie token",
    roles: "standardowa",
  };

  res.json(data);
};
