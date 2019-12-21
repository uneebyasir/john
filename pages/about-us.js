import React from "react";
import Layout from "../components/layout";
import V2main from "../components/aboutv2main";
import Head from "next/head";
function aboutv2() {
    return(
        <Layout>
            <Head>
                <title>Alpha Squad | About Us</title>
            </Head>
            <V2main/>
        </Layout>
    )
}
export default aboutv2;