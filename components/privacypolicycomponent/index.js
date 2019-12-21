import React from "react";
import Style from "./style";
import {Container, Row, Col} from 'react-bootstrap';

const privacyComponent = () => {
    return (
        <div>
            <Container>
                <Col md={12}>
                    <section className="privacy-policy-section">
                        <h1 className="privacy-main-heading">AlphaSquad Privacy Policy</h1>
                        <div className="Site-usage">
                            <h5>Site Usage and User Tracking</h5>
                            <p>AlphaSquad uses cookies (small text files stored on your computer) to track user traffic
                                patterns. Cookies enable us to enhance user experience by analyzing which pages visitors
                                find most helpful. In addition, cookies allow serving personalized content (including
                                but not limited to Google ads) based on user visit history. Most web browsers accept
                                cookies by default, but this behavior can be disabled via your browser’s settings.</p>
                        </div>
                        <div className="log-data">
                            <h5>Log Data</h5>
                            <p>Like many site operators, we collect information that your browser sends whenever you
                                visit our Site (“Log Data”). This Log Data may include information such as your
                                computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of
                                our Site that you visit, the time and date of your visit, the time spent on those pages
                                and other statistics.
                            </p>
                        </div>
                        <div className="Personal-Information">
                            <h5>Personal Information Sharing</h5>
                            <p>
                                AlphaSquad does not share or distribute any information or documents about individual
                                users with any third party, except to comply with applicable laws or valid legal
                                processes, or to protect the personal safety of our users or the public.

                            </p>
                        </div>
                        <div className="Data-Safety">
                            <h5>Data Safety and Protection
                            </h5>
                            <p>Our site has advanced industry-standard security measures to prevent data loss, misuse,
                                or alteration. Most Of AlphaSquad’s personnel cannot access the collected personal data.
                                This data is only available to AlphaSquad’s managers in charge of customer
                                communications.

                            </p>
                        </div>
                        <div className="Children’s-Privacy">
                            <h5>Children’s Privacy</h5>
                            <p>
                                Our Site does not address anyone under the age of 13 (“Children”). We do not knowingly
                                collect personally identifiable information from children under 13. If you are a parent
                                or guardian and are aware that your Children has provided us with Personal Information,
                                please contact us. If we discover that a Children under 13 has provided us with Personal
                                Information, we will delete such information from our servers immediately.

                            </p>
                        </div>
                        <div className="Data-Protection">
                            <h5>Data Protection Rights According to GDPR</h5>
                            <p>
                                As of May 25, 2018, the privacy of our EU-based clients is protected by the General Data
                                Protection Regulation (GDPR). As a data collector, we have amended our policies to
                                comply with the GDPR regarding the collection, processing, and storage of personal data.
                                Data subjects have the right to request the full extent of their personal data that has
                                been collected, processed, and stored by AlphaSquad, free of charge.
                                AlphaSquad does not collect, process, or store personal data without prior consent.
                                Consent can be withdrawn at any time.
                                Data subjects have the right to request AlphaSquad stop processing their personal
                                information and/or delete it from the database.
                                Data subjects have the right to opt out of marketing communications from AlphaSquad.
                                AlphaSquad will provide an easily accessible way of opting out every time such a
                                communication is made.
                            </p>
                        </div>
                        <div className="Communications">
                            <h5>Communications</h5>
                            <p>
                                We may use your Personal Information to contact you with newsletters, marketing or
                                promotional materials and other information that may be of interest to you. You may opt
                                out of receiving any, or all, of these communications from us by following the
                                unsubscribe instructions provided in any email we send.

                            </p>
                        </div>
                        <div className="Changes">
                            <h5>Changes</h5>
                            <p>
                                AlphaSquad reserves the right to change, alter, or update this Privacy Policy at any
                                time. We encourage you to review this page periodically for possible updates.
                            </p>
                        </div>
                        <div className="Changes">
                            <h5>Contact Information</h5>
                            <p>
                                AlphaSquad welcomes your comments and questions on this statement. Please do not
                                hesitate to contact us via e-mail at <a href="mailto:info@AlphaSquad.com">info@AlphaSquad.com</a>.

                            </p>
                        </div>
                    </section>
                </Col>
            </Container>
            <Style/>
        </div>
    )
}
export default privacyComponent