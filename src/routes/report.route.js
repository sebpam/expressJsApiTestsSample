const express = require("express");
const router = express.Router();
const controllerReport = require("../controllers/report.controller")
router.get("/apiTestsResults", controllerReport.displayReport);
module.exports = router;