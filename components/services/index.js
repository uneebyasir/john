import React from 'react';
import Style from "./style"
const Services =() => {
    return (
        <div id="overheadPage">
            <section>
                <div className="serviceSection">
                    <div className="serviceHeader">
                        <p>WHAT WE DO</p>
                        <h1>Let’s Innovate Together </h1>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="serviceSlider">
                                    <div className="svg-background">
                                        <object type="image/svg+xml" data="/static/media/web and mobile.svg" />
                                    </div>
                                    <div className="serviceHead">Web App Development</div>
                                    <div className="serviceText">Bring your vision to life with next-generation web solutions
                                    </div>
                                    <a href="/web-app-development">
                                        <div className="serviceMore">
                                            <h6>LEARN MORE</h6>
                                            <span className="serviceIcon">
                                                <img src="/static/media/right-arrow.svg" alt="" />
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3  col-sm-6">
                                <div className="serviceSlider">
                                    <div className="svg-background">
                                        <object type="image/svg+xml" data="/static/media/mobDev.svg" className="mobDev-svg"/>
                                    </div>
                                    <div className="serviceHead">Mobile App Development</div>
                                    <div className="serviceText">Transform your idea into the next killer mobile app
                                    </div>
                                    <a href="/mobile-app-development">
                                        <div className="serviceMore"><h6>LEARN MORE</h6>
                                            <span className="serviceIcon">
                                            <img src="/static/media/right-arrow.svg" alt="" />
                                        </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="serviceSlider">
                                    <div className="svg-background">
                                        <object type="image/svg+xml" data="/static/media/service.svg" />
                                    </div>
                                    <div className="serviceHead">Technology Modernization</div>
                                    <div className="serviceText">Don't stand still - future-proof your legacy software
                                    </div>
                                    <a href="/technology-modernisation">
                                        <div className="serviceMore">
                                            <h6>LEARN MORE</h6>
                                            <span className="serviceIcon">
                                            <img src="/static/media/right-arrow.svg" alt="" />
                                        </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="serviceSlider">
                                    <div className="svg-background">
                                        <object type="image/svg+xml" data="/static/media/team augm.svg" />
                                    </div>
                                    <div className="serviceHead">Staff Augmentation</div>
                                    <div className="serviceText">Expand your team with top-performing, experienced
                                        developers.
                                    </div>
                                    <a href="/staff-augmentation">
                                        <div className="serviceMore"><h6>LEARN MORE</h6>
                                            <span className="serviceIcon">
                                            <img src="/static/media/right-arrow.svg" alt="" />
                                        </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Style/>
        </div>
    );
};

export  default Services;