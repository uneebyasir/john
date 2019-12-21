import React from 'react';
import Style from "./style";
import {Container, Col} from 'react-bootstrap';
import Link from "next/link";
// import mdData from "../../jsons/blogs.md";
// import mdToJson from "md-2-json";
const PostCards = (props) => {
    let { data } = props;
    // console.log(mdToJson.parse(mdData));
    return (
        <Container className="post-cards">
            <div className="custom-row">
                {
                    data && data.map(single => {
                        return <Col md={6} key={single.id}>
                            <Link href={"/blog-detail/"+single.slug}><a>
                                    <div className="post-card-background"
                                         style={{backgroundImage: "url('"+single.featuredImage+"')"}}/>
                                    <div className="post-card-detail">
                                        <div className="d-flex">
                                            <hr/>
                                            <div className="d-flex"><p>{single.category}</p><span>/</span><p>{single.date}</p></div>
                                        </div>
                                        <h3>
                                            {single.title}
                                        </h3>
                                    </div>
                                </a>
                            </Link>
                        </Col>
                    })
                }
            </div>
            <div className="show-more-btn">
                <button>
                    SHOW MORE
                </button>
            </div>
            <Style/>
        </Container>
    );
};

export default PostCards;