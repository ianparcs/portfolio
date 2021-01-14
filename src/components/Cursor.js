import classNames from "classnames";
import React, {useEffect, useState} from "react"
import '../assets/css/cursor.css'

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};


const Cursor = () => {

    const [clicked, setClicked] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});
    const [linkHovered, setLinkHovered] = useState(false);


    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };

    const handleLinkHoverEvents = () => {
        document.querySelectorAll("p,a,h1").forEach(el => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    };

    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };
    const onMouseMove = (e) => {
        setPosition({x: e.clientX, y: e.clientY});
    };

    const cursorClasses = classNames(
        'cursor',
        {
            'cursor--clicked': clicked,
            'cursor--link-hovered': linkHovered
        }
    );

    if (typeof navigator !== 'undefined' && isMobile()) {
        return null;
    }

    return <div className={cursorClasses}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}/>
};

export default Cursor