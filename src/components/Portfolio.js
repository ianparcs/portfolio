import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const Portfolio = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    const list = {
        visible: {opacity: 1},
        hidden: {opacity: 0},
    }

    const item = {
        visible: {opacity: 1, x: 500},
        hidden: {opacity: 0, x: -100},
    }

    return (
        <motion.ul
            id={"portfolio"}
            initial="hidden"
            animate="visible"
            variants={list}
        >
            <motion.li variants={item}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ante nec ante dictum cursus. In
                a pretium augue, elementum venenatis augue. Suspendisse enim nisi, molestie eget sem sed, porta blandit
                nulla. Vestibulum vestibulum vestibulum urna id maximus. Suspendisse ullamcorper odio sit amet lacus
                commodo, non vehicula lacus interdum. Cras tempor, augue nec dapibus pulvinar, felis lectus placerat mi,
                id maximus ipsum turpis vel elit. Morbi pharetra augue ante, sit amet congue sapien sagittis at.
                Vestibulum et ex suscipit, tempor tortor in, aliquam est. Proin ac accumsan sapien. Aliquam sed viverra
                turpis. Ut scelerisque turpis quis eros pulvinar, et rhoncus justo tempor. Phasellus tincidunt ac dolor
                ac eleifend. Proin eu dignissim tortor. Proin mi dui, maximus quis lacinia et, suscipit sed mi. Aenean
                ut porttitor massa.
            </motion.li>
            <motion.li variants={item}>
                Quisque sagittis venenatis egestas. Nullam interdum, enim nec aliquam hendrerit, purus arcu vestibulum
                erat, a feugiat nibh lorem ut arcu. Praesent in risus mi. Vivamus orci magna, blandit et ornare quis,
                ornare at ligula. Nulla ex est, commodo a arcu et, semper maximus justo. Cras quis vestibulum orci, quis
                eleifend neque. Aenean ornare sapien nibh, ac mollis nunc semper at. Etiam luctus urna et porta maximus.
                In maximus lectus lacinia convallis ultrices. Nulla vel massa urna. Integer consectetur convallis neque,
                vitae eleifend odio efficitur at. Mauris vel gravida tortor. Duis luctus fringilla tincidunt.
            </motion.li>
            <motion.li variants={item}>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In et leo
                tincidunt, scelerisque diam ac, pretium velit. Praesent ut ligula interdum, elementum leo ac, aliquet
                felis. Vivamus mollis euismod accumsan. Aliquam venenatis erat sed arcu efficitur, quis scelerisque urna
                ultricies. Praesent elementum aliquet convallis. Integer faucibus velit ligula, a iaculis lorem porta
                non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Quisque laoreet augue neque. Nulla hendrerit tempus nibh, id pulvinar sem laoreet non. Vestibulum est
                sem, accumsan id purus at, volutpat sodales lectus. Sed congue odio pulvinar aliquam vestibulum. Aliquam
                et velit id quam faucibus bibendum. Maecenas eu mi non sapien imperdiet consectetur id ornare elit.
                Aliquam vulputate, nulla et aliquet tempus, diam justo aliquet erat, eget fermentum diam mauris et orci.
                Mauris ac convallis diam, id semper risus.
            </motion.li>
        </motion.ul>
    )
};
export default Portfolio;