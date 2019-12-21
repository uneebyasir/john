import React, { Component } from 'react';
import Style from "./style";
import {getData} from "country-list";
import {apiPath} from '../../config'
import axios from 'axios';

class Form extends Component {

    state = {
        subject: null,
        firstName: null,
        lastName: null,
        email: null,
        workPhone: null,
        companyName: null,
        country: "United States",
        message: null,
        successMessage: " ",
        submitButtonText: "Let’s Talk About Your Project"
    };

    submitHandler=(event)=>{
        event.preventDefault();
        let {firstName, lastName, email, country, subject, message, workPhone, companyName} = this.state;
        let data = {
            FormType: "ContactUs",
            FormData: {
                Name: `${firstName} ${lastName}`,
                Email: email,
                CompanyName: companyName,
                Contact: workPhone,
                Subject: subject,
                Message: message,
                Country: country
            }
        };
        this.setState({submitButtonText: "Sending ..."});
        axios.post(apiPath, data)
            .then(res=>{
                this.setState({submitButtonText: "Let’s Talk About Your Project", successMessage:"Thank you!  We will get in touch within one business day"},()=>{
                    setTimeout(()=>{
                        this.setState({successMessage:" ", subject: null,
                            firstName: null,
                            lastName: null,
                            email: null,
                            workPhone: null,
                            companyName: null,
                            country: null,
                            message: null,})
                    },3000)
                });
            })
            .catch(error=>{
                this.setState({submitButtonText: "Let’s Talk About Your Project", subject: null, successMessage:"Something went wrong.",
                    firstName: null,
                    lastName: null,
                    email: null,
                    workPhone: null,
                    companyName: null,
                    country: null,
                    message: null,});
            })
    };

    render(){
        let countries = getData();
        let {submitButtonText, successMessage, subject, firstName, lastName, email, workPhone, companyName, country, message} = this.state;
        return (
            <section id="footer-form">
                <div>
                    <div className="emptyFormDiv"/>
                    <div className="formSection industryPadding">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="formPercentage formCard">
                                        <object type="image/svg+xml" data="/static/media/percentage.svg" />
                                        <div className="formPercentageText">
                                            <h4>Learn how AlphaSquad helped Toyota increase conversion by 87%</h4>
                                            <a href="/portfolio-detail/analysis-optimization-of-toyota-usa"><p>Read the Case Study</p></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className=" formCard rightForm">
                                        <form className="form-horizontal" onSubmit={(event)=>this.submitHandler(event)}>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <input list="interest" value={subject?subject:""} className="form-control"
                                                           placeholder="I am interested in" onChange={event => this.setState({subject: event.target.value})} required/>
                                                    <datalist id="interest">
                                                        <option value="Mobile App Development" />
                                                        <option value="Web Development" />
                                                        <option value="Enterprise Software Development" />
                                                        <option value="Technology Modernization" />
                                                        <option value="Team Augmentation" />
                                                        <option value="IT Consulting" />
                                                        <option value="UI/UX Design" />
                                                        <option value="other" />
                                                    </datalist>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12 flex-form">
                                                    <div className="col-sm-6 ">
                                                        <input value={firstName?firstName:""} type="text" className="form-control positionRow"
                                                               placeholder="First Name" onChange={(event)=>this.setState({firstName:event.target.value})} required/>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input type="text" value={lastName?lastName:""} className="form-control positionRow1"
                                                               placeholder="Last Name" onChange={(event)=>this.setState({lastName:event.target.value})} required/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <input type="email" className="form-control" id="email"
                                                           placeholder="Email Address"  value={email?email:""} onChange={(event)=>this.setState({email:event.target.value})} required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <input type="number" value={workPhone? workPhone: ""} className="form-control" placeholder="Work Phone" onChange={(event)=>this.setState({workPhone:event.target.value})}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <input style={{zIndex:"1"}} value={companyName?companyName:""} type="text" className="form-control"
                                                           placeholder="Company Name" onChange={(event)=>this.setState({companyName:event.target.value})}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <select defaultValue={country?country:""} name="" id="" onChange={(event)=>this.setState({country:event.target.value})} required className="form-control">
                                                        <option>Country</option>
                                                        {
                                                            countries.map((single, index) => {
                                                                return <option value={single.name} key={index}>{single.name}</option>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group largeArea">
                                                <div className="col-sm-12">
                                                <textarea value={message?message:""} style={{paddingTop: "15px", zIndex: "99999999999"}}
                                                          className="form-control"
                                                          placeholder="Project Description" onChange={(event)=>this.setState({message:event.target.value})} required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <button type="submit" className="formBtn">{submitButtonText}</button>
                                                    <p>{successMessage}</p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid largeBgPadding">
                            <div className="formDataContainer">
                                <header className="header-blog bg-animation">
                                    <div className="container">
                                        <div className="row header-row">
                                            <div className="col-sm-12">
                                                <h1 className="title">AlphaSquad by the Numbers</h1>
                                            </div>
                                            <div className="col-sm-6 align-self-center main-title text-center">
                                                <div className="formSquareCon">
                                                    <div className="infoBox">
                                                        <h1 className="infoBoxHead">96%</h1>
                                                        <h1 className="infoBoxDesc">Client Retention</h1>
                                                    </div>
                                                    <div className="infoBox">
                                                        <h1 className="infoBoxHead">82%</h1>
                                                        <h1 className="infoBoxDesc">Referral Rate</h1>
                                                    </div>
                                                    <br/>
                                                    <div className="infoBox">
                                                        <h1 className="infoBoxHead">1,100+</h1>
                                                        <h1 className="infoBoxDesc">Number of Projects</h1>
                                                    </div>
                                                    <div className="infoBox">
                                                        <h1 className="infoBoxHead">900,000+</h1>
                                                        <h1 className="infoBoxDesc">Users Impacted</h1>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6"/>
                                        </div>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>
                </div>
                <Style/>
            </section>
        );
    }
}


export  default Form;