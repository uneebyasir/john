import React from "react";
import Style from "./style"
import {Container, Row, Col} from 'react-bootstrap';
const disciplinecards = () =>{
    return(
        <Container fluid={true} >
            <div className="dis-main-heading">
                    <span>
                        OUR TEAM
                    </span>
                <p>
                    A multi-disciplinary team of creators.
                </p>
            </div>
            <Row className="discplin-main-conainer">
                <Col md={3}>
                    <div className="discplin-card">
                  <div className="discplin-card-img">
                  </div>
                    <p className="discpln-name">John Doe</p>
                        <span className="discpln-post">Senior Designer</span>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="discplin-card">
                        <div className="discplin-card-img">
                        </div>
                        <p className="discpln-name">John Doe</p>
                        <span className="discpln-post">Senior Designer</span>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="discplin-card">
                        <div className="discplin-card-img">
                        </div>
                        <p className="discpln-name">John Doe</p>
                        <span className="discpln-post">Senior Designer</span>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="discplin-card">
                        <div className="discplin-card-img">
                        </div>
                        <p className="discpln-name">John Doe</p>
                        <span className="discpln-post">Senior Designer</span>
                    </div>
                </Col>
            </Row>
            <Style/>
        </Container>
    )
}
export default disciplinecards;