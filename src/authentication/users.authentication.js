const jwt = require('jsonwebtoken');
const {secret} = require("../config/jwtSecretKey")
module.exports = {
    verifyToken: (data) =>{
        console.log(data)
        let test;
        if( data.headers && data.headers.authorization ){
            try{
               test = jwt.verify(data.headers.authorization.split(' ')[1], secret)
            } catch( e ){
                console.log( e );
                test = false;
            }
        } else {
            test = false;
        }
        return test;
    }
}