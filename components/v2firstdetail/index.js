import React from "react"
import {Container, Row, Col} from 'react-bootstrap';
import Style from "./style"

const v2detail = () =>{
    return(
        <div>
            <Container>
            <Col md = {12}>
                <div className="v2-first-detail">
                     <span>
                         The story
                     </span>
                    <h5>Talent wins games, teamwork wins championships</h5>
                    <p>As the name suggests, we are a tight-knit team of overachievers bound together by a common purpose, to push the envelope of design and technology and help companies achieve lasting success.</p>
                </div>

            </Col>
        </Container>
            <Container fluid={true} className="custom-giving-container">
                <div className="custom-giving-col">
                    <Row className="giving-row">
                        <Col md={4} sm={12}>
                            <div className="flower-div">
                                <img src="/static/media/party_photo.jpg" alt=""/>
                            </div>
                        </Col>
                        <Col md={{span: 6, offset: 1}} sm={12}>
                            <p>
                                We bring our A-team to every engagement, starting with the Alpha Way, our step-by-step formula for reducing project risk, empowering teams, and delivering measurable business results. Together, we define the innovation you need to win today — and the vision you need to win tomorrow.
                                <br/><br/>
                                Headquartered in San Diego with hi-tech development centers in Dubai and Islamabad, AlphaSquad is ideally positioned to provide top-notch software services to clients around the globe.
                            </p>
                        </Col>

                    </Row>
                </div>
            </Container>
            <Container fluid={true} className="custom-giving-container">
                <div className="custom-giving-col">

                    <Row className="giving-row">
                        <Col md={6} sm={12}>
                            {/*<img src="/static/media/like.png" />*/}
                            <h1>Giving Back</h1>
                            <p>As global citizens to the communities we work in, we are dedicated to giving back. Since 2013 we have made quarterly contributions to children hospitals and clinics, supported local entrepreneurial programs, and have started our own Women’s Empowerment Foundation in Islamabad, Pakistan.  </p>
                        </Col>
                        <Col md={{span: 4, offset: 1}} sm={12}>
                            <div className="flower-div">
                                <img src="/static/media/NUT_Uni.jpg" alt=""/>
                            </div>
                        </Col>

                    </Row>
                </div>
            </Container>
            <Style/>
        </div>
    )
}

export default v2detail