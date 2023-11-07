const jwt = require("jsonwebtoken");

const CreateToken = (id, email, time) => {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: time });
  return token;
};

module.exports = { CreateToken };
