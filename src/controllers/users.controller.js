const { register, getToken, reset, existingUser, existingUserList } = require("../services/users.service");
const { validationResult } = require("express-validator");
const { verifyToken } = require("../authentication/users.authentication");

const express = require("express");
const router = express.Router();
module.exports = {
  register: async (req, res) => {
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

  reset: async (req, res) => {
      const result = await reset();
      res.status(200).send(result);
  },

  existingUser: async (req, res) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res.status(400).json({ success: 0, errors: errors.array() });
        } else {       
          const queryResult = existingUser(req.query.email);    
          res.status(200).json(queryResult);
        }
      } catch (e) {
        console.log(e);
      }
    
  },

  existingUserList: async (req, res) => {
      const result = await existingUserList();
      res.status(200).send(result);
  }

};
