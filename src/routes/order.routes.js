const express=require("express")
const router=express.Router();

const oredrController=require("../controller/order.controller.js");
const { authenticate } = require("../middleware/authenticate.js");


router.post("/",authenticate, oredrController.createOrder);
router.get("/user",authenticate,oredrController.orderHistory);
router.get("/:id",authenticate, oredrController.findOrderById);

module.exports=router;