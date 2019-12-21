import React from 'react';
import {Container} from 'react-bootstrap';
import Style from "./style"
const hiddenCost =() => {
    return (
        <div>
            <div className="emptyFormDiv"/>
            <section>
                <Container>
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="outsourcedTeam">The Benefits of a Remote Team</h1>
                        </div>
                    </div>
                    <div className="row paddingRow">
                        <div className="col-md-3">
                            <div className="serviceSlider">
                                <div className="svg-background">
                                    <img src="/static/media/business.png"/>
                                </div>
                                <div className="serviceHead">Specialized Talent</div>
                                <div className="serviceText">Build your team of developers with advanced,
                                    specialized, or difficult to hire skillsets</div>
                            </div>
                        </div>
                        <div className="col-md-1" />
                        <div className="col-md-3">
                            <div className="serviceSlider">
                                <div className="svg-background">
                                    <img src="/static/media/effeciency.png"/>
                                </div>
                                <div className="serviceHead">
                                    Reduced Time to Market</div>
                                <div className="serviceText">
                                    Launch your project faster by onboarding a
                                    dedicated team without hiring and training delays
                                </div>
                            </div>
                        </div>
                            <div className="col-md-1" />
                            <div className="col-md-3">
                                <div className="serviceSlider">
                                    <div className="svg-background">
                                        <img src="/static/media/gdpr.png"/>
                                    </div>
                                    <div className="serviceHead">Lower Overhead</div>
                                    <div className="serviceText">Expand output without incurring the carrying
                                        cost of a local team.</div>
                                </div>
                            </div>
                        </div>
                        <div className="row paddingRow">
                            <div className="col-md-2" />
                            <div className="col-md-3">
                                <div className="serviceSlider">
                                    <div className="svg-background">
                                        <img src="/static/media/maintenance.png"/>
                                    </div>
                                    <div className="serviceHead">Flexibility</div>
                                    <div className="serviceText">
                                        Easily ramp up or down development resources or
                                        with the elasticity of an extended team
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2"/>
                            <div className="col-md-3">
                                <div className="serviceSlider">
                                    <div className="svg-background">
                                        <img src="/static/media/customer.png"/>
                                    </div>
                                    <div className="serviceHead">
                                        Stability
                                    </div>
                                    <div className="serviceText">
                                        Guard against turnover delays and costs with an
                                        extended that provides delivery guarantees
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2"/>
                        </div>
                </Container>
            </section>
            <Style/>
        </div>
    );
};

export default hiddenCost;