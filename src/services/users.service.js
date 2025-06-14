//const { createMySqlPool } = require("../util/dbClient");
const { createUser } = require("../util/queries");
const { secret } = require("../config/jwtSecretKey");
const jwt = require("jsonwebtoken");
const fs = require("fs")
module.exports = {
  // register: async (data) => {
  //   let dbResult = {};
  //   try {
  //     dbResult.result = await createMySqlPool.query(createUser(), [
  //       data.firstName,
  //       data.lastName,
  //       data.email,
  //       data.password,
  //     ]);
  //   } catch (e) {
  //     console.log(e);
  //     dbResult.error = e;
  //   }
  //   return dbResult;
  // },
  getToken: (data) => {
    return jwt.sign(data, secret);
  },

  register: async (data) => {
     createUser(data)
  }
}