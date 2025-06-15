const fs = require('fs')
export default {
  // getEmails: (count) => {
  //   return `SELECT emailId FROM users LIMIT ${count}`;
  // },
  // getUser: (email) => {
  //   return `select firstName, lastName, emailId email from users WHERE emailId = '${email}'`;
  // },
  // deleteRecord: (email) => {
  //   return `DELETE FROM users WHERE emailId = '${email}'`;
  // },

  getEmails: (email?: 'string')=>{
    let users = [] 
    let x = ( fs.readFileSync('../src/db/users.txt', 'utf-8') ).split('|')
    for(const user of x){
      if(user !== ''){
        users.push(JSON.parse(user))
      }
    }
    let emails = []
    for(const user of users){
      emails.push( user.email )
    }
    if(email){
      return users.find((element) => element.email === email);
    }
    return emails

  }

};
