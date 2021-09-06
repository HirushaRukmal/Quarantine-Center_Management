const express = require("express");
const router = express.Router();

const {
  getFoods,
  addFoods,
  updateFoods,
  deleteFoods,
  getbyId,
} = require("../controllers/foodsCtrl.js");

router.get("/", getFoods);
router.post("/", addFoods);
router.put("/update/:id", updateFoods);
router.delete("/delete/:id", deleteFoods);
router.get("/get/:id", getbyId);

module.exports = router;
