import React, {useState, useEffect} from "react";
import {Container, Col} from 'react-bootstrap';
import Style from "./style"

const PortfolioCards = (props) => {
    let { data } = props;
    return (
        <Container className="portfolio-container">
            <Col md={12} className="portfolio-first-col">
                <h1>Case Studies</h1>
            </Col>
            <Col md={12}>
                <div className="portfolio-card-main">
                    {data&&data.length!==0&&data.map((single, index)=>
                        <Col sm={12} md={6} lg={6} key={index}>
                            {/*headerImageUrl*/}
                            <div className="portfoliocard" style={{backgroundImage: `url(${single.featuredImage})`}}>
                                <a href={`/portfolio-detail/${single.slug}`}>
                                    <div  className="overlayPortfolio">
                                        <div className="Portfolio-detail hoverCard">
                                            <div className="position-caseSt">
                                                <h2> {single.title} </h2>
                                                <h5>{single.category}</h5>
                                                <img src="/static/media/button.png" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Col>
                    )
                    }
                </div>
            </Col>
            <Style/>
        </Container>
    )
}
export default PortfolioCards