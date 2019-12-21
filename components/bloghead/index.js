import React from 'react';
import Style from './style';

const BlogHead =() => {
    return (
        <div>
            <section className="main_header top-header">
                <div className="container">
                    <div>
                        <h1 className="footerHeading marg-0">Our Thoughts</h1>
                    </div>
                    <div className="category-div flex-rw">
                        <p>Categories: </p>
                        <ul className="categ-list">
                            <li><a href="#">All</a></li>
                            <li><a href="#">Tech</a></li>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Startups</a></li>
                            <li><a href="#">Business</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <Style/>
        </div>
    );
};

export  default BlogHead;