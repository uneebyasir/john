import React from "react";
import Style from "./style"
import {Container, Row, Col} from "react-bootstrap"
const mobileContent = () => {
    return (
        <Container className="mobile-content-container" >
            <section className="mobile-content">

                <Row>
                    <Col md={6}>
                        <div>
                            <h5>Mobile App Development</h5>
                            <p>
                                Our team of senior-level mobile developers work's with the world’s leading companies to deliver mobile experiences that are lightning-quick, innovative, personalized, and fluid across any screen.
                            </p>
                            <p>
                                We’ll transform your idea into a sleek mobile application that will put your business at your customers’ fingertips no matter where they are.
                            </p>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="mobile-app-pic">

                        </div>
                    </Col>
                </Row>
            </section>
            <Style/>
        </Container>
    )
}
export default mobileContent;