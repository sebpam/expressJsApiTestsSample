const fs = require("fs");
module.exports = {
  getHtmlFileString: () => {
    if (fs.existsSync("./mochawesome.html")) {
      return fs
        .readFileSync("./mochawesome.html")
        .toString();
    }
    return fs
        .readFileSync("./tempReport.html")
        .toString();
  }
};
