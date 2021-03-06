var mongoose = require("mongoose");

/*
NoSQL인 MongoDB를 RDBMS 처럼 사용하기 위해서 Schema를 생성
Table 구조를 생성하는 형태
VO객체로써 역할을 수행하게 된다
*/
var schema = mongoose.Schema;

// bbsVO생성
// JSON 데이터구조로 bbsVO의 table(Schema)를 생성하기위한 객체 선언
var bbsVO = new schema({
  // 칼럼이름 : 데이터Type
  b_date: String,
  b_time: String,
  b_title: String,
  b_write: String,
  b_text: String,
  b_count: Number,
});

// mongoose의 model() 함수를 사용하여
// tbl_bbs table을 만들고 그 구조를 bbsVO에 선언된 형태로 만들겠다.
// model을 다른 모듈에서 사용할수 있도록 export 한다.
// tbl_bbs라는 이름으로 테이블을 반들겠다 라고 선언을 했다.
// 길제 mongoDB에 생성된 table은 복수형으로 선언된다.
module.exports = mongoose.model("tbl_bbs", bbsVO);
