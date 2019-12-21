import React from 'react';
import {Container} from 'react-bootstrap';
import Style from "./style"
const Benifits =() => {
    return (
        <div>
            <div className="emptyFormDiv"/>
            <section>
                <Container>
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="outsourcedTeam">The Hidden Cost of Legacy Applications</h1>
                        </div>
                    </div>
                    <div className="row paddingRow">
                        <div className="col-md-3">
                            <div className="serviceSlider">
                                <div className="svg-background">
                                    <img src="/static/media/business.png"/>
                                </div>
                                <div className="serviceHead">Business Competitiveness and Profitability</div>
                                <div className="serviceText">Technology innovation and disruption drive business performance, even in outdated industries.</div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <div className="serviceSlider">
                                <div className="svg-background">
                                    <img src="/static/media/effeciency.png"/>
                                </div>
                                <div className="serviceHead">
                                    Organizational Agility and <br/>Efficiency</div>
                                <div className="serviceText">
                                    Automation can increase processes efficiency by up to 50%</div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <div className="serviceSlider">
                                <div className="svg-background">
                                    <img src="/static/media/gdpr.png"/>
                                </div>
                                <div className="serviceHead">Security and Compliance</div>
                                <div className="serviceText">Compliance penalties and security breaches are a huge business risk</div>
                            </div>
                        </div>
                    </div>
                    <div className="row paddingRow">
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                            <div className="serviceSlider">
                                <div className="svg-background">
                                    <img src="/static/media/maintenance.png"/>
                                </div>
                                <div className="serviceHead">Maintenance and Support</div>
                                <div className="serviceText">
                                    Maintenance costs can exceed development costs in as little as 5 years.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                            <div className="serviceSlider">
                                <div className="svg-background">
                                    <img src="/static/media/customer.png"/>
                                </div>
                                <div className="serviceHead">
                                    Customer Dissatisfaction
                                </div>
                                <div className="serviceText">
                                    A dated, clumsy, or slow interface will draw customer ire and disloyalty
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </Container>
            </section>
            <Style/>
        </div>
    );
};

export  default Benifits;