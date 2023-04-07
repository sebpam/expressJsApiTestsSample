const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const reportRoute = require("./routes/report.route");

app.use("/report", reportRoute);
app.listen(3000, ()=>{
	console.log("app has started")
});