import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Style from "./style"
const v2mainheader = () => {
    return (
        <div className="v2-img-header">
            <Container  className="v2-img-container">
                <Col md={8} >
                    <h1>
                        We believe digital<br/> innovation is at the heart of every business success
                    </h1>
                </Col>
                <Style/>
            </Container>
        </div>
    )
}

export default v2mainheader;