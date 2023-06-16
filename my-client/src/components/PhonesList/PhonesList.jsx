import { Col } from "react-bootstrap"
import Details from '../Modal/Modal'
import './PhonesList.css'
const PhonesList = ({ phones }) => {


    return (
        <ul>
            {
                phones.map(elm => {
                    return (
                        <div className="phone" key={elm._id}>
                            <li>{elm.name}</li>
                            <Details _id={elm._id}></Details>
                        </div>

                    )
                })
            }

        </ul>
    )
}

export default PhonesList


