import React from "react";
import Style from "./style";
import {Container, Col} from "react-bootstrap"

const webAppcontent = () => {
    return (
        <section className="web-app-content">
            <Container>
                <Col md={12}>
                    <div>
                        <h1>Web App Development</h1>
                        <p>Our team of senior developers, architects, and designers build web apps that are robust, scalable, secure, and lightning-fast on the backend, while beautifully and intuitively crafted on the frontend.
                            <br/><br/>
                            Today’s users expect an innovative, polished, and lightning quick online experiences that require a top-notched team and “alpha” mentality to build.  We partner selectively with innovative clients looking to outpace the competition with next-generation apps and powerful web applications.
                        </p>
                    </div>
                </Col>
            </Container>
            <Style/>
        </section>
    )
}
export default webAppcontent