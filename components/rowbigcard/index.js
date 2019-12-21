import React, { Component } from 'react';
import IntersectionVisible    from 'react-intersection-visible';

const Rowbigcard =(props) => {
    let { title, content, featuredImageUrl, index, setCurrent } = props;
    const onChange = (isVisible) => {
        if(isVisible){
            setCurrent(index+1);
        }
        // console.log('Element '+index, isVisible ? 'visible' : 'hidden');
    }

    return (
        <IntersectionVisible onShow={onChange.bind(this)} key={index}>
            <div>
                <section id={"section"+(index+1)}>
                    <div className="section content_area">
                        <div className="number">0{index+1}
                            <hr className="numberLine"/>
                        </div>
                        <h1>{title}</h1>
                        <p>{content}</p>
                    </div>
                    {
                        featuredImageUrl &&
                            <div>
                                <div className="emptyInspireDiv"/>
                                <div className="container">
                                    <img className="sectionImage imageWidth1" src={featuredImageUrl} alt=""/>
                                </div>
                            </div>
                    }
                </section>
                <div className="emptyInspireDiv"/>
            </div>
        </IntersectionVisible>
    );
};

export  default Rowbigcard;