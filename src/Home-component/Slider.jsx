import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam voluptatem voluptate totam eius voluptatibus, cupiditate exercitationem distinctio mollitia corrupti voluptatum quia officia non minima beatae, ut quasi fugiat? Distinctio, reiciendis!
                </SwiperSlide>
                <SwiperSlide>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolorem praesentium molestias sunt sit animi eaque consequatur, eveniet, illum esse dolorum voluptatibus unde omnis quos vel, tempore delectus corporis ipsa?
                </SwiperSlide>
                <SwiperSlide>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita, rem cum consequatur libero quis magni doloremque tempore reiciendis mollitia, ratione est enim vel, facere aliquid? Aliquam facere repudiandae distinctio.
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;