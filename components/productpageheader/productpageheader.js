import React from 'react';
import Style from "./style";
import {Container, Col} from 'react-bootstrap';

const PostCards = (props) => {
    let {category, title, client, year, role, headerImageUrl, websiteUrl} = props;
    return (
        <Container className="product-header" fluid={true}>
            <Container>
                <div className="custom-row catogory">
                    <hr/>
                    <p>{category}</p>
                </div>
                <h1 className="title">{title}</h1>
                <div className="custom-row">
                    <Col md={8} className="custom-row client-info">
                        <div className="inner-info">
                            <p>CLIENT</p>
                            <p>{client}</p>
                        </div>
                        <div className="inner-info inner-info2">
                            <p>Year</p>
                            <p>{year}</p>
                        </div>
                        <div className="inner-info inner-info2">
                            <p>Role</p>
                            <p>{role}</p>
                        </div>
                    </Col>
                    <Col md={4} className="custom-row website-link">
                        <a className="d-flex" href={websiteUrl}>
                            <p>See Website</p>
                            <span>
                            <svg width="9px" height="14px" viewBox="0 0 9 14" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                {/*<!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->*/}
                                <title>arrow-right</title>
                                <desc>Created with Sketch.</desc>
                                <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="circle-btn-right-black" transform="translate(-24.000000, -21.000000)"
                                       fill="#FFFFFF">
                                        <polygon id="arrow-right"
                                                 points="25.912 34.364 24.497 32.95 29.447 28 24.497 23.05 25.912 21.636 32.275 28"/>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        </a>
                    </Col>
                </div>
            </Container>
            <Container fluid={true} className="header-image-background-container">
                <div className="header-image-background" style={{backgroundImage: `url(${headerImageUrl})`}}>
                    {/*<h3>Third slide label</h3>*/}
                    {/*<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                    {/*<button>*/}
                            {/*View*/}
                    {/*</button>*/}
                </div>
            </Container>
            <Style/>
        </Container>
    );
};

export default PostCards;