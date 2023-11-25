import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../img/logo.png';

function NavigationBar() {
return (
    <>
    {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar-expand-lg bg-black mb-3">
            <Container>
            <Navbar.Brand href="#">
                <img src={logo}/>
            </Navbar.Brand>
            <Navbar.Toggle className='' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Navbar.Brand href="#">
                        <img src={logo}/>
                    </Navbar.Brand>
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 gap-4">
                    <Nav.Link href="#action1" className='text-white' >Home</Nav.Link>
                    <Nav.Link href="#action2" className='text-white' >Course</Nav.Link>
                    <Nav.Link href="#action2" className='text-white' >Blog</Nav.Link>
                    <Nav.Link href="#action2" className='text-white' >Testimoni</Nav.Link>
                </Nav>
                <div className="logsig d-flex justify-content-center align-items-center gap-4 text-center">
                    <button href="#login" className="bg-dark text-white px-3 py-1 rounded-3 " >Login</button>
                    <button href="#signup" className="text-white px-3 py-1 rounded-3 bg-transparent " >Sign Up</button>
                </div>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Container>
        </Navbar>
        ))}
    </>
    );
}

export default NavigationBar;