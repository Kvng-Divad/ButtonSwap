import React from "react";
import "./PaymentSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import icon2 from "../../Assets/naira-black.svg";

const PaymentSlider = () => {
  const slideData = [
    {
      icon: icon2,
      name: "Payment so far",
      description: "Last payment:",
      progress: "0% complete",
    },
    {
      icon: icon2,
      name: "Payment so far",
      description: "Last payment:",
      progress: "0% complete",
    },
    {
      icon: icon2,
      name: "Payment so far",
      description: "Last payment:",
      progress: "0% complete",
    },
    {
      icon: icon2,
      name: "Payment so far",
      description: "Last payment:",
      progress: "0% complete",
    },
    {
      icon: icon2,
      name: "Payment so far",
      description: "Last payment:",
      progress: "0% complete",
    },
    {
      icon: icon2,
      name: "Payment so far",
      description: "Last payment:",
      progress: "0% complete",
    },
  ];
  return (
    <div className="payment-slider">
      <div>
        {slideData.length > 0 ? (
          <Swiper
            className="swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {slideData.map((item, index) => (
              <SwiperSlide key={index} className="swiper-card">
                <p className="p-name">{item.name}</p>

                <div className="grid">
                  <div className="flex">
                    <img src={item.icon} alt="icon" className="p-icon" />
                    <h3 className="">{item.value}</h3>
                  </div>

                  <p className="">{item.description}</p>

                  <button className="">{item.progress}</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <h2></h2>
        )}
      </div>
    </div>
  );
};

export default PaymentSlider;
