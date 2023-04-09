const { register, getToken } = require("../controllers/users.controller");
const {
  validateInputs,
  authenticateUser,
} = require("../validations/users.validation");
var express = require("express");

var router = express.Router();

router.post("/getToken", authenticateUser, getToken);
/**
 * @swagger
 * /users/getToken:
 *   post:
 *      description: Used to get a bearer token
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - email
 *                 - password
 *              properties:
 *                  email:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: email@email.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *
 *      responses:
 *          '200':
 *              description: Succesful Authentication
 *          '500':
 *              description: Internal server error
 *          '401':
 *              description: Not Authorized
 */

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
 *            name: User
 *            description: User data
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
 *                      maxLength: 100
 *                      example: email@email.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: abcd
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
module.exports = router;
