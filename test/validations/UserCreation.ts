import ApiRestClient from "../util/ApiRestClient";
import urls from "../config/urls"
import { Context } from 'mocha'
import { Scenario } from "../interfaces/Scenario"
import PayloadCreation from "../util/PayloadCreation"
import HeaderCreation from "../util/HeaderCreation"
import { headerError,
  bodyError, 
  success
 } from "../schemas/responses.json"
import { validate } from 'jsonschema';
import { expect } from 'chai';

class UserCreation {

	constructor(){}

    validateUserCreation( scenario: Scenario ){
     	before( async function( this: Context ){
     		const payloadCreation = new PayloadCreation( scenario );
            const headerCreation = new HeaderCreation( scenario );
     		this.header = await headerCreation.create();
     		this.submissionPayload = await payloadCreation.create();
     		const createUser = new ApiRestClient(urls.base, urls.endpoints.registerUser, this.submissionPayload, this.header )
		    this.resp = await createUser.submitPostRequest();
	    });
	    if( scenario.errors ){
	    	if( scenario.errors.type === "header" ){
	    		it("Should validate the structure of the response payload for an AUTHENTICATION error", function( this: Context ){
	    	        expect((validate( this.resp.body, headerError )).valid ).to.equal( true )

	            });
	            for( let elm of scenario.errors.list ){
	            	for( let key in elm ){
	            		it(`Should validate the returned error ${key.toUpperCase()} value for the ${elm.param.toUpperCase()} error param:`, function( this: Context ){
	    	                const f = e => e.param === elm.param
	    	                this.valObj = this.resp.body.errors.find(f);
	    	                expect(elm[key]).to.equal(this.valObj[key])
	                    });
	            	}	            		           	
	            }
	            
	    	} else {
                it("Should validate the structure of the response payload for a field validation error", function( this: Context ){
	    	        expect((validate( this.resp.body, bodyError )).valid ).to.equal( true )
	            });
	            for( let elm of scenario.errors.list ){
	            	for( let key in elm ){
	            		it(`Should validate the returned error ${key.toUpperCase()} value for the ${elm.param.toUpperCase()} error param:`, function( this: Context ){
	    	                
	    	                const f = e => e.param === elm.param
	    	                this.valObj = this.resp.body.errors.find(f);
	    	                let value = key === "value"? this.submissionPayload[elm.param]: elm[key];
	    	                expect(value).to.equal(this.valObj[key])
	                    });
	            	}	            		           	
	            }
	    	}
	    } else {
	    	it("Should validate the structure of the response payload for a field validation error", function( this: Context ){
	    	    expect((validate( this.resp.body, success )).valid ).to.equal( true )
	        });
	        // for( let elm of scenario.errors.list ){
	        //     for( let key in elm ){
	        //     	it(`Should validate the error ${key.toUpperCase()} value for the ${elm.param.toUpperCase()} error param:`, function( this: Context ){
	    	//             const f = e => e.param === elm.param
	    	//             this.valObj = this.resp.body.errors.find(f);
	    	//             //console.log(this.valObj)
	    	//             //console.log(elm)
	    	//             expect(elm[key]).to.equal(this.valObj[key])
	        //         });
	        //     }	            		           	
	        // }
	    } 
    }
	
}
export default new UserCreation()