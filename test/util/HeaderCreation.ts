import { Scenario } from "../interfaces/Scenario"
import { Header } from "../interfaces/Header"
import ApiRestClient from "../util/ApiRestClient";
import urls from "../config/urls"

class HeaderCreation{
    
    header: Header = {'content-type':'application/json'};
    scenario: Scenario;
  
    constructor( scenario: Scenario ){
        this.scenario = scenario;
    }
    async create(){
        const create = new ApiRestClient(urls.base, urls.endpoints.token, {"email":"pambu76@hotmail.com","password":"1234"}, this.header )
        this.header.authorization = this.scenario.authorization? this.scenario.authorization: "bearer "+ ( await create.submitPostRequest()).text
        console.log( this.header )
        return this.header;
	}
}

export default HeaderCreation;