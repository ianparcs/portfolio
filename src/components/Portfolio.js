import React from 'react';
import "../assets/css/portfolio.css"
import {motion} from "framer-motion";
import 'swiper/swiper.scss';
import {Swiper, SwiperSlide} from 'swiper/react';

const Portfolio = () => {
    return (
        <div id={"portfolio"}>
            <div>
                <motion.div>
                    <h1>
                        Portfolio
                        <p className={"linebreak space"}/>
                        <hr className={"linebreak line"}/>
                    </h1>
                </motion.div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    ...
                </Swiper>
            </div>
        </div>
    )
};
export default Portfolio;