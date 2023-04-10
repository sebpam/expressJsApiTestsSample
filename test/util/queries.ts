export default {
  getEmails: (count) => {
    return `SELECT emailId FROM users LIMIT ${count}`;
  }
};
