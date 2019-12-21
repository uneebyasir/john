import React, {Component} from "react";
import Layout from "../components/layout";
import BlogHead from "../components/bloghead";
import Blogbigcard from "../components/blogbigcard";

class posts extends Component {
    render() {
        return (
            <Layout>
                <div id="homePageBlog">
                    <BlogHead/>
                    <div className="col-md-12 marg-36">
                        <Blogbigcard/>
                        <Blogbigcard/>
                    </div>
                    <Blogbigcard/>
                    <Blogbigcard/>
                </div>
            </Layout>
        )
    }
}

export default posts;