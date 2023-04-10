import userCreation from "../../validations/UserCreation"
import fs from "fs";
const x = fs.readFileSync( process.cwd() + "/testScenarios/authentication.json" );
const scenarios = Object.assign( {}, JSON.parse( x.toString() ) );
for( let key in scenarios ){
	const str = ""+key.replace(/([^A-Z])([A-Z])/g, "$1 $2")+""
	describe("Test name = "+str.toUpperCase()+"", ()=>{
	    userCreation.validateUserCreation( scenarios[ key ] );
    });
}
