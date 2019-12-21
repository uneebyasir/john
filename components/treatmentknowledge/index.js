import React from "react";
import Style from "./style"
import {Container, Col} from "react-bootstrap"
const treatKnowledge = () => {
    return (
        <section className="treat-knowledge-section">
            <Container>
                <Col md={12} className="heading-col">
                    <h1>KNOWLEDGE IS <b>POWER</b></h1>
                    <p><span>Without clear KPIs, it is hard to make smart, timely business decisions.</span><br/>
                        Our dashboards make it easy to understand and track your most important KPIs, helping you reduce
                        operational costs, optimize marketing spend, improve UR & billing processes, identify compliance
                        risks, and deliver a higher quality of care.
                    </p>
                </Col>
                <Col md={12} className="cards-col">
                    <div className="cards-div">
                        <Col md={3}>
                            <div className="knowledge-card">
                                <div className="img-div">
                                    <img src="/static/media/patients.png"/>
                                </div>
                                <p>
                                    Who are most valuable patients?
                                </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="knowledge-card">
                                <div className="img-div">
                                    <img src="/static/media/revenue.png"/>
                                </div>
                                <p>
                                    Where are we missing billing revenue?
                                </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="knowledge-card">
                                <div className="img-div">
                                    <img src="/static/media/authorization.png"/>
                                </div>
                                <p>
                                    How can we improve our UR authorizations?
                                </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="knowledge-card">
                                <div className="img-div">
                                    <img src="/static/media/flow.png"/>
                                </div>
                                <p>
                                    What are the impacts of patient flow trends?
                                </p>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="knowledge-card">
                                <div className="img-div">
                                    <img src="/static/media/marketing.png"/>
                                </div>
                                <p>
                                    How effective is our marketing spend?
                                </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="knowledge-card">
                                <div className="img-div">
                                    <img src="/static/media/doc.png"/>
                                </div>
                                <p>
                                    Where are there gaps in my clinical care documentation?
                                </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="knowledge-card">
                                <div className="img-div">
                                    <img src="/static/media/forecast.png"/>
                                </div>
                                <p>
                                    How do operations, clinical, admissions, and billing trends impact my revenue
                                    forecast?
                                </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="knowledge-card">
                                <div className="img-div">
                                    <img src="/static/media/outcome.png"/>
                                </div>
                                <p>
                                    How can I minimize undesirable outcomes?
                                </p>
                            </div>
                        </Col>

                    </div>
                </Col>
            </Container>

            <Style/>
        </section>
    )
}
export default treatKnowledge