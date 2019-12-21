import React from 'react';
import Style from "./style";
import {Container, Col} from 'react-bootstrap';
const PostHeader = () => {
    return (
        <Container className="post-detail-head">
            <div className=".custom-row">
                <h3>
                   How the right team can help build you the right business?
                </h3>
            </div>
            <Style/>
        </Container>
    );
};

export default PostHeader;