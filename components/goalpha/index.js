import React from 'react';
import {Carousel} from "react-bootstrap";
import Style from "./style"
const GoAlpha = () => {
    return (
        <div id="overheadPage">
            <section>
                <div className="sectionWhy">
                    <div className="whyHead">
                        <p className="whyHeading">WHY GO ALPHA?</p>
                        <h2 className="whySubHead">We are dedicated to game-changing results.</h2>
                    </div>
                    <div className="container desktopSlider">
                        <Carousel>
                            <Carousel.Item>
                                            <div className="container meraContainer why-card-container ">
                                                <div className="row">
                                                <div className="col-md-4 whyCard">
                                                    <div className="whyInner">
                                                        <object type="image/svg+xml" data="/static/media/technology.svg" />
                                                        <h3 className="whysubHeading">Leading Technology</h3>
                                                        <p className="whyDescription">Don’t get stuck behind the curve with an outdated stack.
                                                            We are Alpha for a reason - our experts live on the cutting edge to ensure the performance,
                                                            security, cost, and scalability of your app is a grade above the competition.</p>
                                                    </div>

                                                </div>
                                                <div className="col-md-4 whyCard">
                                                    <div className="whyInner">
                                                        <object type="image/svg+xml" data="/static/media/deep-exp.svg" />
                                                        <h3 className="whysubHeading">Deep Experience</h3>
                                                        <p className="whyDescription">We are a tight-knit team of overachievers with 12+ years of working magic together.
                                                            The Alpha Squad has the experience and know-how to tackle the largest, most complex projects.</p>
                                                    </div>

                                                </div>

                                                <div className="col-md-4 whyCard">
                                                    <div className="whyInner">
                                                        <object type="image/svg+xml" data="/static/media/accountability.svg" />
                                                        <h3 className="whysubHeading">100% Accountability</h3>
                                                        <p className="whyDescription">
                                                            The Alpha Way, our step-by-step formula for reducing project risk,
                                                            ensures your project will be delivered on time and on budget. Regardless of the obstacles,
                                                            we pledge to deliver your project on schedule and exceed your expectations.
                                                        </p>
                                                    </div>

                                                </div>
                                                </div>
                                            </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                            <div className="container meraContainer why-card-container ">
                                            <div className="row">
                                                <div className="col-md-4 whyCard">
                                                    <div className="whyInner">
                                                        <object type="image/svg+xml" data="/static/media/result.svg" />
                                                        <h3 className="whysubHeading">Your Success is Our Success</h3>
                                                        <p className="whyDescription">Many firms can build you an app, few can deliver game-changing results.
                                                            AlphaSquad takes a business-centric approach to every engagement, working to fully grasp your business
                                                            domain, KPIs, and success factors before starting any project.
                                                        </p>
                                                    </div>

                                                </div>
                                                <div className="col-md-4 whyCard">
                                                    <div className="whyInner">
                                                        <object type="image/svg+xml" data="/static/media/glove.svg" />
                                                        <h3 className="whysubHeading">White Glove Treatment</h3>
                                                        <p className="whyDescription">We treat each engagement like royalty.
                                                            We are highly selective with our projects — we work with a handful of elite
                                                            clients and bring our A-team to every project. We become a part of your family.
                                                        </p>
                                                    </div>

                                                </div>

                                                <div className="col-md-4 whyCard">
                                                    <div className="whyInner">
                                                        <object type="image/svg+xml" data="/static/media/agile.svg" />
                                                        <h3 className="whysubHeading">Full “Agile Scrum”</h3>
                                                        <p className="whyDescription">
                                                            Not just great developers, but we also offer full scrum teams that include alpha UI/UX designers,
                                                            business analysts, QA, developers, DB admins, and certified scrum masters.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                            <div className="container meraContainer why-card-container ">
                                                <div className="row">
                                                <div className="col-md-4 whyCard">
                                                    <div className="whyInner">
                                                        <object type="image/svg+xml" data="/static/media/go-alpha.svg" />
                                                        <h3 className="whysubHeading">We Here For You</h3>
                                                        <p className="whyDescription">The Alpha Squad is smart, humble, and driven to serve.
                                                            Our clients consistently rank our development resources and project delivery as outstanding.
                                                            We have been able to maintain this rating for the last 10 years and counting.
                                                        </p>
                                                    </div>

                                                </div>
                                                <div className="col-md-4 whyCard">
                                                    <div className="whyInner">
                                                        <object type="image/svg+xml" data="/static/media/rock-solid.svg" />
                                                        <h3 className="whysubHeading">WRock-Solid Guarantee</h3>
                                                        <p className="whyDescription">Every contract includes guarantee clauses to ensure that we complete your project on time and on budget.
                                                            You will also get a 6-month warranty obliging us to fix major and critical defects discovered upon project completion.
                                                        </p>
                                                    </div>

                                                </div>

                                                <div className="col-md-4 whyCard">
                                                    <div className="whyInner">
                                                        <object type="image/svg+xml" data="/static/media/protect.svg" />
                                                        <h3 className="whysubHeading">IPR Protection</h3>
                                                        <p className="whyDescription">
                                                            We take your intellectual property rights very seriously. To make sure your ideas stay yours,
                                                            we sign a strict NDA from day one to secure your exclusive ownership of the codebase and other deliverables.
                                                        </p>
                                                    </div>

                                                </div>
                                                </div>
                                            </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </section>
            <Style/>
        </div>
    );
};

export  default GoAlpha;