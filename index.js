const axios = require("axios");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// 스미싱 검사
app.get("/smishing/check/", async (req, res) => {
  try {
    const response = await axios.get("http://200.5.60.236:3030/smishing/check/", {
      params: {
        message: req.query.message,
      },
    });

    if (response.data.code == 200) {
      res.send(response.data);
      console.log(req.query.message); // 앱파트에서 받은 메시지 체크
      console.log(response.data); // 인공지능 서버에서 받는 값 체크
    }
    else {
      res.status(400).send({ error : "잘못된 응답 코드"});
    }
  } catch (error) {
    console.error("에러 발생:", error.message);
    res.status(500).send({ error: "서버 오류 발생" });
  }
});


// 스미싱 신고
app.get("/smishing/report/", async (req, res) => {
  try {
    const response = await axios.get("http://200.5.60.236:3030/smishing/check/", {
      params: {
        message: req.query.message,
      },
    });

    if (response.data.code == 200) {
      res.send(response.data);
      console.log(req.query.message); // 앱파트에서 받은 메시지 체크
      console.log(response.data); // 인공지능 서버에서 받는 값 체크
    }
    else {
      res.status(400).send({ error : "잘못된 응답 코드 ${code}"});
    }
  } catch (error) {
    console.error("에러 발생:", error.message);
    res.status(500).send({ error: "서버 오류 발생" });
  }
});

app.listen(port, () => {
  console.log(`웹서버 구동... ${port}`);
});
