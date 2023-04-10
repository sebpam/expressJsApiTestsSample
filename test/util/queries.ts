export default {
  getEmails: (count) => {
    return `SELECT emailId FROM users LIMIT ${count}`;
  },
  getUser: (email) =>{
    return `select firstName, lastName, emailId email from users WHERE emailId = '${email}'`;
  },
  deleteRecord: (email) => {
    return `DELETE FROM users WHERE emailId = '${email}'`;
  }
};