const { register, getToken } = require("../services/users.service");
const { validationResult } = require("express-validator");
const { verifyToken } = require("../authentication/users.authentication");

const express = require("express");
const router = express.Router();
module.exports = {
  register: async (req, res) => {
    if (!verifyToken(req)) {
      res.status(401).json({ success: 0, errors: [ { "msg": "User is not authorized", "param":"authorization" } ]});
    } else {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res.status(400).json({ success: 0, errors: errors.array() });
        } else {
          const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
          };          
          const serviceData = await register(data);          
          res.status(200).json({
            success: 1,
            msg: `User ${data.email} has been successfully added`
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  getToken: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(401).json({ success: 0, errors: errors.array() });
      } else {
        const data = {
          time: Date(),
          username: req.body.email,
          password: req.body.password,
        };
        const token = await getToken(data);
        res.status(200).send(token);
      }
    } catch (e) {
      console.log(e);
    }
  },
};
