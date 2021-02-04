import React from 'react';
import {Row} from "react-bootstrap";

const CenterView = (props) => {
    const style = props.bg + " d-flex align-items-center text-center";
    return (
        <Row id={props.sectionName} className={style}>
            {props.children}
        </Row>
    )
};
export default CenterView;