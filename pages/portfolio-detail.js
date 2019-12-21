import React from "react";
import {withRouter} from 'next/router'
import ProductsContainer from '../components/containers/products';
import data from '../jsons/portfolio.json';

const Products =({single}) => {
    return (
        <ProductsContainer allData={data} single={single}/>
    );
};

Products.getInitialProps = ({query: { id }}) => {
    let single = data.find(item=>item.slug===id);
    return {single: single};
}

export default withRouter(Products);