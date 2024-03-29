import React from 'react'
import style from './Poster.module.css'
import { Row, Col } from 'react-bootstrap'

function Poster() {
    return (
        <Container-Fluid className={style.poster}>
            <Row>
                <Col col={3}>
                    <img src="https://statics.olx.com.pk/external/base/img/phone-app.webp" alt='phone'></img>
                </Col>
                <Col col={3}>
                    <h1>TRY THE OLX APP</h1>
                    <p className={style.paragraph}>Buy, Sell and find just about anything using the app on your mobile.</p>
                </Col>
                <Col col={3}>
                    <h2>Get your app today</h2>
                    <Row>
                        <Col col={4}><img src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp" alt="appstore"></img></Col>
                        <Col col={4}><img src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp" alt="playstore"></img></Col>
                        
                    </Row>
                </Col>
            </Row>
        </Container-Fluid>
    )
}

export default Poster
