import React from "react";
import Layout from "../components/layout";
import SingleArticle from "../components/containers/blogdetail"
import Blogs from "../jsons/blogs.json";

const PostDetailPage =({single}) => {
    return (
        <Layout>
            <SingleArticle single={single}/>
        </Layout>
    );
};

PostDetailPage.getInitialProps = ({query: { id }}) => {
    let single = Blogs.find(item=>item.slug===id);
    return {single: single};
};

export  default PostDetailPage;