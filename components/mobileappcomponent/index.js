import React from "react";
import Form from "../form";
import MobileContent from "../mobileappcontent";
// import TransSection from "../teamtranparency";
import AplhaNumber from "../alphanumbers"
import Leading from '../leading';

const mobileMain = () => {
    return (
        <div>
            <Leading
                leadText= "Mobile App Development"
                title="Your Next Killer App"
                content="We build innovative mobile solutions your users will love"
                image="/static/media\MOBILE-APP-DEVELOPMENT.jpg"
                show={false}
            />
            <MobileContent/>
            {/*<TransSection/>*/}
            <AplhaNumber/>
            <Form/>
        </div>
    )
}
export default mobileMain