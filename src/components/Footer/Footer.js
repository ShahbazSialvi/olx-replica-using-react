import React from 'react'
import style from './footer.module.css'
import { Row, Container, Col, Navbar, Nav } from 'react-bootstrap'

function Footer() {
    return (
        <div>
            <div className={style.endposter}>
                <Container-Fluid className={style.endposter}>
                    <Row>
                        <Col className={style.heading}>POPULAR CATEGORIES</Col>
                        <Col className={style.heading}>TRENDING SEARCHES</Col>
                        <Col className={style.heading}>ABOUT US</Col>
                        <Col className={style.heading}>OLX</Col>
                        <Col className={style.heading}>FOLLOW US</Col>
                    </Row>
                    <Row>
                        <Col className={style.xs}>Cars</Col>
                        <Col className={style.xs}>Bikes</Col>
                        <Col className={style.xs}>About OLX Group</Col>
                        <Col className={style.xs}>Help</Col>
                        <Col><img src=""></img><img src=""></img><img src=""></img><img src=""></img><img src=""></img></Col>
                    </Row>
                    <Row>
                        <Col className={style.xs}>Flats for rent</Col>
                        <Col className={style.xs}>Watches</Col>
                        <Col className={style.xs}>Olx blog</Col>
                        <Col className={style.xs}>sitemap</Col>
                        <Col>5</Col>
                    </Row>
                    <Row>
                        <Col className={style.xs}>Jobs</Col>
                        <Col className={style.xs}>Books</Col>
                        <Col className={style.xs}>Contact Us</Col>
                        <Col className={style.xs}>Legal & Privacy information</Col>
                        <Col>0</Col>
                    </Row>
                    <Row>
                        <Col className={style.xs}>Mobile Phones</Col>
                        <Col className={style.xs}>Dogs</Col>
                        <Col className={style.xs}>OLX for Businesses</Col>
                        <Col className={style.xs}></Col>
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
