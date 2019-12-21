import React from 'react';
import Style from "./style"
const NumberComponent =() => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="squadNumbers">Alpha Squad by the Numbers</h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid padding0">
                    <div className="bgColor">
                        <div className="formSquareCon">
                            <div className="infoBox">
                                <h1 className="infoBoxHead">15+</h1>
                                <hr className="boxHR"/>
                                    <h1 className="infoBoxDesc">Years of Experience</h1>
                            </div>
                            <div className="infoBox infoBoxMiddle">
                                <h1 className="infoBoxHead">300+</h1>
                                <hr className="boxHR"/>
                                    <h1 className="infoBoxDesc">Projects Launched</h1>
                            </div>
                            <div className="infoBox ">
                                <h1 className="infoBoxHead">15+</h1>
                                <hr className="boxHR"/>
                                    <h1 className="infoBoxDesc">National Awards</h1>
                            </div>
                            <div className="infoBox">
                                <h1 className="infoBoxHead">250+</h1>
                                <hr className="boxHR"/>
                                    <h1 className="infoBoxDesc">Satisfied Customers</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Style/>
        </div>
    );
};

export  default NumberComponent;