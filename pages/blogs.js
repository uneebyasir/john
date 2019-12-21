import React from 'react';
import Posts from '../components/containers/posts'
import Blogs from "../jsons/blogs.json";

const BlogPosts =({data}) => {
    return (
        <Posts data={data}/>
    );
};


BlogPosts.getInitialProps = () => {
    return {data: Blogs};
}

export  default BlogPosts;