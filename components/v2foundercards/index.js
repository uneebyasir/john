import React from "react"
import {Container, Row, Col} from 'react-bootstrap';
import Style from "./style"
const v2foundercard = () => {
    return (
        <Container className="long-card-main">
            <Col md={9} className="long-card">
                <Row>
                    <Col md={3}>
                        <div className="round-div-londcard" style={{backgroundImage: "url('/static/media/bryan.png')"}}/></Col>
                    <Col md={8}>
                    <div className="founder-detail-div">
                        <p className="founder-name">Bryan Ferguson</p>
                        <p className="founder-detail">A 20+ year technology veteran, Bryan founded his first software company in 1997, a negotiation simulator that he coded in his garage. Since then he has been a leader at dozens of tech companies and startups across many industries, including legal, ECM, e-commerce, healthcare, sports, and retail. He lives by the mantra – "the biggest factor in success is surrounding yourself with the right people” – which is why delivering top-notched talent and passion are so important for every AlphaSquad engagement. After decades of entrepreneurial successes (and many letdowns), Bryan enjoys sharing his experience with startups in the San Diego community, helping them navigate the early stages of growth and achieve product-market fit. Away from the office, Bryan can be found in the La Jolla Cove swimming and free-diving.
</p>
                        <div className="long-line-div"> <hr/><span>Bryan Ferguson</span></div>
                        <a href="https://www.linkedin.com/in/bryanrferguson/" target="_blank"><img src="/static/media/linkedin.png"/></a>
                    </div></Col>

                </Row>
                <Row>
                    <Col md={3}>
                        <div className="round-div-londcard" style={{backgroundImage: "url('/static/media/saad-ali-shah.jpeg')"}}/></Col>
                    <Col md={8}>
                        <div className="founder-detail-div">
                            <p className="founder-name">Saad Ali Shah</p>
                            <p className="founder-detail">Our alpha design savant, Saad is a strong advocate of user experience and fights for a simple and frustration-free digital universe. A curious soul, Saad fell in love with technology early in life, in particular, the intersection of UX and visual design. From 2002, his talent for increasing revenue via UX landed him several high profile clients, including several Fortune 500 companies. Saad has been part of Forbes Technology Council since 2016, an organization comprised of leading CIOs, CTOs and technology executives. He continues to explore technology horizons and thinks about happy users and businesses.
</p>
                            <div className="long-line-div"> <hr/><span>Saad Ali Shah</span></div>
                            <a href="https://www.linkedin.com/in/saad-ali-shah/" target="_blank"><img src="/static/media/linkedin.png"/></a>
                        </div></Col>

                </Row>
                <Row>
                    <Col md={3}>
                        <div className="round-div-londcard" style={{backgroundImage: "url('/static/media/aqkhan.jpeg')"}} /></Col>
                    <Col md={8}>
                        <div className="founder-detail-div">
                            <p className="founder-name">Arslan Khan</p>
                            <p className="founder-detail">
                            AlpahSquad’s tech wizard and true alpha leader, Arslan’s passion for programming started early at age 9 and quickly blossomed into a lifelong obsession and calling. A born leader, Arslan has trained and managed over 100 programmers, completed over 1,000 IT projects for clients from 34 countries and feels most inspired when helping businesses realize their true potential. He regularly gives lectures on technology and entrepreneurship and runs a fund for universities. Arslan is most proud of his contributions to children hospitals and clinics and his Women’s Empowerment Foundation - and has made charity a big part of AlphaSquad’s DNA.

                            </p>
                            <div className="long-line-div"> <hr/><span>Arslan Khan</span></div>
                            <a href="https://www.linkedin.com/in/arslanqamarkhan/" target="_blank"><img src="/static/media/linkedin.png"/></a>
                        </div></Col>

                </Row>
            </Col>
            <Style/>
        </Container>
    )
}
export default v2foundercard;