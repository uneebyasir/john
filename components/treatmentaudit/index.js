import React from "react";
import Style from "./style";
import {Col,Container,Row} from "react-bootstrap"
const audit = () =>{
    return(
        <section className="audit-section">
            <Col md={12} className="heading-col">
                <h1>COMPLIMENTARY DATA <b>AUDIT</b></h1>
            </Col>
            <Col md={12} className="d-f p-0">
                <Col md={6} className="audit-img">

                </Col>
                <Col md={6} className="audit-list-col">
                    <div className="audit-list-side">
                        <p>Our complimentary audit will review the following data sources and evaluate system configuration, data accuracy and completeness, procedural inconsistencies, compliance issues, and billing oversights. We’ll provide a report of findings with recommendations.</p>
                        <div className="d-flex">
                            <ul>
                                <li>EMR SYSTEM</li>
                                <li>Individual Sessions</li>
                                <li>Treatment Plan</li>
                                <li>Other Clinical Documentation</li>
                                <li>Operations</li>
                                <li>Discharge Planning</li>
                                <li>Alumni Management</li>
                                <li>Medication Management</li>
                            </ul>
                            <ul>
                                <li>BILLING SYSTEM</li>
                                <li>Billing</li>
                                <li>UR</li>
                            </ul>
                        </div>
                        <a href="https://calendly.com/tcdashboards/dashboards"><button className="btn audit-btn">Schedule Complimentary Data Audit</button></a>
                    </div>
                </Col>
            </Col>
            <Style/>
        </section>
    )
}
export default audit;