import React from "react";
import  Style from "./style";
import {Container,Col,Row} from "react-bootstrap"

const mobileAppHeader = () => {
    return (
        <div className="mobile-header-background">
            <Container>
                <div>
                    <p>YOUR NEXT APP</p>
                    <h1>We build innovative mobile solutions your users will love</h1>
                </div>
            </Container>
            <Style/>
        </div>
    )
}
export default mobileAppHeader;