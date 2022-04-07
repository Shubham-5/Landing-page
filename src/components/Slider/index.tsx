

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,Pagination } from "swiper";

const Slider = () => {
  return (
    <div className="swiper-section py-5">
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        autoplay= {{
          delay:3000
        }}
        loopFillGroupWithBlank={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Pagination, Autoplay]}
        className="mySwiper container"
      >
        <SwiperSlide className="text-center">
          <div className="slide_container">
            <div className="pt-5 pb-4">
              <img
                className="slider-img border border-5 border-white shadow-lg"
                src="https://untree.co/demos/impact/images/person_1.jpg"
                alt=""
              />
            </div>
            <h6 className="fw-bold">Maria Jones</h6>
            <p>Customer</p>
            <p className="fst-italic quote">
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" text-center">
          <div className="slide_container">
            <div className="pt-5 pb-4">
              <img
                className="slider-img border border-5 border-white shadow-lg"
                src="https://untree.co/demos/impact/images/person_2.jpg"
                alt=""
              />
            </div>
            <h6 className="fw-bold">Maria Jones</h6>
            <p>Customer</p>
            <p className="fst-italic quote p-3">
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="text-center">
          <div className="slide_container">
            <div className="pt-5 pb-4">
              <img
                className="slider-img border border-5 border-white shadow-lg"
                src="https://untree.co/demos/impact/images/person_3.jpg"
                alt=""
              />
            </div>

            <h6 className="fw-bold">Maria Jones</h6>
            <p>Customer</p>
            <p className="fst-italic quote pb-5">
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

