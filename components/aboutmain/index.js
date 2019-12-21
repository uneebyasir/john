import React from "react"
import Style from "./style";
import {Container, Row, Col} from 'react-bootstrap';
const aboutmain1 = () =>{
  return(
      <div>
      <Container className="v1-main-container">
          <div>
               <div className="about-w-t">
                 <hr/>
                   <p>
                       About Us
                   </p>
               </div>
              <div className="about-main-text">
                  <h1>We believe digital innovation is at the heart of every business success</h1>
              </div>
          </div>
          <Row>
              <Col md={3} className="about-detail-heading">
                  <p className="story-small">The story</p>
              </Col>
              <Col md={9} className="about-detail-heading">
                  <h5>Talent wins games, teamwork wins championships</h5>
                  <p className="about-long-detail">
                      As the name suggests, we are a tight-knit team of overachievers bound together by a common purpose, to push the envelope of technology and help innovative companies achieve lasting success.<br/><br/>

                      We believe digital innovation is at the heart of every business success.  That’s why we’re single-minded in delivering solutions that are awe-inspiring and transformative.<br/><br/>

                      We are highly selective with our projects — we work with a handful of foward-thinking clients and bring our A-team to every engagement.  Every project starts with the Alpha Way, our step-by-step formula for reducing project risk, empowering teams, and delivering measurable business results.  Together, we define the innovation you need to win today — and the vision you need to win tomorrow.<br/><br/>

                      Headquartered in San Diego with hi-tech development centers in Dubai and Islamabad, AlphaSquad is ideally positioned to provide top-notch software services to clients around the globe.
                  </p>
              </Col>

          </Row>


      </Container>
          <Container fluid={true} className="custom-giving-container">
          <div className="custom-giving-col">
             <Row className="giving-row">
                 <Col md={6}>
                     <img src="/static/media/like.png" />
                     <h1>Giving Back</h1>
                     <p>As global citizens to the communities we work in, we are dedicated to giving back.  Since 2013 we have founded three learning centers for youth, women, and the disadvantaged in [city names] and have helped over [number of people] gain access to valuable technology skills and employment opportunities.  </p>
                 </Col>
                 <Col md={4}>
                     <div className="flower-div"></div>
                 </Col>

             </Row>
          </div>
                  </Container>


          <Style/>
      </div>


  )
}
export default aboutmain1;