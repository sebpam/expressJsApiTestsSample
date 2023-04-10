import mysql from "mysql2/promise";
import mySqlCloudConnectString from "../config/mySqlCloudConnectString.json";
export default {
  async runQuery(query){
      const openConnection = await mysql.createConnection(mySqlCloudConnectString)
      const data = await openConnection.query(query);
      openConnection.end()
      return data;
  }
  
};
