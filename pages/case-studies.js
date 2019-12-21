import React from "react";
import Layout from "../components/layout"
import PortfolioMain from "../components/portfoliopagecomponent"
import data from '../jsons/portfolio.json';
import Head from "next/head";
const Portfolio =({data}) => {
    return (
        <Layout>
            <Head>
                <title>Alpha Squad | Case Studies</title>
            </Head>
            <PortfolioMain data={data}/>
        </Layout>
    );
};
Portfolio.getInitialProps = () => {
    return {data: data};
};
export default Portfolio;