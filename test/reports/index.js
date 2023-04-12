const express = require("express");
const app = express();
const reportRoute = require("./routes/report.route");
app.use("/report", reportRoute);
app.listen(8080, () => {
  console.log("App has started");
});
