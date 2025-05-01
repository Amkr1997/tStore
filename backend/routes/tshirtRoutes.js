const express = require("express");
const {
  getAllTshirts,
  getSingleTshirt,
  addTshirt,
  updateTshirt,
  deleteTshirt,
} = require("../controllers/tshirtController");
const router = express.Router();

router.route("/get/all/tshirts").get(getAllTshirts);
router.route("/get/single/tshirt/:id").get(getSingleTshirt);
router.route("/add/single/tshirt").post(addTshirt);
router.route("/update/tshirt/:id").post(updateTshirt);
router.route("/delete/tshirt/:id").delete(deleteTshirt);

module.exports = router;
