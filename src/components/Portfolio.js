import React from 'react';
import "../assets/css/portfolio.css"
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Paiwi_1 from "../assets/img/portfolio/paiwi/paiwi-1.png"
import Paiwi_3 from "../assets/img/portfolio/paiwi/paiwi-3.png"
import CHITS_1 from "../assets/img/portfolio/chits/chits-1.png"
import CHITS_2 from "../assets/img/portfolio/chits/chits-2.png"
import CHITS_3 from "../assets/img/portfolio/chits/chits-3.png"

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Portfolio = () => {

    return (
        <div id={"portfolio"}>
            <div id={"header-container"}>

            </div>
            <div id={"gallery-container"}>
                <div>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        showButton={false}
                        pagination={{clickable: true}}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide><img className={"gallery-content"} src={Paiwi_1}/></SwiperSlide>
                        <SwiperSlide><img className={"gallery-content"} src={Paiwi_3}/></SwiperSlide>
                        <SwiperSlide><img className={"gallery-content"} src={CHITS_1}/></SwiperSlide>
                        <SwiperSlide><img className={"gallery-content"} src={CHITS_2}/></SwiperSlide>
                        <SwiperSlide><img className={"gallery-content"} src={CHITS_3}/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
};
export default Portfolio;