import React from "react";
import Head from "next/head";
import Favicon from 'react-favicon';
import Header from '../header'
import Footer from '../footer'
import '../../style.css';
export default (props) => (
    <div>
        <Head>
            <title>Alpha Squad | Home</title>
            <meta name="description" content=""/>
            <meta name="keywords" content="alpha, squad, "/>
            <meta name="robots" content="index, follow"/>
            <meta name="author" content=""/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <Favicon url="/static/favicon.ico"/>
        <Header type={props.type}/>
        {props.children}
        <Footer/>
    </div>
)