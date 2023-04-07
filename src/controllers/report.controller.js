const reportService = require("../services/report.service");
const express = require("express");
const router = express.Router();
module.exports = {

    displayReport: ( req, res )=>{
    	res.send(reportService.getHtmlFileString())
    }

}