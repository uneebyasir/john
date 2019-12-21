import React from 'react';
import BlogCard from "./blogcard";
import Style from "./style"
const Blog =() => {
    return (
        <div id="overheadPage">
            <section>
                <div className="blogContainer">
                    <div className="blogHeading">
                        <div className="blogTitle">
                            <h4>VIEWS OF ALPHASQUAD</h4>
                            <h1 className="blogHead">Read from our Blog</h1>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <BlogCard/>

                        </div>
                    </div>
                </div>
            </section>
            <Style/>
        </div>
    );
};

export  default Blog;