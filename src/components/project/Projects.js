import React from 'react';
import SwiperCore, {A11y, Autoplay, EffectCube, Navigation, Pagination, Scrollbar} from 'swiper';

import "../../assets/css/projects.css"
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import {Container, Row} from "react-bootstrap";

import 'swiper/components/effect-cube/effect-cube.scss';
import ColoredLine from "../gui/Line";
import Gcash_2 from "../../assets/img/works/gcash-2.png";
import Gcash_3 from "../../assets/img/works/gcash-3.png";
import Gcash_1 from "../../assets/img/works/gcash-1.png";
import CHITS_1 from "../../assets/img/works/chits-1.png";
import CHITS_2 from "../../assets/img/works/chits-3.png";
import Paiwi_1 from "../../assets/img/works/paiwi-1.png";
import Paiwi_2 from "../../assets/img/works/paiwi-2.png";
import Inventory_3 from "../../assets/img/works/inventory_3.png";
import Inventory_1 from "../../assets/img/works/inventory_1.png";
import Inventory_2 from "../../assets/img/works/inventory_2.png";
import Portfolio_2 from "../../assets/img/works/portfolio_2.png";
import Portfolio_1 from "../../assets/img/works/portfolio_1.png";
import AutoCell_2 from "../../assets/img/works/auto_2.png";
import AutoCell_1 from "../../assets/img/works/auto_1.png";
import AutoCell_3 from "../../assets/img/works/auto_3.png";
import Gol_1 from "../../assets/img/works/gol_1.png";
import Gol_2 from "../../assets/img/works/gol_2.png";
import Gol_3 from "../../assets/img/works/gol_3.png";
import Sort_1 from "../../assets/img/works/sort_1.png";
import Sort_2 from "../../assets/img/works/sort_2.png";
import Sort_3 from "../../assets/img/works/sort_3.png";
import Asteroid_1 from "../../assets/img/works/assroid_3.png";
import Asteroid_2 from "../../assets/img/works/assroid_3.png";
import Asteroid_3 from "../../assets/img/works/assroid_3.png";
import Knight_1 from "../../assets/img/works/knight_1.png";
import Knight_2 from "../../assets/img/works/knight_2.png";
import Knight_3 from "../../assets/img/works/knight_3.png";
import Breakout_1 from "../../assets/img/works/breakout_1.png";
import Breakout_2 from "../../assets/img/works/breakout_2.png";
import Breakout_3 from "../../assets/img/works/breakout_3.png";
import Mandel_1 from "../../assets/img/works/mandel.jpg";
import BSP_1 from "../../assets/img/works/bsp_1.png";
import BSP_2 from "../../assets/img/works/bsp_2.png";

import Snake_1 from "../../assets/img/works/snake_2.png";
import Snake_2 from "../../assets/img/works/snake_2.png";
import Thesis_1 from "../../assets/img/works/thesis_2.png";
import Thesis_2 from "../../assets/img/works/thesis_2.png";

import Space_1 from "../../assets/img/works/space_1.png";
import Space_2 from "../../assets/img/works/space_2.png";
import Space_3 from "../../assets/img/works/space_3.png";
import Robot_1 from "../../assets/img/works/robot_1.png";
import Robot_2 from "../../assets/img/works/robot_2.png";
import Robot_3 from "../../assets/img/works/robot_3.png";

import Triangle_1 from "../../assets/img/works/triangle_1.png";

import CenterView from "../gui/CenterView";
import Footer from "../app/Footer";
import Work from "./Work";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube]);

