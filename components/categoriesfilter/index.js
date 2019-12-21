import React from 'react';
import Style from "./style";
import {Container, Row, Col} from 'react-bootstrap';
const CategoriesFilter = () => {
    return (
        <Container className="categories-filter">
            <Row>
                <Col md={8}>
                    <h1>
                        Our Thoughts
                    </h1>
                </Col>
                <Col md={4}/>
            </Row>
            <Row>
                <Col md={8} className="categories-row">
                    <label>Categories: </label>
                    <ul>
                        <li className="active">All</li>
                        <li>Tech</li>
                        <li>Design</li>
                        <li>Startups</li>
                        <li>Business</li>
                    </ul>
                </Col>
                <Col md={4}/>
            </Row>
            <Style/>
        </Container>
    );
};

export default CategoriesFilter;