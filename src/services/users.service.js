const {createMySqlPool} = require("../util/dbClient");
const {createUser} = require("../util/queries");
module.exports = {
	register: async (data) => {
		let dbResult = {};
		try{
			dbResult.result = await createMySqlPool.query(createUser(),[data.firstName, data.lastName, data.email, data.password]);
		} catch( e ){
			console.log( e )
            dbResult.error = e;
		}
		return dbResult;
	}	
}