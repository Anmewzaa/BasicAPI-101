const express = require("express"); // เรียก express
const cors = require("cors"); // เรียก cors
const morgan = require("morgan"); // เรียก morgan
const mongoose = require("mongoose"); // เรียก mongoose

const app = express(); // สร้าง app ด้วย express

// เชื่อมต่อ MongoDB
mongoose
  .connect(
    `mongodb+srv://Admin:123@basicapi.prh52hy.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log(`Connect to database successfully`))
  .catch((err) => {
    console.log("Error", err);
  });

// middlewares
app.use(express.json()); // ทำให้สามารถส่ง json ได้
app.use(cors()); // ใช้งาน cors
app.use(morgan("dev")); // ใช้งาน morgan โหมด dev

app.use("/api", require("./routes/studentRoute"));

// สั่งให้ server ทำงาน
const port = 3000; // กำหนดตัวแปร port ให้มีค่าเท่ากับ 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
