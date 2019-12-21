import React from "react";
import V2detail from "../v2firstdetail";
import Founders from "../v1founders";
import V2cards from "../v2foundercards";
import Style from "./style";
const aboutv2main = () => {
    return (
        <div>
            <section className="main-service-section">
                <div className="headings">
                    <p>ABOUT US</p>
                    <h2>We believe digital innovation is
                    </h2>
                    <h2>at the heart of every business success</h2>
                </div>
            </section>
            <V2detail/>
            <Founders/>
            <V2cards/>
            <Style/>
        </div>
    )
}
export default aboutv2main;