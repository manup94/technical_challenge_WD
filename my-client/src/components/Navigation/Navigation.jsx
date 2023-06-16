
import './Navigation.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const Navigation = () => {




    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand >Phones shop</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to={'/'} className='nav-link '> Home </Link>
                    <Link to={'/phones'} className='nav-link '> Phones </Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Navigation