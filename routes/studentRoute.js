const express = require("express"); // เรียก express
const router = express.Router(); // สร้าง router ด้วย express
const Student = require("../models/student"); // เรียกใช้ student schema

// ทดสอบ API
router.get("/", (req, res) => {
  res.json({ message: "Hello from student route" });
});

// Create (สร้าง)
router.post("/create", async (req, res) => {
  const { studentID, fullName, gender } = req.body;
  if (!(studentID && fullName && gender))
    return res.status(400).json({
      message: "something went wrong",
    });
  await Student.create({ studentID, fullName, gender }).then(() => {
    res.status(201).json({ message: "Create success" });
  });
});
// Read All (อ่านข้อมูลทั้งหมด)
router.get("/get", (req, res) => {
  Student.find({}).then((response) => {
    res.status(200).json({ message: "Success", data: response });
  });
});
// Read (อ่านข้อมูลเเค่คนเดียว)
router.get("/get/:id", (req, res) => {
  const { id } = req.params;
  Student.findOne({ studentID: id }).then((response) => {
    res.status(200).json({ message: "Success", data: response });
  });
});
// Update (อัพเดทข้อมูล)
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name)
    return res.status(400).json({
      message: "something went wrong",
    });
  await Student.findOneAndUpdate({ studentID: id }, { fullName: name }).then(
    () => {
      res.status(200).json({ message: "Update success" });
    }
  );
});
// Delete (ลบข้อมูล)
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Student.findOneAndRemove({ studentID: id }).then(() => {
    res.status(200).json({ message: "Remove success" });
  });
});

module.exports = router; // ส่ง router ออกไปใช้
