import React, { Component } from 'react';
import Layout from '../../layout';
import ProductHeader from "../../productpageheader/productpageheader";
import Rowbigcard from "../../rowbigcard";
import Productmenu from "../../productmenu";
import ProductFooter from "../../productsfooter";
import Style from './style';

class BlogPosts extends Component {

    state = {
        current: 1
    };

    setCurrent(val){
       this.setState({current: val});
    }

    render(){
        let { single, allData } = this.props;
        let portfolio = single;
        return <Layout>
                <div className="relative">
                    <div id="productPage">
                        <ProductHeader category={portfolio.category} websiteUrl={portfolio.websiteUrl} title={portfolio.title} client={portfolio.client} year={portfolio.year} role={portfolio.role} headerImageUrl={portfolio.headerImageUrl}/>
                        <Productmenu stories={portfolio.stories} current={this.state.current}/>
                        {
                            portfolio&&portfolio.length!==0 && portfolio.stories.map((single, index)=>
                                <Rowbigcard key={index} setCurrent={this.setCurrent.bind(this)} index={index} title={single.title} content={single.content} featuredImageUrl={single.featuredImageUrl}/>
                            )}
                        <ProductFooter last={portfolio.stories.length+1}  allData={allData} single={single} setCurrent={this.setCurrent.bind(this)}/>
                    </div>
                    <Style/>
                </div>
        </Layout>
    }

}

export default BlogPosts;