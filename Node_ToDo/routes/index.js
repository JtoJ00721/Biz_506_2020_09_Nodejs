const express = require("express");
const router = express.Router();
const moment = require("moment");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/*
client에서 데이터를 보낼때 3가지 방법
1. query String 방식
  http://localhost:3000/?변수1=변수값&변수2=변수값
  let 변수1 = req.query.변수1
  let 변수2 = req.query.변수2

2. Path Varriable 방식 : URL 처럼 값을 보내는 방법 
  http://localhost:3000/값1/값2
  router.get("/:변수1/:변수2")
  let 변수1 = req.params.변수1
  let 변수2 = req.params.변수2

3. form에 input에 값을 담아서 post로 보내는 방법
  form(method="POST")
    input(name="변수1")
    input(name="변수2")

  let 변수1 = req.body.변수1
  let 변수2 = req.body.변수2
*/
router.post("/", function (req, res) {
  let todo = req.body.todo;
  let to_date = moment().format("YYYY-MM-DD");
  let to_time = moment().format("HH:mm:ss");

  req.body.to_date = to_date;
  req.body.to_time = to_time;

  // res.send(todo);
  // res.json(req.body);
  res.render("index", { todo_data: req.body });
});

// get("/insert") : 입력을 받기위해서
// 사용자(client)에게 입력 form을 보여주는 용도의 URL
router.get("/insert", function (req, res) {
  res.render("write");
});

// post("/insert") : form에서 입력받은 내용을 서버로 전송했을때
//    데이터를 수신하여 처리할 용도의 URL
// write.pug의 form에 action을 지정하지 않아도 된다.
router.post("/insert", function (req, res) {
  // 데이터 저장하는 등의 코드
  res.redirect("/");
});

router.get("/update", function (req, res) {
  res.render("write");
});

router.post("/update", function (req, res) {
  // 데이터를 수정하는 등의 코드
  res.redirect("/");
});

module.exports = router;
