import { Container, Nav, Navbar } from 'react-bootstrap';
import './style.css';


export default function Header() {
    return (
        <Navbar expand="lg" className="header d-flex justify-content-center">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                    <Nav>
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/searchRecipes">SEARCH RECIPES</Nav.Link>
                        <Nav.Link href="/nutrition">NUTRITION</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}