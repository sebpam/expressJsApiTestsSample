const { register, getToken, reset, existingUser, existingUserList } = require("../controllers/users.controller");
const {
  validateInputs,
  authenticateUser,
  validationGetResult
} = require("../validations/users.validation");
const express = require("express");

const router = express.Router();

router.post("/getToken", authenticateUser, getToken);
router.post("/register", validateInputs, register);
/**
 * @swagger
 * /users/register:
 *   post:
 *      description: Used to register user
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: user
 *            description: User details
 *            schema:
 *              type: object
 *              required:
 *                 - firstName
 *                 - lastName
 *                 - email
 *                 - password
 *              properties:
 *                  firstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Samuels
 *                  lastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: King
 *                  email:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 200
 *                      example: email@email.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: abcd
 * 
 * 
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.delete("/reset", reset);
/**
 * @swagger
 * /users/reset:
 *   delete:
 *      description: Used to reset the list of users to limit the size of the text file
 *      tags:
 *          - users
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/existingUser", validationGetResult, existingUser);
/**
 * @swagger
 * /users/existingUser?:
 *     get:   
 *         description: Use to get a single existing user matching an email address
 *         tags:
 *             - users
 *         parameters:
 *         - in: query
 *           name: email
 *           description: email address
 *           schema:
 *              type: string
 *              require: true
 *         responses:
 *            '200':
 *                description: Resource added successfully
 *            '500':
 *                description: Internal server error
 *            '400':
 *                description: Bad request
 */
router.get("/existingUserList", existingUserList)
/**
 * @swagger
 * /users/existingUserList:
 *     get:   
 *         description: Use to get a single existing user matching an email address
 *         tags:
 *             - users
 *         responses:
 *            '200':
 *                description: Resource added successfully
 *            '500':
 *                description: Internal server error
 *            '400':
 *                description: Bad request
 */
module.exports = router;
