import React, {useState, useEffect} from "react";
import Style from "./style";
import {Container, Col} from "react-bootstrap";
import {useSpring, animated, useTransition} from 'react-spring';
const treatmentfirst = () => {
    const [transform, setTransform] = useState(null);
    const handleScroll = (event) => {
        let scrollTop = document.getElementById("body").getBoundingClientRect().top,
            itemTranslate = 20 + scrollTop;
        setTransform(itemTranslate)
    }


    const ImgOne = useSpring({
        transform: transform < 0 ? "translateY(20%)" : "translateY(0%)",
        duration: 2000

    });

    const ImgTwo = useSpring({
        transform: transform < 0 ? "translateX(20%)" : "translateX(0%)",
        duration: 2000

    });

    const ImgThree = useSpring({
        transform: transform < 0 ? "translateX(-20%)" : "translateX(0%)",
        duration: 2000

    });

    useEffect(() => {
        window.addEventListener('scroll', handleScroll.bind(this));

    });

    return (
        <section className="treatment-first-section">
            <Container fluid={true}>
                <Col md={12} className="main-col">
                    <Col md={6} className="content-div-col">
                        <div className="content-div">
                            <h1>
                                Treatment Center Dashboards
                            </h1>
                            <p>
                                <span>YOUR TREATMENT CENTER RUNS ON DATA</span><br/>

                                We turn your disconnected data into crystal-clear, interactive dashboards that empower
                                you to make the right business decisions.


                            </p>
                            <div className="first-section-sign">
                                <a href="https://calendly.com/tcdashboards/dashboards"><button className="btn sign-btn">Talk to an Expert  ></button></a>
                                <a className="goto-link" href="https://calendly.com/tcdashboards/dashboards"> <p>Complimentary Data Audit</p><img src="/static/media/goto-icon.png"/></a>
                            </div>
                        </div>

                    </Col>
                    <Col md={6}>
                        <div className="anim-main-div">

                            <animated.img src="/static/media/dashboard_t.png" style={ ImgOne }
                                          className="anim-image-1 " config={{duration: 5000}}/>

                            <animated.img src="/static/media/hand-anim.png" className="anim-image-3" style={ ImgTwo}/>
                            <animated.img src="/static/media/girl-anim.png" className="anim-image-2"
                                          style={  ImgThree }/>
                        </div>
                    </Col>
                </Col>

            </Container>

            <Style/>
        </section>
    )
}
export default treatmentfirst