const fs = require("fs")
module.exports = {
	getHtmlFileString: ()=>{
		return ( fs.readFileSync(process.cwd() + "/services/tempReport.html")).toString();
	}
}