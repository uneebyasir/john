import React, { Component } from "react";
import Layout from "../components/layout";
import MainServ from "../components/mainServices";
import Head from "next/head";
import GoAlpha from "../components/goalpha";

class OurServices extends Component{
    render(){
        return(
            <Layout>
                <Head>
                    <title>Alpha Squad | What We Do</title>
                </Head>
                <MainServ/>
                <GoAlpha/>
            </Layout>
        )
    }
}

export default OurServices;