import React from "react";
import Style from "./style";
import {Container, Row, Col} from "react-bootstrap"

const alphaNumbers = () => {
    return (
        <section className="alpha-numbers-section">
            <Container>
                <Col md={12} className="alpha-number-div">
                    <div><h1>
                        AlphaSquad by the Numbers
                    </h1></div>
                </Col>
                <Col md={12}>
                    <Row>
                        <Col md={3}>
                            <div className="number-card">
                                <h5>96%</h5>
                                <span>Client Retention</span></div>
                        </Col>
                        <Col md={3}>
                            <div className="number-card">
                                <h5>82%</h5>
                                <span>Referral Rate</span></div>
                        </Col>
                        <Col md={3}>
                            <div className="number-card">
                                <h5>1,100+</h5>
                                <span>Number of Projects</span></div>
                        </Col>
                        <Col md={3}>
                            <div className="number-card">
                                <h5>900,000+</h5>
                                <span>Users Impacted</span></div>
                        </Col>

                    </Row>
                </Col>
            </Container>
            <Style/>
        </section>




    )
}
export default alphaNumbers;