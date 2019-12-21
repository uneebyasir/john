import React, { Component } from "react";
import Style from"./style";
import {Row, Col, Container} from "react-bootstrap";
import datas from "./advantage.json";

class alphaAdvantage extends Component {

    state = {
        data: null,
        current: null,
        currentIndex: 0
    }

    componentDidMount(){
        this.setState({data: datas, current: datas[0]});
    }

    setData(data, index){
        this.setState({current: data, currentIndex: index});
    }

    render(){
        let { data, current, currentIndex } = this.state;
        return (
            <section className="switch-section">
                <h1>The Alpha Squad Advantage</h1>
                <Container className="switch-container">

                    <Col md={12}>
                        <Row>
                            <Col md={5}>
                                <div>
                                    {
                                        data && data.map((single, index) => {
                                            return <button className={"btn swithc-btn "+ (currentIndex === index ? "active" : "")} key={index} onClick={() => this.setData(single, index)}>
                                                {single.title}
                                            </button>
                                        })
                                    }
                                </div>
                            </Col>
                            <Col md={7}>
                                {
                                    current &&
                                    <div>
                                        <p>{current.content}</p>
                                    </div>
                                }
                            </Col></Row>
                    </Col>
                </Container>
                <Style/>
            </section>

        )
    }
}
export default alphaAdvantage