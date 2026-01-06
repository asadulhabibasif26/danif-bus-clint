import React, { use } from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const Reviews = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);

  return (
    <div className="my-24">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-center">Reviews</h3>
        <p className="my-10">
          Thousands of travelers rely on us for a smooth and hassle-free bus ticket booking experience. Read what our passengers say about their journey with us.
        </p>
      </div>
      <div>
        <Swiper
         loop={true}
         effect="coverflow"
         grabCursor={true}
         centeredSlides={true}
         slidesPerView={3}
         coverflowEffect={{
          rotate:30,
          stretch:'40%',
          depth:200,
          modifier:1,
          scale:0.75,
          slideShadows:true,
         }}
         autoplay={{
          delay:1000,
          disableOnInteraction:false,
         }}
         pagination={true}
         modules={[EffectCoverflow , Pagination , Autoplay]}
         className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
