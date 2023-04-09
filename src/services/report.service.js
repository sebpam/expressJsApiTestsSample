const fs = require("fs");
module.exports = {
  getHtmlFileString: () => {
    if (fs.existsSync(process.cwd() + "/src/services/tempReport.html")) {
      return fs
        .readFileSync(process.cwd() + "/src/services/tempReport.html")
        .toString();
    }
    return "<h1>The report has not been published yet</h1>";
  },
};
