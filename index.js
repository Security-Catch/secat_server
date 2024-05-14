const axios = require("axios");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/smishing/check/", async (req, res) => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/detect", {
      params: {
        message: req.query.message,
      },
    });
    res.send(response.data); // 인공지능 파트에서 받은 값 전달
    console.log(req.query.message); // 앱파트에서 받은 메시지 체크
    console.log(response.data); // 인공지능 서버에서 받는 값 체크
  } catch (error) {
    console.error(error);
  }
  console.log(req.body);
});

// 스미싱 신고
app.get("/smishing/report/", async (req, res) => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/detect", {
      params: {
        message: req.query.message,
      },
    });
    res.send(response.data); // 인공지능 파트에서 받은 값 전달
    console.log(req.query.message); // 앱파트에서 받은 메시지 체크
    console.log(response.data); // 인공지능 서버에서 받는 값 체크
  } catch (error) {
    console.error(error);
  }
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`웹서버 구동... ${port}`);
});
