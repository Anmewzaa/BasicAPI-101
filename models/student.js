const mongoose = require("mongoose"); // เรียก mongoose

// สร้าง Schema
const StudentSchema = mongoose.Schema(
  {
    studentID: {
      type: String, // type คือ ชนิดข้อมูล
      require: true, // require : true คือ กำหนดว่าต้องมีข้อมูลตัวนี้รึป่าว
      unique: true, // unique : true คือ ให้เลข ID เป็น Primary key
    },
    fullName: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
  },
  { timeStamps: true } // เก็บเวลา
);

// ส่ง Student Model ออกไปใช้ที่ไฟล์อื่น
module.exports = mongoose.model("Student", StudentSchema);
