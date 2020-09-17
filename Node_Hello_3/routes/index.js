var express = require("express");
var router = express.Router();
const moment = require("moment");

/* GET home page. */
router.get("/", function (req, res, next) {
  let date = moment(new Date()).format("YYYY-MM-DD");
  let time = moment(new Date()).format("HH:mm:ss");
  let title = "반갑습니다";

  res.render("index", { title, date, time });
});

router.post("/", function (req, res) {
  let date = moment(new Date()).format("YYYY-MM-DD");
  let time = moment(new Date()).format("HH:mm:ss");
  let title = req.body.user + " 님 반갑습니다";
  res.render("index", { title, date, time });
});

module.exports = router;
