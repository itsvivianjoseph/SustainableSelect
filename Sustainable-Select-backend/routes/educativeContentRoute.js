// const router = require("express").Router();
// const EducativeContent = require("../models/EducativeContent");

// router.get("/", async (req, res) => {
//   try {
//     const educativeContents = await EducativeContent.aggregate([{ $sample: { size: 1 } }]);
//     res.status(200).json(educativeContents);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// module.exports = router;
const router = require("express").Router();
const EducativeContent = require("../models/EducativeContent");

router.get("/textile", async (req, res) => {
  try {
    const educativeContent = await EducativeContent.aggregate([
      { $match: { category: "textile" } },
      { $sample: { size: 1 } }
    ]);
    res.status(200).json(educativeContent);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving educative content" });
  }
});

router.get("/electricity", async (req, res) => {
  try {
    const educativeContent = await EducativeContent.aggregate([
      { $match: { category: "electricity" } },
      { $sample: { size: 1 } }
    ]);
    res.status(200).json(educativeContent);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving educative content" });
  }
});

router.get("/transport", async (req, res) => {
  try {
    const educativeContent = await EducativeContent.aggregate([
      { $match: { category: "transport" } },
      { $sample: { size: 1 } }
    ]);
    res.status(200).json(educativeContent);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving educative content" });
  }
});

router.get("/waste", async (req, res) => {
  try {
    const educativeContent = await EducativeContent.aggregate([
      { $match: { category: "waste" } },
      { $sample: { size: 1 } }
    ]);
    res.status(200).json(educativeContent);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving educative content" });
  }
});

module.exports = router;
