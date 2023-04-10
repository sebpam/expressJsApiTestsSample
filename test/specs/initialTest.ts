import userCreation from "../validations/UserCreation"
describe("initial test", ()=>{
	const scenario = { 
		data: {
			"email":"random"
		},
		authorization: "bearer prooeoeoooro",
		errors:[]
	}
	userCreation.validateUserCreation(scenario);
})