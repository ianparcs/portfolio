import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const SectionTitle = (props) => {
    const style = props.textColor + " display-6 mx-auto w-100";
    return (
        <Container>
            <Row>
                <Col>
                    <h3 className={style}>
                        {props.title}
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr className="mx-auto bg-danger w-25 mt-1"/>
                </Col>
            </Row>
        </Container>
    )
};
export default SectionTitle;