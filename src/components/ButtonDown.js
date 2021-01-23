import React, {useEffect} from "react"
import {Button} from "react-bootstrap";

function ButtonDown(props) {

    const style = {
        padding: "1%",
        height: "100%",
        backgroundColor: "transparent",
        borderColor: props.color,
        borderWidth: "3px",
        borderStyle: "solid",
        transform:"rotate(-90deg)",
        color: props.color,
    };
    return (
        <>
            <Button style={style} onClick={props.handleClick} type="button">{props.name}</Button>
        </>
    )
}

export default ButtonDown