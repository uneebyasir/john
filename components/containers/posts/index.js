import React from 'react';
import Layout from '../../layout/index';
import CategoriesFilter from '../../categoriesfilter/index';
import PostCards from '../../postCards/index';
const BlogPosts =(props) => {
    let { data } = props;
    return (
        <Layout>
            <CategoriesFilter/>
            <PostCards data={data}/>
        </Layout>
    );
};

export  default BlogPosts;