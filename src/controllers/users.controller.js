const usersService = require("../services/users.service");
const { validationResult } = require("express-validator");

const express = require("express");
const router = express.Router();
module.exports = {
    register: async ( req, res ) =>{
    	try{
            const errors = validationResult( req );
            if( !errors.isEmpty() ){
                res.status(400).send({ success: 0, erros: errors.array() });
            } else {

            	const data = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password
                };

                const serviceData = await usersService.register(data);
        	    res.status(200).send({
                    success: 1,
                    data: serviceData.result.data[0]
                });
            }
    	} catch( e ){
    		console.log( e )
    	}


    	
    }
}