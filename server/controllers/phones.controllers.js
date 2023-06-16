const axios = require("axios");
const Phone = require('../models/Phone.model')

const GetPhones = (req, res, next) => {

    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const GetPhoneDetails = (req, res, next) => {

    const { phone_id } = req.params

    Phone
        .findById(phone_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}



module.exports = {
    GetPhones,
    GetPhoneDetails
}