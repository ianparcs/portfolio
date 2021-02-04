import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const SectionTitle = (props) => {
    const style = props.textColor + " text-center";
    return (
        <Container>
            <Row>
                <Col>
                    <h3 className={style}>
                        {props.title}
                    </h3>
                    <hr className="mx-auto bg-danger w-50 mt-1"/>
                </Col>
            </Row>
        </Container>
    )
};
export default SectionTitle;