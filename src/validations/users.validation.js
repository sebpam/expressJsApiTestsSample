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
      .isLength({ min: 2, max: 30 })
      .withMessage("First name should be at least 3 characters and at most 30 characters"),
    body("lastName")
      .exists()
      .withMessage("Last name is a required field")
      .isString()
      .withMessage("Last name should be a string")
      .isLength({ min: 2, max: 30 })
      .withMessage("Last name should be at least 3 characters and at most 30 characters"),
    body("email")
      .exists()
      .withMessage("Email is a required field")
      .isEmail()
      .withMessage("Please provide a valid email")
      .custom(async (email) => {
        let c;
        try{
           c = getEmailCount(email)
        }catch(e){
           console.log(e)
        }
        if(c !== undefined ){
           throw new Error(
            "Email exists in our records, please try a different email"
          );
        }
        return true;
      }),
    body("password")
      .exists()
      .withMessage("password is a required field")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "i")
      .withMessage(
        "The password should be at least 8 char long, one number, one uppercase, one lowercase, one special character"
      ),
  ],

  authenticateUser: [
    body("email").exists({ checkFalsy: true }).withMessage("email is required"),
    body("password")
      .exists({ checkFalsy: true })
      .withMessage("password is required")
      .custom(async (value, { req }) => {
        return true;
      }),
  ],
};
