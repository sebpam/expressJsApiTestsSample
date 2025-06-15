const fs = require("fs")
module.exports = {
  // getEmailCount: (email) => {
  //   return `SELECT COUNT(*) userCount FROM users WHERE emailId = '${email}'`;
  // },
  // createUser: () => {
  //   return `INSERT INTO users (firstName, lastName, emailId, password) VALUES (?, ?, ?, ?)`;
  // },
  // verifyUser: (password, obj) => {
  //   return `SELECT COUNT(*) userCount FROM users WHERE emailId = '${obj.body.email}' AND password = '${password}'`;
  // }

  createUser: (data)=> {
    const txtString = `{"firstName":"${data.firstName}","lastName":"${data.lastName}","email":"${data.email}","password":"${data.password}"}|`
    fs.appendFileSync('../src/db/users.txt', txtString, (err) => {
        return {'success': 1, 'message':'The user has been successfully registered'}
    })
  },

  getEmailCount: (email)=>{
    let users = [] 
    let userObj;
    let x = ( fs.readFileSync('../src/db/users.txt', 'utf-8') ).split('|')
    for(const user of x){
      if(user !== ''){
        users.push(JSON.parse(user))
      }
    }

    if(email=== undefined){
       return users
    }else{
      userObj = users.find((element) => element.email === email)
      console.log(userObj)
      if( userObj === undefined ){
        return {message:'No match has been found for the email provided'}
      };
      return userObj
    }
    
  },

  resetDb: ()=>{
    fs.writeFileSync('../src/db/users.txt', '{"firstName": "masteruserfirst","LastName": "masteruserlast","email": "email@email.com","password": "Test@1234"}|')
    return {'success': 1, 'message':'The text file has been reset to master user'}
  }
};
