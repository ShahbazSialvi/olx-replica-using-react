import React from 'react'
import style from './footer.module.css'
import { Row, Container, Col, Navbar, Nav } from 'react-bootstrap'

function Footer() {
    return (
        <div>
            <div className={style.endposter}>
                <Container-Fluid className={style.endposter}>
                    <Row>
                        <Col>POPULAR CATEGORIES</Col>
                        <Col>TRENDING SEARCHES</Col>
                        <Col>ABOUT US</Col>
                        <Col>OLX</Col>
                        <Col>FOLLOW US</Col>
                    </Row>
                    <Row>
                        <Col>Cars</Col>
                        <Col>Bikes</Col>
                        <Col>About OLX Group</Col>
                        <Col>Help</Col>
                        <Col><img src=""></img><img src=""></img><img src=""></img><img src=""></img><img src=""></img></Col>
                    </Row>
                    <Row>
                        <Col>1</Col>
                        <Col>2</Col>
                        <Col>3</Col>
                        <Col>4</Col>
                        <Col>5</Col>
                    </Row>
                    <Row>
                        <Col>6</Col>
                        <Col>7</Col>
                        <Col>8</Col>
                        <Col>9</Col>
                        <Col>0</Col>
                    </Row>
                    <Row>
                        <Col>1</Col>
                        <Col>2</Col>
                        <Col>3</Col>
                        <Col>4</Col>
                        <Col>5</Col>
                    </Row>
                </Container-Fluid>
            </div>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home"><h6>Other Countries</h6></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">South Africa</Nav.Link>
                        <Nav.Link href="#features">Indonesia</Nav.Link>
                        <Nav.Link href="#pricing">India</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        </div>
    )
}

export default Footer
