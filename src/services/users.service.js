const { createUser, resetDb, getEmailCount } = require("../util/queries");
const { secret } = require("../config/jwtSecretKey");
const jwt = require("jsonwebtoken");
const fs = require("fs")
module.exports = {
  getToken: (data) => {
    return jwt.sign(data, secret);
  },
  register: async (data) => {
    createUser(data)
  },
  reset: ()=> {
    resetDb()
  },
  existingUser: (email)=> {
    return getEmailCount(email)
  },
  existingUserList: ()=> {
    return getEmailCount()
  }
}