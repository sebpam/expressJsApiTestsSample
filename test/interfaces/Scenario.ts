interface Data{
	firstName?: any;
	lastName?: any;
	password?: any;
	email?: any;
}
export interface Scenario{
	authorization?: any;
	errors?: object[];
	data: Data;
}