var express = require("express");
const { request } = require("../app");
var router = express.Router();
var mongoose = require("mongoose");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
