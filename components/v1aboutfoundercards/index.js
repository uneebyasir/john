import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Style from "./style"

const v1cards = () =>{
    return(
        <Container>
            <Row  className="founder-1-main-cards">

                <Col md={5}>
                    <div className="founder-img-card"/>
                </Col>
                <Col md={6}>
                    <div>
                        <p className="founder-name">Bryan Ferguson</p>
                        <p className="founder-detail">A 20+ year technology veteran, Bryan founded his first software company in 1997, a negotiation simulator that he coded in his garage.  Since then he has been a leader at dozens of tech companies and startups across many industries, including legal, ECM, e-commerce, healthcare, sports, and retail.  He lives by the mantra – "the biggest factor in success is surrounding yourself with the right people” – which is why delivering top-notched talent and passion are so important for every AlphaSquad engagement.  After decades of entrepreneurial successes (and many letdowns), Bryan enjoys sharing his learnings with startups in the San Diego community, helping them achieve product-market fit and navigate the early stages of growth.  Away from the office, Bryan can be found in the La Jolla Cove swimming and free-diving.</p>
                        <div className="foundersmallname">
                            <hr/>
                            <p>Bryan ferguson</p>
                        </div>
                        <img className="founder-signatue" src="/static/media/sign.png"/>
                    </div>
                </Col>
            </Row>
            <Row  className="founder-1-main-cards">
                <Col md={6}>
                    <div>
                        <p className="founder-name">Saad Ali Shah</p>
                        <p className="founder-detail">Our alpha design savant, Saad is a strong advocate of user experience and fights for a simple and frustration-free digital universe.  A curious soul, Saad feel in love with technology early in life, in particular the intersection of UX and visual design.  From 2002, his talent for increasing revenue via UX landing him several high profile clients, including several Fortune 500 companies.  Saad has been part of Forbes Technology Council, an organization comprised of leading CIOs, CTOs and technology executives.  He continues to explore technology horizons and think about happy users and happy businesses.  When not fine-tuning user experience models, you can find him beating his own best scores on Xbox. </p>
                        <div className="foundersmallname">
                            <hr/>
                            <p>Saad Ali Shah</p>
                        </div>
                        <img className="founder-signatue" src="static/media/sign.png"/>
                    </div>
                </Col>
                <Col md={5}>
                    <div className="founder-img-card"/>
                </Col>
            </Row>
            <Row  className="founder-1-main-cards">
                <Col md={5}>
                    <div className="founder-img-card"/>
                </Col>
                <Col md={6}>
                    <div>
                        <p className="founder-name">Arslan Khan</p>
                        <p className="founder-detail">AlpahSquad’s tech wizard and true alpha leader, Arslan’s passion for programming started early at age 9 and quickly blossomed into a lifelong obsession and calling.  A born leader, Arslan has trained and managed over a 100 people, completed over a 1,000 projects for clients from 34 different countries and feels most inspired when helping businesses realize their true potential.  He regularly gives lectures on technology and entrepreneurship and runs a fund for universities. Arslan is most proud of his contributions to children hospitals and clinics and his Women’s Empowerment Foundation - and has made charity a big part of AlphaSquad’s DNA.
                        </p>
                        <div className="foundersmallname">
                            <hr/>
                            <p>Arslan Khan</p>
                        </div>
                        <img className="founder-signatue" src="/static/media/sign.png"/>
                    </div>
                </Col>
            </Row>
            <Style/>
        </Container>
    )
}
export default v1cards;