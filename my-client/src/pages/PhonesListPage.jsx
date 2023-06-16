import { useEffect, useState } from "react"
import PhoneServices from "../services/phone.services"
import { Container, Spinner, Row, } from 'react-bootstrap'
import PhonesList from "../components/PhonesList/PhonesList"

const PhonesListPage = () => {

    const [phones, setPhones] = useState()

    useEffect(() => {
        fetchPhones()
    }, [])


    const fetchPhones = () => {
        PhoneServices
            .GetPhones()
            .then(({ data }) => setPhones(data))
            .catch((error) => console.log(error))
    }

    return (
        <div className='loader-container'>
            {!phones ? (
                <div >
                    <Spinner className='loader' animation="border" variant="light" />
                </div>
            )
                :
                (
                    <div className="phones-container">

                        {
                            !phones ? (
                                <Spinner className='loader' animation="border" variant="light" />
                            ) : (
                                <PhonesList fetchPhones={fetchPhones} phones={phones} />
                            )
                        }

                    </div>
                )}
        </div>
    )
}

export default PhonesListPage