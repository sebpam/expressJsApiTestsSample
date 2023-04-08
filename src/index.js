const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const reportRoute = require("./routes/report.route");
const usersRoute = require("./routes/users.route");

app.use(bodyParser.json());
app.use("/report", reportRoute);
app.use("/users", usersRoute);
app.listen(3000, ()=>{
	console.log("app has started")
});