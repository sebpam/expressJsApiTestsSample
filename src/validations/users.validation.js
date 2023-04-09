const { body, header } = require("express-validator");
const { createMySqlPool } = require("../util/dbClient");
const { getEmailCount, verifyUser } = require("../util/queries");
const jwt = require("jsonwebtoken");
const jwtSecretKey = "abcd96587";
module.exports = {
  validateInputs: [
    body("firstName")
      .exists({ checkFalsy: true })
      .withMessage("First name is a required field")
      .isString()
      .withMessage("First name should be a string")
      .isLength({ min: 3, max: 30 })
      .withMessage("Last name should be at least 3 characters and at most 30 characters"),
    body("lastName")
      .exists()
      .withMessage("Last name is a required field")
      .isString()
      .withMessage("Last name should be a string")
      .isLength({ min: 3, max: 30 })
      .withMessage("Last name should be at least 3 characters and at most 30 characters"),
    body("email")
      .exists()
      .isEmail()
      .withMessage("Please provide a valid email")
      .custom(async (email) => {
        let qr;
        try {
          qr = await createMySqlPool.query(getEmailCount(email));
        } catch (e) {
          console.log(e);
        }
        if (qr[0][0].userCount === 1) {
          throw new Error(
            "Email exists in our records, please try a different email"
          );
        }
        return true;
      }),
    body("password")
      .exists()
      .withMessage("password is a required field")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
      .withMessage(
        "The password should be at least 8 char long, one uppercase, one lowercase, one special character"
      ),
  ],

  authenticateUser: [
    body("email").exists({ checkFalsy: true }).withMessage("email is required"),
    body("password")
      .exists({ checkFalsy: true })
      .withMessage("password is required")
      .custom(async (value, { req }) => {
        let qr;
        try {
          qr = await createMySqlPool.query(verifyUser(value, req));
        } catch (e) {
          console.log(e);
        }
        if (qr[0][0].userCount === 0) {
          throw new Error("User is not authorized");
        }
        return true;
      }),
  ],
};
