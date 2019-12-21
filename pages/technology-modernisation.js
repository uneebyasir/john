import React, { Component } from "react";
import Leading from '../components/leading';
import RowCard from '../components/rowcard';
import Benifits from '../components/benifits';
import Layout from "../components/layout";
import GoAlpha from "../components/goalpha";
import AplhaNumber from "../components/alphanumbers";
import Form from "../components/form";

class InnoVation extends Component{
    render(){
        return(
            <Layout>
                <div id="innovationPage">
                    <Leading
                        leadText= "Technology Modernization"
                        title="Don't stand still."
                        content="We help organizations future-proof legacy software"
                        image="/static/media/TECNOLOGY-MODRIZATION.png"
                        show={false}
                    />
                    <RowCard
                        animation={"table"}
                        title="AlphaSquad’s Zero-Headache Team Augmentation"
                        content="<p> Trust AlphaSquad to keep your technology ahead of the competition, while you focus on your business. </p> <p> Outdated technology is expensive, restricting your company's productivity, security, agility, business performance, and your bottom line! AlphaSquad takes a business-centric approach to upgrading your applications, leveraging cutting edge technology and process automation to ensure your business is more agile, efficient, and delivers superior customer experience. </p>"
                    />
                    <Benifits/>
                    <GoAlpha/>
                    <AplhaNumber/>
                    <Form/>
                </div>
            </Layout>
        )
    }
}

export default InnoVation;