import React from 'react';
import Style from "./style"
import {Container,Col,Row} from "react-bootstrap";
const Industry =() => {
    return (
        <div id="overheadPage">
            <section className="industrySection">
                <div className="container">
                    <div className="industryLeaders industryPadding">
                        <p>Trusted by Industry Leaders</p>
                    </div>
                </div>
                <Container className="main-toyota-cont">
                    <Row>
                        <Col md={1}/>
                        <Col md={2}><div className="cont-img"><img src="/static/media/toyota-01.png" className="toyota-logo"/></div> </Col>
                        <Col md={2}><div className="cont-img"><img src="/static/media/Spottrender-01.png" className="toyota-logo"/></div>  </Col>
                        <Col md={2}><div className="cont-img"><img src="/static/media/Upland-01.png" className="toyota-logo"/></div>  </Col>
                        <Col md={2}><div className="cont-img"><img src="/static/media/Kribbz-01.png" className="toyota-logo"/></div>  </Col>
                        <Col md={2}><div className="cont-img"><img src="/static/media/GS1-01.png" className="toyota-logo"/></div>  </Col>
                        <Col md={1}/>
                    </Row>
                </Container>
            </section>
            <Style/>
        </div>
    );
};

export  default Industry;