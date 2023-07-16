import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../gui/SectionTitle";
import "./about.css"

const About = React.forwardRef((props, ref) => {
  const contentControl = useAnimation();
  const [headerRef, headerInView] = useInView();
  const [contentRef, contentInView] = useInView();

  const transition = {
    duration: 2,
    ease: "easeInOut"
  };

  const fade = {
    visible: {
      opacity: 1,
      transition: {duration: 1, delay: 1},
    },
    hidden: {
      opacity: 0,
      transition: {duration: 1}
    },
  };

  useEffect(() => {
    const sequence = async () => {
      return await contentControl.start("visible");
    };
    sequence();

  }, [headerInView, contentControl, contentInView]);

  return (
      <Container className="d-flex flex-column justify-content-center w-75 h-100">
        <Row>
          <Col>
            <motion.div
                ref={headerRef}
                animate={contentControl}
                initial="hidden"
                transition={transition}
                variants={fade}>
              <SectionTitle title="About" textColor="text-white"/>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col>
            <motion.p
                className="pb-5 pr-1 pl-1"
                ref={contentRef}
                id="content"
                initial="hidden"
                animate={contentControl}
                transition={transition}
                variants={fade}>
              A passionate Software Developer with a strong
              background in building robust and scalable Web and Mobile
              applications using Java and Scala, I constantly strive to stay
              updated with the latest industry trends and best practices. In my
              free time, I indulge in various activities, including immersing myself in the captivating world of
              video games, delving into thought-provoking books that broaden my
              horizons, embracing new learning opportunities that expand my
              skill set, and reflecting on my personal journey through
              journaling.
            </motion.p>
          </Col>
        </Row>
      </Container>
  );
});
export default About;