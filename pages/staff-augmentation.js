import React, { Component } from "react";
import RowCard from '../components/rowcard';
import Hidden from '../components/hiddenCost';
import Dedicated from "../components/dedicated";
import Leading from '../components/leading';
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
                        leadText= "Team Augmentation"
                        title="We have your back"
                        content="Expand your team with top-performing, experienced developers"
                        image="/static/media/staff-augmentation.svg"
                        show={false}
                    />

                    <RowCard
                        title="AlphaSquad’s Zero-Headache Team Augmentation"
                        content="<p> Cut your overhead and time to market with trusted and talented developers. With AlphaSquad’s zero-headache team augmentation, grow your bottom line, not your payroll. </p> <p> AlphaSquad makes it easy to on-board the perfect developers and scales your team while retaining complete control over your project roadmap, brand, milestones, and deliverables. Quickly ramp up and down resources, add rare or specialized talent, reduce development costs, and cut time to market. Moreover, with our security controls, we ensure your source code and IP are protected. </p>"
                    />
                    <Hidden/>
                    <Dedicated/>
                    <GoAlpha/>
                    <AplhaNumber/>
                    <Form/>
                </div>
            </Layout>
        )
    }
}

export default InnoVation;