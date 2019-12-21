import React from 'react';
import {Carousel} from "react-bootstrap";
import Style from "./style";
const Advantages =() => {
    return (
        <div id="overheadPage">
            <div className="emptyFormDiv"/>
            <section className="gallerySlider">
                <h1 className="outsourcedTeam">The Alpha Squad Advantage</h1>

                <div className="container desktopSlider">
                    <Carousel>
                        <Carousel.Item>
                            <div className="container meraContainer">

                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="container why-card-container ">

                                            <div className="col-md-4 whyCard">
                                                <div className="whyInner">
                                                    <img src="/static/media/network.svg" alt="" className="whyIcon"/>
                                                    <h3 className="whysubHeading">Better Technology</h3>
                                                    <p className="whyDescription">Don’t get stuck behind the curve with an outdated “Stack”. Our
                                                        experts live on the cutting edge ...</p>
                                                </div>

                                            </div>
                                            <div className="col-md-4 whyCard">
                                                <div className="whyInner">
                                                    <img src="/static/media/connection.png" alt="" className="whyIcon"/>
                                                    <h3 className="whysubHeading">Deep Experience</h3>
                                                    <p className="whyDescription">Our portfolio speaks for itself. Our senior alpha professionals have the
                                                        know-how can tackle even the ...</p>
                                                </div>

                                            </div>

                                            <div className="col-md-4 whyCard">
                                                <div className="whyInner">
                                                    <img src="/static/media/pie-chart.svg" alt="" className="whyIcon"/>
                                                    <h3 className="whysubHeading">We Speak Business Results</h3>
                                                    <p className="whyDescription">Leverage our 15+ years of startup, Fortune 500, and business know-
                                                        how to ensure your project meets..</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="container meraContainer">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="container why-card-container ">

                                            <div className="col-md-4 whyCard">
                                                <div className="whyInner">
                                                    <img src="/static/media/interaction.png" alt="" className="whyIcon"/>
                                                    <h3 className="whysubHeading">White Glove Treatment</h3>
                                                    <p className="whyDescription">We treat each engagement like royalty. We hand-select your team
                                                        based on skills, industry experience,..</p>
                                                </div>

                                            </div>
                                            <div className="col-md-4 whyCard">
                                                <div className="whyInner">
                                                    <img src="/static/media/develop.png" alt="" className="whyIcon"/>
                                                    <h3 className="whysubHeading">Full “Agile Scrum”</h3>
                                                    <p className="whyDescription">Not just great developers, but we also offer full scrum teams that
                                                        include alpha UI/UX designers,..</p>
                                                </div>

                                            </div>

                                            <div className="col-md-4 whyCard">
                                                <div className="whyInner">
                                                    <img src="/static/media/network.svg" alt="" className="whyIcon"/>
                                                    <h3 className="whysubHeading">Better Technology</h3>
                                                    <p className="whyDescription">Don’t get stuck behind the curve with an outdated “Stack”. Our
                                                        experts live on the cutting edge ...</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="container meraContainer">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="container why-card-container ">

                                            <div className="col-md-4 whyCard">
                                                <div className="whyInner">
                                                    <img src="/static/media/interaction.png" alt="" className="whyIcon"/>
                                                    <h3 className="whysubHeading">IPR Protection</h3>
                                                    <p className="whyDescription">We take your intellectual property rights very seriously. To make sure
                                                        your ideas stay yours,..</p>
                                                </div>

                                            </div>
                                            <div className="col-md-4 whyCard">
                                                <div className="whyInner">
                                                    <img src="/static/media/develop.png" alt="" className="whyIcon"/>
                                                    <h3 className="whysubHeading">White Glove Treatment</h3>
                                                    <p className="whyDescription">We treat each engagement like royalty. We hand-select your team
                                                        based on skills, industry experience,..</p>
                                                </div>

                                            </div>

                                            <div className="col-md-4 whyCard">
                                                <div className="whyInner">
                                                    <img src="/static/media/network.svg" alt="" className="whyIcon"/>
                                                    <h3 className="whysubHeading">Rock-Solid Guarantee</h3>
                                                    <p className="whyDescription">Every contract includes guarantee clauses to ensure that we complete
                                                        your project on time and...</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
            <Style/>
        </div>
    );
};

export  default Advantages;