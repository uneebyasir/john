import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props} />)
        );
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags }
    }

    render() {
        return (
            <html>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="AlphaSquad is your team to build awesome web applications" />
                <meta name="keywords" content="Development, Mobile Development, UX/UI, California, San Diego, NodeJS, javascript, web design, web dev" />
                <meta name="author" content="AlphaSquad" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                <link rel="stylesheet" type="text/css" href="/static/css/base.css"/>
                <link rel="stylesheet" type="text/css" href="/static/css/normalize.css"/>
                <link rel="stylesheet" type="text/css" href="/static/css/ham-normalize.css" />
                <link rel="stylesheet" type="text/css" href="/static/css/hamburger.css" />
                <link rel="stylesheet" type="text/css" href="/static/css/stylesheet.css"/>

                {this.props.styleTags}
            </Head>
            <body id="body">
            <Main/>
            <NextScript />
            <link rel="stylesheet" type="text/css" href="/static/css/responsive.css"/>
            <script type="text/javascript" src="/static/js/anime.min.js"/>
            <script type="text/javascript" src="/static/js/bg_anime.js"/>
            <script type="text/javascript" src="/static/js/imagesloaded.pkgd.min.js"/>
            <script type="text/javascript" src="/static/js/charming.min.js"/>
            <script type="text/javascript" src="/static/js/TweenMax.min.js"/>
            <script type="text/javascript" src="/static/js/demo.js"/>
            <script type="text/javascript" src="/static/js/ham-demo.js"/>
            <script type="text/javascript" src="/static/js/easings.js"/>
            <script type="text/javascript" src="/static/js/demo6.js"/>
            </body>
            </html>
        )
    }
}