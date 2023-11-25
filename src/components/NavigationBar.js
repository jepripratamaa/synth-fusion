import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavigationBar.css'
import logo from '../img/logo.png';

function NavigationBar() {
return (
    <>
    {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav-style navbar-expand-lg mb-3">
            <Container>
            <Navbar.Brand href="#">
                <img src={logo}/>
            </Navbar.Brand>

            <Navbar.Toggle className='navbar-toggler border-0 ' aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas className='bg-transparent sidebar ' 
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                >
                <Offcanvas.Header className='head-sidebar' closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        <Navbar.Brand href="#">
                            <img src={logo}/>
                        </Navbar.Brand>
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body className='text-center' >
                    <Nav className="menu-style justify-content-center align-item-center flex-grow-1 pe-3 gap-4">
                        <Nav.Link href="#" className='text-white' >Home</Nav.Link>
                        <Nav.Link href="#" className='text-white' >Course</Nav.Link>
                        <Nav.Link href="#" className='text-white' >Blog</Nav.Link>
                        <Nav.Link href="#" className='text-white' >Testimoni</Nav.Link>
                    </Nav>
                    <div className="btn-logsign d-flex justify-content-center align-items-center gap-4 text-center">
                        <button href="#" className="login-btn text-white px-3 py-1 rounded-3 " >Login</button>
                        <button href="#" className="sign-btn text-white px-3 py-1 rounded-3 " >Sign Up</button>
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