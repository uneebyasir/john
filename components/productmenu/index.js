import React, { Component } from 'react';
import Style from './style';
import Scrollchor from 'react-scrollchor';
import Sticky from 'react-sticky-el';

class ProductMenu extends Component{

    render(){
        let { current, stories } = this.props;
        return (
            <div className="sticky-menu">
                <Sticky boundaryElement=".relative" hideOnBoundaryHit={false} topOffset={-200} bottomOffset={500}>
                    <div className="section main_sticky_section sidebar"  >
                        <div className="invertedNumber">0{current}/
                            <p>0{stories.length+1}</p>
                        </div>
                        <ul className="leftMenuItems">
                            {
                                stories && stories.map((single, index) => (
                                    <li className={current === (index+1) ? "active": ""} key={index}><Scrollchor to={"#section"+(index+1)} animate={{offset: -150}}>{single.title}</Scrollchor></li>
                                ))
                            }
                            <li className={current === (stories.length+1) ? "active": ""}><Scrollchor to={"#section"+(stories.length+1)} animate={{offset: -150}}>Technology</Scrollchor></li>
                        </ul>
                        <Style/>
                    </div>
                </Sticky>
            </div>
        );
    }

}

export  default ProductMenu;