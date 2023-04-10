import ApiRestClient from "../util/ApiRestClient";
import urls from "../config/urls"
import { Context } from 'mocha'
import { Scenario } from "../interfaces/Scenario"
import PayloadCreation from "../util/PayloadCreation"
import HeaderCreation from "../util/HeaderCreation"
import { bodyError, bodySuccess, headerError } from "../schemas/responses"
import { validate } from 'jsonschema';
const expect = require('chai').expect;
class UserCreation {

	constructor(){}

    validateUserCreation( scenario: Scenario ){
     	before( async function( this: Context ){
     		const payloadCreation = new PayloadCreation( scenario );
            const headerCreation = new HeaderCreation( scenario );
     		const header = await headerCreation.create()
     		const createUser = new ApiRestClient(urls.base, urls.endpoints.registerUser, payloadCreation.create(), header )
		    this.resp = await createUser.submitPostRequest();
	    });
	    if( scenario.errors ){
            it("Validating the structure the response payload", function( this: Context ){
            	console.log("validating")
	    	    //const t = validate( this.resp.body, headerError );
	    	    expect((validate( this.resp.body, headerError )).valid ).to.equal(true)
	        });
	    } else {
	    	it("", function( this: Context ){
	    	    console.log(JSON.stringify( this.resp.body ));
	        });
	    }
	    
     }
	
}
export default new UserCreation()