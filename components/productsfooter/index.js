import React  from 'react';
// import {Container} from 'react-bootstrap';
import Style from './style';
import IntersectionVisible    from 'react-intersection-visible';

const ProductFooter =(props) => {
    let { setCurrent, allData, single, last } = props;
    const onChange = (isVisible) => {
        if(isVisible){
            setCurrent(last);
        }
    };
    let currentIndex = allData.findIndex(item => item.slug === single.slug);
    return (
        <IntersectionVisible onShow={onChange.bind(this)}>
            <section>
                <div className="container">
                    <ul className="footerList " id="section4">
                        <li className="spanHead">Technologies
                            <ul className="subItems">
                                {
                                    single.technologies.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })
                                }
                            </ul>
                        </li>
                        <li className="spanHead">Tools
                            <ul className="subItems">
                                {
                                    single.tools.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })
                                }
                            </ul>
                        </li>
                    </ul>
                    <div className="emptyFormDiv"/>
                </div>
                <div className="container-fluid">
                    <hr/>
                    <div className="navArrowContainer">
                        <div>
                            {
                                allData[currentIndex-1] &&
                                <a href={"/portfolio-detail/"+allData[currentIndex-1].slug}>
                            <span>
                                <span className="projectArrow leftArrow leftee">
                                    <object type="image/svg+xml" data="/static/media/arrow-left.svg" />
                                </span>
                                <span className="navArrowTitle leftee">Prev Project</span>
                            </span>
                                </a>
                            }
                        </div>
                        <div>
                            {
                                allData[currentIndex+1] &&
                                <a href={"/portfolio-detail/"+allData[currentIndex+1].slug}>
                                <span>
                                    <span className="projectArrow rightee">
                                        <object type="image/svg+xml" data="/static/media/arrow-right.svg" />
                                    </span>
                                    <span className="navArrowTitle rightee">Next Project</span>
                                </span>
                                </a>
                            }
                        </div>
                    </div>
                </div>
            <Style/>
        </section>
        </IntersectionVisible>
    );
};

export  default ProductFooter;