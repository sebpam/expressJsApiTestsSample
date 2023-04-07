const { createPool } = require("mysql2");
const mySqlCloudConnectString  = require('../config/mySqlCloudConnectString');

module.exports = {
    createMySqlPool: createPool( mySqlCloudConnectString );
}

