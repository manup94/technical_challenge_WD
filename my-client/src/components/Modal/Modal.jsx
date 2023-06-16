import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PhoneServices from "../../services/phone.services"


function Details({ _id }) {
    const [show, setShow] = useState(false);
    const [phone, setPhone] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => {
        fetchPhone()
        setShow(true)
    };



    const fetchPhone = () => {
        PhoneServices
            .GetPhoneDetails(_id)
            .then(({ data }) => setPhone(data))
            .catch((error) => console.log(error))
    }


    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Detalles
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{phone.name}</Modal.Title>
                    <img style={{ width: '50%' }} src={`../../images/${phone.imageFileName}`} alt="" />
                </Modal.Header>
                <Modal.Body>
                    <p>{phone.description}</p>
                    <p>{phone.manufacturer}</p>
                    <p>{phone.screen}</p>
                    <p>{phone.processor}</p>
                    <p> {phone.ram}g</p>
                    <p>{phone.price} Euros</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Details;