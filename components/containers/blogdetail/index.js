import React from "react";
import Style from './style';

function SingleArticle (props) {
    let { single } = props;
 return (
     <div id="homePageInner">

         <section className="main_header top-header">
             <div className="container border-bottom">
                 <div>
                     <h2 className="heading-top marg-0 marg-36">{single && single.title}</h2>
                 </div>
                 <div>
                     <img src={single &&single.featuredImage} alt="teams" style={{width: "100%"}}/>
                 </div>
                 <div className="row">
                     <div className="col-md-2">
                         <div className="reference">
                             <div className="headItemline">
                                 <span className="productDevelopment">WRITTEN BY </span>
                                 <div className="headerLine"/>
                             </div>
                             <div>
                                 <h2>{single && single.writer}</h2>
                             </div>
                         </div>
                         <div className="reference">
                             <div className="headItemline">
                                 <span className="productDevelopment">CATEGORY </span>
                             </div>
                             <div>
                                 <h2>{single && single.category}</h2>
                             </div>
                         </div>
                     </div>
                     <div className="col-md-10">
                         <div className="communicate" dangerouslySetInnerHTML={{__html: single && single.content}}/>
                         {/*<div className="communicate">*/}
                             {/*<div className="quote">*/}
                             {/*<div className="quote-sign">*/}
                             {/*<i className="fa fa-quote-left"/>*/}
                             {/*</div>*/}
                             {/*<div className="quotation">*/}
                             {/*The goal of designer is to listen, observe, understand, sympathize,*/}
                             {/*empathize, synthesize and glean insights that enable him or her to*/}
                             {/*make the invisible visible.*/}
                             {/*</div>*/}
                             {/*<div className="quote-ref">*/}
                             {/*<div className="headItemline">*/}
                             {/*<div className="headerLine"/>*/}
                             {/*<span className="productDevelopment">Hillman Curtis </span>*/}
                             {/*</div>*/}
                             {/*</div>*/}
                             {/*</div>*/}
                         {/*</div>*/}
                     </div>
                 </div>
             </div>
             <div className="container">
                 <div className="next-arcticle">
                     <div className="next-article-txt">
                         NEXT ARTICLE
                     </div>
                     <div className="article-heading">
                         10 Emerging Trends for Mobile App Development
                     </div>
                     <div className="next-icon">
                        <span className="serviceIcon">
                                <svg width="9px" height="14px" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    {/*<!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->*/}
                                    <title>arrow-right</title>
                                    <desc>Created with Sketch.</desc>
                                    <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="circle-btn-right-black" transform="translate(-24.000000, -21.000000)" fill="#FFFFFF">
                                            <polygon id="arrow-right" points="25.912 34.364 24.497 32.95 29.447 28 24.497 23.05 25.912 21.636 32.275 28"/>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                     </div>
                 </div>
             </div>
         </section>
         <Style/>
     </div>
 )
}
export default SingleArticle