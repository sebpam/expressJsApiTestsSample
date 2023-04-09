const fs = require("fs");
const rootDir = require("../../rootDir");
module.exports = {
  getHtmlFileString: () => {
    if (fs.existsSync(rootDir() + "/reports/mochawesome.html")) {
      return fs
        .readFileSync(rootDir() + "/reports/mochawesome.html")
        .toString();
    }
    return fs
        .readFileSync(rootDir() + "/reports/tempReport.html")
        .toString();
  }
};