const Projects = () => {

    const paiwiDescription = <p className="pt-4">
        Pa-Iwi Mobile is an online android application used by investors of agri-business
        enthusiast to invest their money to livestock farming. Tracks real-time investment assets, status and profit of
        returns.
        (</p>;

    const gcashDescription = <p className="pt-4">
        GCash is a mobile money or “e-money” that allows you to pay bills, send or receive money, buy load, shop online,
        book movie tickets, and more with the use of your smartphone.</p>;

    const chitsDescription = <p className="pt-4">
        CHITS is an electronic medical record system that reduces patient waiting time and improves
        monitoring of patient care through efficient data encoding and records retrieval</p>;

    const posDescription = <p className="pt-4">
        <a href="https://github.com/ianparcs/inventory-sales-system">Inventory Sales System</a>
        &nbsp; is used by retailers to process customer sales, track product
        or stock levels. Features tools to ring sales, count inventory,
        and provide basic reports for sales and product stocks.</p>;

    const portfolioDescription = <p className="pt-4">Personal site showcasing my projects and online resume.</p>;

    const autoCellDescription = <p className="pt-4">Visual representation of Wolfram Elementary Cellular Automata from
        rule 0 up to rule 256 decimal</p>;

    const gameOfLifeDesc = <p className="pt-4">The Game of Life, also known simply as Life, is a cellular automaton.
        It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further
        input.</p>;

    const sortAlgoDesc = <p className="pt-4">Visual representation of various sorting algorithm like Binary, Insertion,
        Selection
        and Merge Sort</p>;

    const mandelbrotDesc = <p className="pt-4">The Mandelbrot set is generated by iteration, which means to repeat a
        process over and over again</p>;

    const assroidDesc = <p className="pt-4">A Shoot 'em up type of game and the goal is to destroy asteroids as much as
        possible within
        limited time. Weapons are upgraded by looting power up</p>;

    const bspDesc = <p className="pt-4">A dungeon room generator which utilises Binary Space Algorithm to generate
        pathways and rooms</p>;

    const knightDesc = <p className="pt-4">A 2D Platformer game with graphics of pixels. Playable in Android, Windows
        and Linux</p>;

    const snakeDesc = <p className="pt-4">Snake clone based on classic snake game</p>;

    const thesisDesc = <p className="pt-4">Path Finder which tracks and find path from Point A to Point B. It uses
        A*(Star) Pathfinding algorithm to find the shortest route</p>;

    const breakoutDesc = <p className="pt-4"> Using a single ball, the player must knock down as many bricks as possible
        by using the walls and/or the paddle</p>;

    const robotArenaDesc = <p className="pt-4">A game which you control robots and shoots other robots</p>;

    const spaceMatrixDesc = <p className="pt-4">My first ever game develop in Java</p>;

    const triangleDesc = <p className="pt-4">The Sierpinski triangle a self-similar fractal</p>;

    return (
        <Container className="w-100 pl-3 pr-3" fluid="true">
            <Container>
                <Row className="pt-4 pb-4 pr-4">
                    <h1>Work Projects</h1>
                    <ColoredLine color="white"/>
                </Row>
                <Row>
                    <Work title="GCash Mobile"
                          skills={<p>Skills: Java, Spring Boot, Rest API, Kafka, and Kubernetes.</p>}
                          content={gcashDescription}
                          images={[{path: Gcash_2, alt: "Gcash_1"}, {path: Gcash_3, alt: "Gcash_3"}, {
                              path: Gcash_1,
                              alt: "Gcash_2"
                          }]}
                          workNumber={1}
                          direction="100%"/>
                    <Work title="Health Information Tracking System"
                          skills={<p>Skills: Java, Spring MVC, Hibernate,MySQL and Ant.</p>}
                          content={chitsDescription}
                          images={[{path: CHITS_1, alt: "Chits_1"}, {path: CHITS_2, alt: "CHITS_2"}]}
                          workNumber={2}
                          direction="-100%"/>
                    <Work title="Pa-Iwi Mobile"
                          skills={<p> Skills: Java, Android, Amazon S3, Firebase and Rest API.</p>}
                          content={paiwiDescription}
                          images={[{path: Paiwi_1, alt: "Paiwi mobile"}, {
                              path: Paiwi_2,
                              alt: "Paiwi mobile"
                          }]}
                          workNumber={3}
                          direction="100%"/>
                </Row>
            </Container>
            <Container>
                <Row className="pt-4 pb-4 pr-4">
                    <h1>Personal Projects</h1>
                    <ColoredLine color="white"/>
                </Row>
                <Row>
                    <Work title="RM Home Tiles"
                          skills={<p>Skills: Java, JavaFX, Spring MVC, Hibernate, MySQL and Maven.</p>}
                          content={posDescription}
                          images={[{path: Inventory_3, alt: "Inventory_3"}, {
                              path: Inventory_1,
                              alt: "Inventory_1"
                          }, {path: Inventory_2, alt: "Inventory_2"},]}
                          workNumber={4}
                          direction="-100%"/>
                    <Work title="Portfolio"
                          skills={<p>Skills: HTML5, CSS3, ReactJS and NodeJS.</p>}
                          content={portfolioDescription}
                          images={[{path: Portfolio_2, alt: "Portfolio_2"}, {
                              path: Portfolio_1,
                              alt: "Portfolio_1"
                          }]}
                          workNumber={5}
                          direction="100%"/>
                    <Work title="Elementary Cellular Auomaton"
                          skills={<p>Skills: Java and Libgdx.</p>}
                          content={autoCellDescription}
                          images={[
                              {path: AutoCell_2, alt: "Elementary Automata Cellular"},
                              {path: AutoCell_1, alt: "Elementary Automata Cellular"},
                              {path: AutoCell_3, alt: "Elementary Automata Cellular"},
                          ]}
                          workNumber={5}
                          direction="100%"/>
                </Row>
                <Row>
                    <Work title="Conway's Game of Life"
                          skills={<p>Skills: Java</p>}
                          content={gameOfLifeDesc}
                          images={[
                              {path: Gol_1, alt: "Conway's Game of Life"},
                              {path: Gol_2, alt: "Conway's Game of Life"},
                              {path: Gol_3, alt: "Conway's Game of Life"},
                          ]}
                          direction="-100%"/>
                    <Work title="Sorting Algorithm"
                          skills={<p>Skills: C++ and SFML.</p>}
                          content={sortAlgoDesc}
                          images={[
                              {path: Sort_1, alt: "Sorting Algorithm"},
                              {path: Sort_2, alt: "Sorting Algorithm"},
                              {path: Sort_3, alt: "Sorting Algorithm"},
                          ]}
                          workNumber={5}
                          direction="100%"/>
                    <Work title="Asteroid Shoot 'Em Up"
                          skills={<p>Skills: Java and Libgdx.</p>}
                          content={assroidDesc}
                          images={[
                              {path: Asteroid_1, alt: "Asteroid Shoot 'Em Up"},
                              {path: Asteroid_2, alt: "Asteroid Shoot 'Em Up"},
                              {path: Asteroid_3, alt: "Asteroid Shoot 'Em Up"},
                          ]}
                          workNumber={5}
                          direction="100%"/>
                </Row>
                <Row>
                    <Work title="Mandelbrot Set"
                          skills={<p>Skills: C++ and SFML</p>}
                          content={mandelbrotDesc}
                          images={[
                              {path: Mandel_1, alt: "Mandelbrot Set"}
                          ]}
                          direction="-100%"/>
                    <Work title="Dungeon Room Generator"
                          skills={<p>Skills: Java and Libgdx.</p>}
                          content={bspDesc}
                          images={[
                              {path: BSP_1, alt: "Dungeon Room Generator"},
                              {path: BSP_2, alt: "Dungeon Room Generator"},
                          ]}
                          direction="100%"/>
                    <Work title="Tales of the Fallen Knight"
                          skills={<p>Skills: Java and Libgdx.</p>}
                          content={knightDesc}
                          images={[
                              {path: Knight_1, alt: "2D Platformer Game"},
                              {path: Knight_2, alt: "2D Platformer Game"},
                              {path: Knight_3, alt: "2D Platformer Game"},
                          ]}
                          direction="100%"/>
                </Row>
                <Row>
                    <Work title="Snake Clone"
                          skills={<p>Skills: Java and Libgdx</p>}
                          content={snakeDesc}
                          images={[
                              {path: Snake_2, alt: "Snake Clone"},
                              {path: Snake_1, alt: "Snake Clone"}

                          ]}
                          direction="-100%"/>
                    <Work title="Thesis: Path Finder"
                          skills={<p>Skills: Java, Libgdx and File Parse</p>}
                          content={thesisDesc}
                          images={[
                              {path: Thesis_1, alt: "Thesis: Path Finder"},
                              {path: Thesis_2, alt: "Thesis: Path Finder"},
                          ]}
                          direction="100%"/>
                    <Work title="Breakout Escape Clone"
                          skills={<p>Skills: Java and Libgdx.</p>}
                          content={breakoutDesc}
                          images={[
                              {path: Breakout_1, alt: "Breakout Escape Clone"},
                              {path: Breakout_2, alt: "Breakout Escape Clone"},
                              {path: Breakout_3, alt: "Breakout Escape Clone"},
                          ]}
                          direction="100%"/>
                </Row>
                <Row>
                    <Work title="Robot Arena"
                          skills={<p>Skills: C++ and SFML</p>}
                          content={robotArenaDesc}
                          images={[
                              {path: Robot_1, alt: "Robot Arena"},
                              {path: Robot_2, alt: "Robot Arena"},
                              {path: Robot_3, alt: "Robot Arena"},
                          ]}
                          direction="-100%"/>
                    <Work title="Space Matrix (My First Game)"
                          skills={<p>Skills: Java</p>}
                          content={spaceMatrixDesc}
                          images={[
                              {path: Space_1, alt: "Space Matrix"},
                              {path: Space_2, alt: "Space Matrix"},
                              {path: Space_3, alt: "Space Matrix"},
                          ]}
                          direction="100%"/>
                    <Work title="Sierpiński triangle"
                          skills={<p>Skills: C++ and SFML.</p>}
                          content={triangleDesc}
                          images={[
                              {path: Triangle_1, alt: "Sierpiński triangle"},
                          ]}
                          direction="100%"/>
                </Row>
            </Container>

            <CenterView sectionName="Project" bg="bg-black">
                <Footer fixedPos="sticky-bottom"/>
            </CenterView>
        </Container>
    )
};
export default Projects;
