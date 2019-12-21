import React from 'react';
import Style from './style';
import Scrollchor from 'react-scrollchor';
const Leading =(props) => {
    let { show, title, content, image, leadText } = props;
    return (
        <div>
            <div className={"main_header top-header "+(!show ? "other": "")}>
                <div className="head-bgImg position">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="main-heading-container">
                                    {
                                        leadText &&
                                        <div className="headItemline">
                                            <div className="headerLine"/>
                                            <span className="productDevelopment">{leadText}</span>
                                        </div>

                                    }
                                    <div className="heading-upper">
                                        <h1>{title}</h1>
                                        {/*<p>{}</p>*/}
                                        <div dangerouslySetInnerHTML={{__html: content}}/>
                                    </div>
                                    <Scrollchor to="#footer-form">
                                        <button className="headerBtn">Let's Talk</button>
                                    </Scrollchor>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="alpha-squad-img">
                                    <img src={image} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        show &&
                        <div className="reactangle-svg">
                            <object data="/static/media\bg.svg" type="image/svg+xml" className="reactangleImgSvg"/>
                        </div>
                    }
                </div>
            </div>
            <Style/>
        </div>
    );
};

export  default Leading;