import React, {Component} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "./style";
import {apiPath} from '../../config'
import axios from 'axios';
import Form from "../form";

class contactUs extends Component{
    state = {
        subject: null,
        firstName: null,
        email: null,
        workPhone: null,
        companyName: null,
        message: null,
        successMessage: " ",
        submitButtonText: "Send Message"
    };


    submitHandler=(event)=>{
        event.preventDefault();
        let {firstName, email, subject, message, workPhone, companyName} = this.state;
        let data = {
            FormType: "ContactUs",
            FormData: {
                Name: `${firstName}`,
                Email: email,
                CompanyName: companyName,
                Contact: workPhone,
                Subject: subject,
                Message: message
            }
        };
        this.setState({submitButtonText: "Sending ..."});
        axios.post(apiPath, data)
            .then(res=>{
                this.setState({submitButtonText: "Send Message", successMessage:"Successfully sended"},()=>{
                    setTimeout(()=>{
                        this.setState({
                            successMessage:" ",
                            subject: null,
                            firstName: null,
                            email: null,
                            workPhone: null,
                            companyName: null,
                            message: null
                        })
                    },3000)
                });
            })
            .catch(error=>{
                this.setState({submitButtonText: "Send Message", successMessage:"Something went wrong. Please try again later.",
                    subject: null,
                    firstName: null,
                    email: null,
                    workPhone: null,
                    companyName: null,
                    message: null
                });
            })
    };
    render(){
        let {submitButtonText, successMessage, subject, firstName, email, workPhone, companyName, message} = this.state;
        return (
            <section className="contact_us">
                <Container>
                    <div className="main_heading">
                        <h4>CONTACT US</h4>
                        <h1>Get in touch to get the ball rolling.</h1>
                    </div>
                    <Row className="three-grid">
                        <Col sm={12} md={6} lg={4} >
                            <div className="single">
                                <img src="/static/media/pin.png" alt=""/>
                                <h3>Our Location</h3>
                                <p>4275 Executive Square Suite 200 <br/>La Jolla, CA 92037</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} >
                            <div className="single">
                                <img src="/static/media/mail.png" alt=""/>
                                <h3>Email & Phone</h3>
                                <p>howdy@alphasquad.com <br/>858-405-0249</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} >
                            <div className="single">
                                <img src="/static/media/share.png" alt=""/>
                                <h3>Get In Touch</h3>
                                <p>Also find us on social media below</p>
                                <div className="social_icons">
                                    <a href="#"><img src="/static/media/twitter-logo.png" alt=""/></a>
                                    <a href="#"><img src="/static/media/linkedin1.png" alt=""/></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/*<Container fluid={true} className="contact-form">*/}
                    {/*<Row>*/}
                        {/*<Col sm={12} md={12} lg={6} className="p0">*/}
                            {/*<img src="/static/media/map-image.jpg" alt=""/>*/}
                        {/*</Col>*/}
                        {/*<Col sm={12} md={12} lg={6} className="p0">*/}
                            {/*<form className="form-area" onSubmit={(event)=>this.submitHandler(event)}>*/}
                                {/*<Row >*/}
                                    {/*<Col sm={12} md={6} lg={6}>*/}
                                        {/*<input value={firstName?firstName:""} type="text" placeholder="Name" onChange={(event)=>this.setState({firstName:event.target.value})} required/>*/}
                                    {/*</Col>*/}
                                    {/*<Col sm={12} md={6} lg={6}>*/}
                                        {/*<input type="text" value={companyName?companyName:""} placeholder="Company Name" onChange={(event)=>this.setState({companyName:event.target.value})}/>*/}
                                    {/*</Col>*/}
                                    {/*<Col sm={12} md={6} lg={6}>*/}
                                        {/*<input type="email" value={email?email:""} placeholder="Email Address" onChange={(event)=>this.setState({email:event.target.value})} required/>*/}
                                    {/*</Col>*/}
                                    {/*<Col sm={12} md={6} lg={6}>*/}
                                        {/*<input type="number" value={workPhone} placeholder="Contact Number" onChange={(event)=>this.setState({workPhone:event.target.value})}/>*/}
                                    {/*</Col>*/}
                                    {/*<Col sm={12} md={12} lg={12}>*/}
                                        {/*<input type="text" value={subject?subject:""} placeholder="Subject" onChange={event => this.setState({subject: event.target.value})} required/>*/}
                                    {/*</Col>*/}
                                    {/*<Col sm={12} md={12} lg={12}>*/}
                                        {/*<textarea name="" id="" value={message?message:""} cols="30" rows="4" placeholder="How can we help you?" onChange={(event)=>this.setState({message:event.target.value})} required/>*/}
                                    {/*</Col>*/}
                                    {/*<Col sm={12} md={12} lg={12}>*/}
                                        {/*<Row>*/}
                                            {/*<button type="submit">{submitButtonText}</button>*/}
                                        {/*</Row>*/}
                                        {/*<p>{successMessage}</p>*/}
                                    {/*</Col>*/}
                                {/*</Row>*/}
                            {/*</form>*/}
                        {/*</Col>*/}
                    {/*</Row>*/}
                {/*</Container>*/}
                <Form/>
                <Style/>
            </section>
        )
    }
}

export default contactUs;