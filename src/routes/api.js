const express = require("express");
const router = express.Router();

const adminController=require("../controllers/adminController");
const postController=require("../controllers/postController");
const subAdminController=require("../controllers/subAdminController");
const userController=require("../controllers/userController");



router.get("/adminCreate",adminController.create);
router.get("/adminRead",adminController.read);
router.get("/adminDelete",adminController.delete);
router.get("/adminUpdate",adminController.update);


router.get("/postCreate",postController.create);
router.get("/postRead",postController.read);
router.get("/postDelete",postController.delete);
router.get("/postUpdate",postController.update);

router.get("/subAdminCreate",subAdminController.create);
router.get("/subAdminRead",subAdminController.read);
router.get("/subAdminDelete",subAdminController.delete);
router.get("/subAdminUpdate",subAdminController.update);

router.get("/userCreate",userController.create);
router.get("/userRead",userController.read);
router.get("/userDelete",userController.delete);
router.get("/userUpdate",userController.update);


// Export Router
module.exports = router;