const express = require("express");
const router = express.Router();

const {
  addOrderDetails,
  getAllOrderDetails,
  deleteOrderDetails,
  getbyFoodId,
  getbyOrderDetailsId,
} = require("../controllers/orderDetailsCtrl.js");

router.post("/", addOrderDetails);
router.get("/", getAllOrderDetails);
router.delete("/delete/:id", deleteOrderDetails);
router.get("/getbyfood/:id", getbyFoodId);
router.get("/getbyorderdetailsid/:id", getbyOrderDetailsId);
module.exports = router;
