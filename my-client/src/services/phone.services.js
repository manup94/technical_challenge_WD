import axios from 'axios'
import.meta.env.BASE_URL

class PhoneServices {

    constructor() {

        this.api = axios.create({
            baseURL: `http://localhost:5005/api/phones`
        })
    }

    GetPhones() {
        return this.api.get('/getPhones')
    }

    GetPhoneDetails(phone_id) {
        return this.api.get(`/getPhoneDetails/${phone_id}`)
    }




}

const phoneServices = new PhoneServices()

export default phoneServices
