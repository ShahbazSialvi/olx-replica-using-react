import React from 'react';
import { Navbar, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import style from './navbar.module.css';

function Navebar() {
    return (
        <div>
            <Navbar sticky="top" bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img className={style.logo} alt="logoImg" src="https://banner2.cleanpng.com/20180419/lve/kisspng-olx-classified-advertising-company-entrepreneurshi-5ad85872d81723.1584106915241278588851.jpg" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className={style.searchbar}>
                            <Form.Control className={style.searchbar1} size="lg" type="search" placeholder="Pakistan" />
                            <Form.Control className={style.searchbar2} size="lg" type="search" placeholder="Find Cars, Mobile Phones and more.." />
                    </Form>
                    <Button className={style.navbarLogin} variant="link">Login</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navebar
