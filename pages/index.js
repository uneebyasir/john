import React, { Component } from "react";
import Layout from "../components/layout";
import Leading from '../components/leading';
import Industry from "../components/industry";
import Services from "../components/services";
// import GoAlpha from "../components/goalpha";
import DiagSlider from"../components/diagslider";
import Form from "../components/form";
import Testimonial from "../components/testimonial";
import Head from "next/head";
class index extends Component{
    render(){
        return(
            <Layout>
                <Head>
                    <title>Alpha Squad | Home</title>
                </Head>
                <Leading
                    leadText= {null}
                    title="YOUR DEVELOPMENT A-TEAM"
                    content="<p>Top 0.1% of Talent. <br/>White Glove, Start to Finish.  <br/>Results, No Matter What.</p>"
                    image="/static/media\Alpha_Squad_Header.svg"
                    show={true}
                />
                <Industry/>
                <Services/>
                <DiagSlider />
                {/*<GoAlpha/>*/}
                <Testimonial/>
                <Form/>
            </Layout>
        )
    }
}

export default index;