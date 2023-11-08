const { body, validationResult } = require("express-validator");

const Validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        break;
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return res.status(422).json({ errors: errors.array() });
  };
};

const LoginValidator = [
  body("email").trim().isEmail().notEmpty().withMessage("Email is required"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .notEmpty()
    .withMessage("Minimum lenght of password should contain 6 characters"),
];
const SignupValidator = [body("username").notEmpty().withMessage("Name is required"), ...LoginValidator];

module.exports = {
  Validate,
  LoginValidator,
  SignupValidator,
};
