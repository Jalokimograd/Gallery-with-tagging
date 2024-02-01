var express = require("express");
var router = express.Router();

const apiController = require("../controllers/ApiController");
const pagesController = require("../controllers/PagesController");
/* GET responses */
router.get("/getImages", apiController.getImages);
router.get("/getDirectories", apiController.getDirectories);
router.get("/getCategories", apiController.getCategories);

router.post("/addTags", apiController.addTags);
router.post("/addDirectories", apiController.addDirectories);

router.get("/updateServer", apiController.updateServer);

/* POST responses */
router.post("/auth", pagesController.login);

module.exports = router;
