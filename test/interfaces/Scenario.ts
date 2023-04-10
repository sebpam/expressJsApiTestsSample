interface Data{
	firstName?: (string|number);
	lastName?: (string|number);
	password?: (string|number);
	email?: (string|number);
}

interface List{
    value?: (string|number);
    msg: string; 
    param: string; 
    location?: string;
}

interface Errors{
	type: string;
	list: List[];
}
export interface Scenario{
	authorization?: any;
	errors?: Errors;
	data: Data;
}