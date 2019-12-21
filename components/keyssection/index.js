import React from "react"
import Style from "./style"
import {Container, Row, Col} from "react-bootstrap"

const keycards = () => {
    return (
        <section className="key-section">
            <h1>The Keys to Your Next Web App</h1>
            <Container>
                <Col md={12}>
                    <Row>
                        <Col md={3}>
                            <div className="key-card">
                                <img src="/static/media/speedometer.svg" className="keyImg"/>
                                <p>Performance</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="key-card">
                                <img src="/static/media/feedback.svg" className="keyImg"/>
                                <p>User Experience</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="key-card">
                                <img src="/static/media/home.svg" className="keyImg"/>
                                <p>Architecture</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="key-card">
                                <img src="/static/media/scalable.svg" className="keyImg"/>
                                <p>Scalability</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="key-card">
                                <img src="/static/media/drawing.svg" className="keyImg"/>
                                <p>Design </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="key-card">
                                <img src="/static/media/shield.svg" className="keyImg"/>
                                <p>Security </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="key-card">
                                <img src="/static/media/responsive-design-symbol.svg" className="keyImg"/>
                                <p>Responsiveness</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="key-card">
                                <img src="/static/media/tools.svg" className="keyImg"/>
                                <p>Performance</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Container>
            <Style/>
        </section>
    )
}
export default keycards