import { Scenario } from "../interfaces/Scenario"
import { User } from "../interfaces/User"
import { faker } from '@faker-js/faker';

class PayloadCreation{
    
    payload: User = {};
    scenario: Scenario;
  
    constructor( scenario: Scenario ){
        this.scenario = scenario;
    }
    create(): User{
		if( this.scenario.data.firstName ){
			this.payload.firstName = this.scenario.data.firstName === "random"? faker.name.firstName(): this.scenario.data.firstName;
		}
		if( this.scenario.data.lastName ){
			this.payload.lastName = this.scenario.data.lastName === "random"? faker.name.lastName(): this.scenario.data.lastName;
		}
		if( this.scenario.data.email ){
			this.payload.email = this.scenario.data.email === "random"? faker.internet.email( ( this.payload.firstName || undefined ), ( this.payload.lastName || undefined ) ): this.scenario.data.email;
		}
		if( this.scenario.data.password ){
			this.payload.password = this.scenario.data.password;
		}
		return this.payload;
	}
}

export default PayloadCreation;