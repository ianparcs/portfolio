import React from 'react';
import SwiperCore, {A11y, Autoplay, EffectCube, Navigation, Pagination, Scrollbar} from 'swiper';

import {Container} from "react-bootstrap";


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube]);

const PageNotFound = () => {

    return (
        <Container className="w-100 pl-3 pr-3" fluid="true">
            <p>Page Not found</p>
        </Container>
    )
};
export default PageNotFound;
