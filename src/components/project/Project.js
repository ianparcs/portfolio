import React from 'react';
import Work from "../gui/Work";
import Container from "react-bootstrap/Container";

import Inventory_1 from "../../assets/img/works/inventory/inventory_1.png"
import Inventory_2 from "../../assets/img/works/inventory/inventory_2.png"
import Inventory_3 from "../../assets/img/works/inventory/inventory_3.png"
import Portfolio_1 from "../../assets/img/works/portfolio/portfolio_1.png"
import Portfolio_2 from "../../assets/img/works/portfolio/portfolio_2.png"
import Paiwi_1 from "../../assets/img/works/paiwi/paiwi-1.png"
import Paiwi_2 from "../../assets/img/works/paiwi/paiwi-2.png"
import CHITS_1 from "../../assets/img/works/chits/chits-1.png"
import CHITS_2 from "../../assets/img/works/chits/chits-3.png"
import Three from "../../assets/img/works/three.svg"
import Four from "../../assets/img/works/four.svg"
import Two from "../../assets/img/works/two.svg"
import One from "../../assets/img/works/one.svg"
import "../../assets/css/projects.css"

const Project = () => {

    const paiwiDescription = <p className="pt-4"><a
        href="https://play.google.com/store/apps/details?id=ph.codegum.paiwi_mobile">Pa-Iwi
        Mobile </a> is an online android application used by investors of agri-business
        enthusiast to invest their money
        to livestock farming. Tracks real-time investment assets, status and profit of returns.
        (No longer supported or maintained)</p>;

    const chitsDescription = <p className="pt-4">
        CHITS is an electronic medical record system that reduces patient waiting time and improves
        monitoring of patient care through efficient data encoding and records retrieval</p>;

    const posDescription = <p className="pt-4">
        <a href="https://github.com/ianparcs/inventory-sales-system">Inventory Sales System</a>
        &nbsp; is used by retailers to process customer sales, track product
        or stock levels. It has tools to ring sales, count inventory,
        and provide basic reports for sales and product stocks.</p>;

    const portfolioDescription = <p className="pt-4">Personal site showcasing my projects and online resume.</p>;

    return (
        <Container>
            <Work title="Community Health Information Tracking System (CHITS)"
                  skills={<p>Skills: Java, Spring MVC, Hibernate,MySQL and Ant.</p>}
                  content={chitsDescription}
                  images={[{path: CHITS_1, alt: "Chits_1"}, {path: CHITS_2, alt: "CHITS_2"}]}
                  workNumber={One}
                  direction="-100%"/>
            <Work title="Pa-Iwi Mobile"
                  skills={<p> Skills: Java, Android, Amazon S3, Firebase and Rest API.</p>}
                  content={paiwiDescription}
                  images={[{path: Paiwi_1, alt: "Paiwi mobile"}, {path: Paiwi_2, alt: "Paiwi mobile"}]}
                  workNumber={Two}
                  direction="100%"/>
            <Work title="RM Home Tiles"
                  skills={<p>Skills: Java, JavaFX, Spring MVC, Hibernate, MySQL and Maven.</p>}
                  content={posDescription}
                  images={[{path: Inventory_3, alt: "Inventory_3"}, {
                      path: Inventory_1,
                      alt: "Inventory_1"
                  }, {path: Inventory_2, alt: "Inventory_2"},]}
                  workNumber={Three}
                  direction="-100%"/>
            <Work title="Personal Website"
                  skills={<p>Skills: HTML5, CSS3, ReactJS and NodeJS.</p>}
                  content={portfolioDescription}
                  images={[{path: Portfolio_2, alt: "Portfolio_2"}, {path: Portfolio_1, alt: "Portfolio_1"}]}
                  workNumber={Four}
                  direction="100%"/>
        </Container>
    )
};

export default Project;
