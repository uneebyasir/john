import React from "react";
import Style from "./style";
import {Container, Row, Col} from "react-bootstrap"

const teamTrans = () => {
    return (
        <section className="trans-card-section">
            <Container className="mobile-content-container">
                <Row md={12}>
                    <div className="trans-heading">
                        <h1>Dedicated Team Transparency</h1>
                        <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.
                            Ut enim ad minim veniam,</p>
                    </div>

                </Row>
                <Row className="trans-card-column">

                        <Col md={4}>
                            <div className="tranp-card">
                                <img src="/static/media/send.svg"/>
                                <h6>Scrum Methodology</h6>
                                <p>Lorem ipsum, or lipsum as it is sometime dummy text used in laying out printed
                                    graphic or web designs.</p>
                                <img src="/static/media/button.png"/>
                            </div>

                        </Col>
                        <Col md={4}>
                            <div className="tranp-card">
                                <img src="/static/media/news.svg"/>
                                <h6>Daily Reports</h6>
                                <p>Lorem ipsum, or lipsum as it is sometime dummy text used in laying out printed
                                    graphic or web designs.</p>
                                <img src="/static/media/button.png"/>
                            </div>

                        </Col>
                        <Col md={4}>
                            <div className="tranp-card">
                                <img src="/static/media/transparency1.svg"/>
                                <h6> 100% Project Transparency</h6>
                                <p>Lorem ipsum, or lipsum as it is sometime dummy text used in laying out printed
                                    graphic or web designs.</p>
                                <img src="/static/media/button.png"/>
                            </div>

                        </Col>
                </Row>
                    <Row>
                        <Col md={4}>
                            <div className="tranp-card">
                                <img src="/static/media/support.svg"/>
                                <h6> Direct Communication</h6>
                                <p>Lorem ipsum, or lipsum as it is sometime dummy text used in laying out printed
                                    graphic or web designs.</p>
                                <img src="/static/media/button.png"/>
                            </div>

                        </Col>
                        <Col md={4}>
                            <div className="tranp-card">
                                <img src="/static/media/linesup.svg"/>
                                <h6>KPI Reporting</h6>
                                <p>Lorem ipsum, or lipsum as it is sometime dummy text used in laying out printed
                                    graphic or web designs.</p>
                                <img src="/static/media/button.png"/>
                            </div>

                        </Col>
                        <Col md={4}>
                            <div className="tranp-card">
                                <img src="/static/media/meeting.svg"/>
                                <h6>Status Meetings</h6>
                                <p>Lorem ipsum, or lipsum as it is sometime dummy text used in laying out printed
                                    graphic or web designs.</p>
                                <img src="/static/media/button.png"/>
                            </div>

                        </Col>

                </Row>
                <Style/>
            </Container></section>
    )
}
export default teamTrans