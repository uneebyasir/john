import React from "react";
import Webappcontent from "../webappcontent";
// import Transcard from "../teamtranparency";
import Alphanumber from "../alphanumbers";
import Form from "../form";
import Leading from '../leading';
import GoAlpha from "../goalpha";
import Key from "../keyssection";

const webAppCom = () =>{
    return(
        <div>
            <Leading
                leadText= "Web App Development"
                title="Bring your vision to life"
                content="We build enterprise-grade web solutions that transform businesses"
                image="/static/media/APP-DEVELOPMENT.jpg"
                show={false}
            />
            <Webappcontent/>
            {/*<Transcard/>*/}
            <Alphanumber/>
            <GoAlpha/>
            <Key/>
            <Form/>
        </div>
    )
}
export default webAppCom