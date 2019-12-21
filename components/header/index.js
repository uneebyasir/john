import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Style from './style';
import {withRouter} from "next/router";
import {useSpring, animated} from 'react-spring';

const Header = (props) => {
    const [transform, setTransform] = useState(null);
    const [toggle, SetToggle] = useState(false)
    const handleScroll = (event) => {
        let scrollTop = document.getElementById("body").getBoundingClientRect().top,
            itemTranslate = 20 + scrollTop;
        setTransform(itemTranslate)
    }
    const MenuOpen = useSpring({
        delay: toggle ? 300 : 0,
        height: toggle ? "100vh" : "0vh",
        transform: toggle ? "translate3d(0,50px,0)" : "translate3d(0,0,0)",
        fontSize: toggle ? "30px" : "0px",
        padding: toggle ? "15px" : "0px",
    });
    const redOpen = useSpring({
        height: toggle ? "100vh" : "0vh",
    });
    useEffect(() => {
        window.addEventListener('scroll', handleScroll.bind(this));

    });
    const checkActive = (type) => {
        let {router} = props;
        return router.asPath.indexOf(type) !== -1 ? "active" : "";
    }


    return (
        <nav className={"navbar " + (transform < 0 ? "active-menu" : "" )}>
            <Container className="navContainer">
                <Row>
                    <Col md={6}>
                        <div className="disp-rw">
                            <div className="navbar-header">
                                <a href="/" className="logo">
                                    <img src="/static/media/alpha_squad_logo.svg" className="logo"/>
                                </a>
                            </div>
                            <div className="toggleButton">
                                <div className="toggle-pos">
                                    <img onClick={() => SetToggle(!toggle)} src="/static/media/main buttion.svg"
                                         className="img-togg"/>
                                </div>

                                <div className="toggle-dropDown">
                                    <animated.div className="red-bg-tog" style={redOpen}>
                                        <animated.ul className="togle-list" style={MenuOpen}>
                                            <li><a className={() => checkActive("what")} href="/what-we-do">WHAT WE
                                                DO</a>
                                            </li>
                                            <li><a className={() => checkActive("case")} href="/case-studies">CASE
                                                STUDIES</a></li>
                                            <li><a className={() => checkActive("about")} href="/about-us">ABOUT</a>
                                            </li>
                                            <li><a className={() => checkActive("treatment")}
                                                   href="/treatment-center-dashboards">HEALTHCARE</a></li>

                                            <li><a className={() => checkActive("contact")}
                                                   href="/contact-us">CONTACT</a>
                                            </li>
                                        </animated.ul>
                                    </animated.div>
                                </div>


                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="none">
                        <div className="navbar-list d-flex justify-content-end">
                            <ul className="navbar-nav">
                                <li><a className={() => checkActive("what")} href="/what-we-do">WHAT WE DO</a></li>
                                <li><a className={() => checkActive("case")} href="/case-studies">CASE STUDIES</a></li>
                                <li><a className={() => checkActive("about")} href="/about-us">ABOUT</a></li>
                                <li><a className={() => checkActive("treatment")} href="/treatment-center-dashboards">HEALTHCARE</a>
                                </li>
                                <li><a className={() => checkActive("contact")} href="/contact-us">CONTACT</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Style/>
        </nav>
    )
}

export  default withRouter(Header);