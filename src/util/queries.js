module.exports = {
  getEmailCount: (email) => {
    return `SELECT COUNT(*) userCount FROM users WHERE emailId = '${email}'`;
  },
  createUser: () => {
    return `INSERT INTO users (firstName, lastName, emailId, password) VALUES (?, ?, ?, ?)`;
  },
  verifyUser: (password, obj) => {
    return `SELECT COUNT(*) userCount FROM users WHERE emailId = '${obj.body.email}' AND password = '${password}'`;
  },
};
