import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Style from './style';

const mainService = () => {
    return (
        <section className="main-service-section">
            <div className="headings">
                <p>OUR SERVICES</p>
                <h2>Full-Cycle Software</h2>
                <h2>Development Services</h2>
            </div>
            <div className="main-Container-fluid">
                <Container fluid={true}>

                        <Row className="margin-rw">
                            <Col md={12} sm={12} lg={5}>
                                <div className="image-cont">
                                    <a href="/portfolio-detail/analysis-optimization-of-toyota-usa">
                                        <img src="/static/media/service1.png" className="imageContent" />
                                    </a>
                                </div>
                            </Col>
                            <Col md={12} sm={12} lg={7}>
                                <div className="softwareHeading">
                                    <h2>Web App Development</h2>
                                    <p>We build enterprise-grade web solutions that transform businesses</p>
                                    <div className="logo-container d-inline-flex flex-wrap">
                                        <img src="/static/media/svelte.jpg" alt=""/>
                                        <img src="/static/media/amplify.jpg" alt=""/>
                                        <img src="/static/media/angular.jpg" alt=""/>
                                        <img src="/static/media/dynamodb.jpg" alt=""/>
                                        <img src="/static/media/express.jpg" alt=""/>
                                        <img src="/static/media/firebase.jpg" alt=""/>
                                        <img src="/static/media/gatsby.jpg" alt=""/>
                                        <img src="/static/media/lamda.jpg" alt=""/>
                                        <img src="/static/media/loopback.jpg" alt=""/>
                                        <img src="/static/media/mongodb.jpg" alt=""/>
                                        <img src="/static/media/mssql.jpg" alt=""/>
                                        <img src="/static/media/mysql.jpg" alt=""/>
                                        <img src="/static/media/netlify.jpg" alt=""/>
                                        <img src="/static/media/nextjs.jpg" alt=""/>
                                        <img src="/static/media/nodejs.jpg" alt=""/>
                                        <img src="/static/media/razzle.jpg" alt=""/>
                                        <img src="/static/media/reactjs.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="reference-part">
                                    <div className="postAvatar" style={{backgroundImage: "url('/static/media/dumy.png')"}}/>
                                    <div className="reference-text">
                                        <p>
                                            <i>
                                                "AlphaSquad was able to exceed our expectations on timeframe and quality of work. All the work for our site was completed in record time."
                                            </i>
                                        </p>
                                        <div className="Reference-name">
                                            <div className="headerLine"/>
                                            <span className="name-span">Alexander</span>
                                        </div>
                                        <div className="twitter-logo">
                                            <img src="/static/media/toyota-logo-small.png" alt=""/>
                                            {/*<i className="fa faStyle fa-twitter"/>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex pl-4 button-wrapper">
                                    <a href="/web-app-development">
                                        <button className="headerBtn">Learn More</button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                        <div className="padding-cont">
                        <Row className="margin-rw">
                            <Col  md={12} sm={12} lg={8}>
                                <div className="softwareHeading">
                                    <h2>
                                        Mobile App Development
                                    </h2>
                                    <p>We build innovative mobile solutions your users will love</p>
                                    <div className="logo-container d-inline-flex flex-wrap">
                                        <img src="/static/media/dynamodb.jpg" alt=""/>
                                        <img src="/static/media/express.jpg" alt=""/>
                                        <img src="/static/media/firebase.jpg" alt=""/>
                                        <img src="/static/media/lamda.jpg" alt=""/>
                                        <img src="/static/media/loopback.jpg" alt=""/>
                                        <img src="/static/media/mongodb.jpg" alt=""/>
                                        <img src="/static/media/mssql.jpg" alt=""/>
                                        <img src="/static/media/mysql.jpg" alt=""/>
                                        <img src="/static/media/nodejs.jpg" alt=""/>
                                        <img src="/static/media/reactjs.jpg" alt=""/>
                                        <img src="/static/media/sqlite.png" alt=""/>
                                    </div>
                                </div>
                                <div className="reference-part">
                                    <div className="postAvatar" style={{backgroundImage: "url('/static/media/Robert Kanaat.jpeg')"}}/>
                                    <div className="reference-text">
                                        <p>
                                            <i>
                                                "AlphaSquad is by far one of the best UI/UX design teams that I've ever come across. They worked tirelessly with us over the course of over 3 months to implement a stunning new user interface for our platform and I'm grateful to have found him. We will definitely be working together again. Thank you so much, AlphaSquad."
                                            </i>
                                        </p>
                                        <div className="Reference-name">
                                            <div className="headerLine"/>
                                            <span className="name-span">Robert Kanaat</span>
                                        </div>
                                        <div className="twitter-logo">
                                            <img src="/static/media/kribbz-logo.png" alt=""/>
                                            {/*<i className="fa faStyle fa-twitter"/>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex pl-4 button-wrapper">
                                    <a href="/mobile-app-development">
                                        <button className="headerBtn">Learn More</button>
                                    </a>
                                </div>
                            </Col>
                            <Col md={12} sm={12} lg={4}>
                                <div className="image-cont">
                                    <a href="/portfolio-detail/redesign-of-kribbz-platform">
                                        <img src="/static/media/service2.png" className="imageContent1" />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                        </div>
                        <Row className="margin-rw">
                            <Col md={12} sm={12} lg={5}>
                                <div className="image-cont">
                                    <a href="/portfolio-detail/iot-based-platform-for-the-information-network">
                                        <img src="/static/media/service3.png" className="imageContent" />
                                    </a>
                                </div>
                            </Col>
                            <Col md={12} sm={12} lg={7}>
                                <div className="softwareHeading">
                                    <h2>
                                        Team Augmentation
                                    </h2>
                                    <p>Expand your team with top-performing, experienced developers</p>
                                    <div className="logo-container d-inline-flex flex-wrap">
                                        <img src="/static/media/dynamodb.jpg" alt=""/>
                                        <img src="/static/media/express.jpg" alt=""/>
                                        <img src="/static/media/firebase.jpg" alt=""/>
                                        <img src="/static/media/lamda.jpg" alt=""/>
                                        <img src="/static/media/loopback.jpg" alt=""/>
                                        <img src="/static/media/mongodb.jpg" alt=""/>
                                        <img src="/static/media/mssql.jpg" alt=""/>
                                        <img src="/static/media/mysql.jpg" alt=""/>
                                        <img src="/static/media/netlify.jpg" alt=""/>
                                        <img src="/static/media/nextjs.jpg" alt=""/>
                                        <img src="/static/media/razzle.jpg" alt=""/>
                                        <img src="/static/media/nodejs.jpg" alt=""/>
                                        <img src="/static/media/react-native.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="reference-part">
                                    <div className="postAvatar" style={{backgroundImage: "url('/static/media/Gene Foo.png')"}}/>
                                    <div className="reference-text">
                                        <p><i>
                                            "I would highly recommend AlphaSquad to any organization looking for a well rounded and articulate team leaders."
                                        </i></p>
                                        <div className="Reference-name">
                                            <div className="headerLine"/>
                                            <span className="name-span">Gene Foo</span>
                                        </div>
                                        <div className="twitter-logo">
                                            <img src="/static/media/tin-logo.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex pl-4 button-wrapper">
                                    <a href="/staff-augmentation">
                                        <button className="headerBtn">Learn More</button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                        <div className="padding-cont1">
                        <Row className="margin-rw">
                            <Col md={12} sm={12} lg={8}>
                                <div className="softwareHeading">
                                    <h2>
                                        Technology Modernization
                                    </h2>
                                    <p>We help organizations future-proof legacy software</p>
                                    <div className="logo-container d-inline-flex flex-wrap">
                                        <img src="/static/media/svelte.jpg" alt=""/>
                                        <img src="/static/media/amplify.jpg" alt=""/>
                                        <img src="/static/media/angular.jpg" alt=""/>
                                        <img src="/static/media/dynamodb.jpg" alt=""/>
                                        <img src="/static/media/express.jpg" alt=""/>
                                        <img src="/static/media/firebase.jpg" alt=""/>
                                        <img src="/static/media/gatsby.jpg" alt=""/>
                                        <img src="/static/media/lamda.jpg" alt=""/>
                                        <img src="/static/media/loopback.jpg" alt=""/>
                                        <img src="/static/media/mongodb.jpg" alt=""/>
                                        <img src="/static/media/mssql.jpg" alt=""/>
                                        <img src="/static/media/mysql.jpg" alt=""/>
                                        <img src="/static/media/netlify.jpg" alt=""/>
                                        <img src="/static/media/nextjs.jpg" alt=""/>
                                        <img src="/static/media/nodejs.jpg" alt=""/>
                                        <img src="/static/media/razzle.jpg" alt=""/>
                                        <img src="/static/media/reactjs.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="reference-part">
                                    <div className="postAvatar" style={{backgroundImage: "url('/static/media/p-olson.jpeg')"}}/>
                                    <div className="reference-text">
                                        <p><i>
                                            "AlphaSquad are true A-players who only want to see things succeed. They are totally committed to going the extra mile to get things done and take complete responsibility and ownership. Communication has always been smooth and we'll hire them again, no doubt."
                                        </i></p>
                                        <div className="Reference-name">
                                            <div className="headerLine"/>
                                            <span className="name-span">Patrick Olson</span>
                                        </div>
                                        <div className="twitter-logo">
                                            <img src="/static/media/teamble-logo.png" alt=""/>
                                        </div>

                                    </div>
                                </div>
                                <div className="d-flex pl-4 button-wrapper">
                                    <a href="/technology-modernisation">
                                        <button className="headerBtn">Learn More</button>
                                    </a>
                                </div>
                            </Col>
                            <Col md={12} sm={12} lg={4}>
                                <div className="image-cont">
                                    <img src="/static/media/service4.png" className="imageContent" />
                                </div>
                            </Col>
                        </Row>
                        </div>

                </Container>
            </div>
            <Style/>
        </section>
    );
};

export default mainService;

