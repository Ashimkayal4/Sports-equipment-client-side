import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider2 from '../assets/istockphoto-184141809-612x612.jpg'
import slider1 from '../assets/360_F_363443852_32aPQw2o5ogHyUnO5svdf4MpQfxTNXcH.jpg'
import slider3 from '../assets/sports-equipment-assorted-including-basketball-soccer-ball-tennis-ball-baseball-tennis-racket-football-birdie-badminton-racket-43938756.webp'

const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                <SwiperSlide>
                    <div className="lg:flex gap-2 lg:h-[400px]">
                        <div className="lg:w-1/2">
                            <img src={slider3} className="w-full rounded-md" alt="" />
                        </div>
                        <div className="lg:w-1/2 flex flex-col justify-center items-center">
                            <h1 className="text-2xl">We give you the best product in the world</h1>
                            <h1 className="text-xl mb-10">Get 20% discount</h1>
                            <button className="btn w-60 btn-primary">Purchase our product</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="lg:flex gap-2 h-[400px]">
                        <div className="lg:w-1/2">
                            <img src={slider1} className="w-full rounded-md" alt="" />
                        </div>
                        <div className="lg:w-1/2 flex flex-col justify-center items-center">
                            <h1 className="text-2xl">We give you the best product in the world</h1>
                            <h1 className="text-xl mb-10">Get 20% discount</h1>
                            <button className="btn w-60 btn-primary">Purchase our product</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="lg:flex gap-2 h-[400px]">
                        <div className="lg:w-1/2">
                            <img src={slider2} className="w-full rounded-md" alt="" />
                        </div>
                        <div className=" lg:w-1/2 flex flex-col justify-center items-center">
                            <h1 className="text-2xl">We give you the best product in the world</h1>
                            <h1 className="text-xl mb-10">Get 20% discount</h1>
                            <button className="btn w-60 btn-primary">Purchase our product</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;