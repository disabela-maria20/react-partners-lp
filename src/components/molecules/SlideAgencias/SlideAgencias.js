import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LazyLoad from "react-lazyload"

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import SwiperCore, { Pagination, Navigation } from 'swiper';
import Fade from 'react-reveal/Fade';

SwiperCore.use([Pagination, Navigation]);

const SlideAgencias = () => {
    return (
        <div id="agencias">
            <Fade bottom>
                <section className="bg-Blue-800">
                    <div className="container m-auto px-15">
                        <h2 className="text-white  text-26 sm:text-31 sm:leading-31 lg:text-38 xl:text-45 font-bold text-center pt-79">
                            Conheça nossas agências
                        </h2>
                        <div className="py-38 md:py-79 marcas">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                pagination={{
                                    clickable: true
                                }}
                                navigation={true}
                                className="mySwiper hidden md:block">
                                <SwiperSlide>
                                    <LazyLoad>
                                        <img src="/img/marcas-2.png" alt="marcas parceiras"  />
                                    </LazyLoad>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <LazyLoad>
                                        <img src="/img/marcas.png" alt="marcas parceiras" />
                                    </LazyLoad>
                                </SwiperSlide>
                                {/* <div className="flex justify-center relative bottom-8">
                                    <div className="swiper-button-prev-unique mr-164"></div>
                                    <div className="swiper-button-next-unique"></div>
                                </div> */}
                            </Swiper>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                pagination={{
                                    clickable: true
                                }}
                                breakpoints={{
                                    "1024": {
                                        navigation: true,
                                    },
                                    "515": {
                                        navigation: false,
                                    }
                                }}
                                className="mySwiper block md:hidden">
                                <SwiperSlide>
                                    <LazyLoad>
                                        <img src="/img/marcar-mobile-01.png" alt="marcas parceiras" />
                                    </LazyLoad>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <LazyLoad>
                                        <img src="/img/marcar-mobile-02.png" alt="marcas parceiras" />
                                    </LazyLoad>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <LazyLoad>
                                        <img src="/img/marcar-mobile-03.png" alt="marcas parceiras" />
                                    </LazyLoad>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>
            </Fade>
        </div>

    )
}

export default SlideAgencias

