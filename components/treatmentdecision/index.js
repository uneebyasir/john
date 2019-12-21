import React from "react";
import Style from "./style";
import {Container, Row, Col} from "react-bootstrap"

const decision = () => {
    return (
        <section className="decision-section">
            <Container>
                <Row>
                    <Col md={6} className="dec-svg"/>
                    <Col md={6}>
                        <div className="guess-div">
                            <img src="/static/media/guess.png"/>
                            <h1>TAKE THE GUESSWORK OUT OF <b>DECISIONS</b></h1>
                            <p>We help treatment centers integrate their data sources (billing, EMR, CRM, web, etc.) into a unified dashboard that provides clear KPIs for operations, UR and billing, admissions, clinical, and compliance.<br/><br/>

                                Our dashboards will empower you to allocate budget, resources, and staff in the right areas to grow your center.<br/><br/>

                                Talk to one of our experts and will provide a complimentary audit of your current systems, data quality, and data management processes.</p>
                        </div>
                        <a href="https://calendly.com/tcdashboards/dashboards">  <button className="sign-btn-2 btn">Talk to a Data and Dashboard Expert</button></a>
                    </Col>
                </Row>
            </Container>
            <Style/>
        </section>
    )
}
export default decision