const router = require("express").Router();

const {
    GetPhones,
    GetPhoneDetails
} = require('./../controllers/phones.controllers')

router.get("/getPhones", GetPhones)
router.get("/getPhoneDetails/:phone_id", GetPhoneDetails)


module.exports = router