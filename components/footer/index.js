import React from 'react';
import Style from './style';
const Footer =() => {
    return (
        <section id="footer">
            <div className="footer">
                <div className="container">
                    <div className="footerHeadingCon">
                        <h1 className="footerHeading">We collaborate with ambitious brands and people.</h1>
                    </div>
                    <div className="footerContactCon">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="footerContactBox">
                                    <h4 className="footerContactHead">Office</h4>
                                    <h4 className="footerContactDesc">4275 Executive Square</h4>
                                    <h4 className="footerContactDesc">Suite 200</h4>
                                    <h4 className="footerContactDesc">LA Jolla, CA 92037</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footerContactBox">
                                    <h4 className="footerContactHead">Start a conversation</h4>
                                    <h4 className="footerContactDesc"><a href="mailto:howdy@alphasquad.com">howdy@alphasquad.com</a></h4>
                                    <h4 className="footerContactDesc">858-405-0249</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footerContactBox">
                                    <h4 className="footerContactHead">Social</h4>
                                    <h4 className="footerContactDesc">Connect with us on </h4>
                                    <h4 className="footerContactDesc"><a href="https://twitter.com/Alphasq86076809">Twitter</a>or<a href="https://www.linkedin.com/company/alphasquad-tech">LinkedIn</a> </h4>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center privacy-link">
                            <a href="/privacy-policy">PRIVACY POLICY</a>
                        </div>
                    </div>
                    <div className="emptyFooterDiv"/>
                </div>
            </div>
            <Style/>
        </section>
    );
};

export  default Footer;