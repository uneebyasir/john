import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import TreatMain from "../components/treatmentmain"

const treatmentCenter = () => {
    return (
        <Layout>
            <Head>
                <title>Alpha Squad | Treatment Center</title>
            </Head>
            <TreatMain/>
        </Layout>
    )
}
export default treatmentCenter;