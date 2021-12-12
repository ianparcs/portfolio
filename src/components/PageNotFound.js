import React from 'react';
import SwiperCore, {A11y, Autoplay, EffectCube, Navigation, Pagination, Scrollbar} from 'swiper';

import "../../assets/css/projects.css"
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import {Container} from "react-bootstrap";

import 'swiper/components/effect-cube/effect-cube.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube]);

const PageNotFound = () => {

    return (
        <Container className="w-100 pl-3 pr-3" fluid="true">
            <p>Page Not found</p>
        </Container>
    )
};
export default PageNotFound;
