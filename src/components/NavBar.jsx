import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

function NavBar(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"><img style={{ width: "100px" }} src="https://itviec.com/assets/logo-itviec-65afac80e92140efa459545bc1c042ff4275f8f197535f147ed7614c2000ab0f.png"></img></Navbar.Brand>
               <div>
                   
               </div>
                <Nav >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
               
            </Navbar>
        </div>
    );
}

export default NavBar;