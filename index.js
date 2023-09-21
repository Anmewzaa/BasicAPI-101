const express = require("express"); // เรียก express
const cors = require("cors"); // เรียก cors
const morgan = require("morgan"); // เรียก morgan
const mongoose = require("mongoose"); // เรียก mongoose

const app = express(); // สร้าง app ด้วย express

// middlewares
app.use(cors()); // ใช้งาน cors
app.use(morgan("dev")); // ใช้งาน morgan โหมด dev

app.get("/", (req, res) => {
  res.send("Hello API!");
});

// สั่งให้ server ทำงาน
const port = 3000; // กำหนดตัวแปร port ให้มีค่าเท่ากับ 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
