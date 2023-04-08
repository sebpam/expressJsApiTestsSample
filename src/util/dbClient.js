const { createPool } = require("mysql2/promise");
const mySqlCloudConnectString  = require('../config/mySqlCloudConnectString');

module.exports = {
    createMySqlPool: createPool( mySqlCloudConnectString )
}

