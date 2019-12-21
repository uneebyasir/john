import React from "react";
import Style from "./style"
import {Container, Row, Col} from 'react-bootstrap';
const v1Founders = () => {
    return (
        <Container>

            <Row>
                <div className="founders-heading">
                    <Col md={3}>
                        <p className="founders-small">Founders</p>
                    </Col>
                    <Col md={9}>
                        <h5>We are three tech fanatics with four decades
                            of experience dedicated to helping innovative
                            companies achieve game-changing results. Quite simply, we deliver. </h5>
                        <p className="founder-long-detail">
                            From fortune 500 companies to innovative startups, we’ve turned our success formula into the AlphaWay to ensure repeatable results.
                        </p>
                    </Col>
                </div>

            </Row>
            <Style/>
        </Container>
    )
}
export default v1Founders;