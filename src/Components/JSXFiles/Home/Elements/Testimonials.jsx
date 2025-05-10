// TestimonialsPage.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../../CSSFile/HomeCSS/Testimonials.css";
import image9 from '../../../../assets/Images/inside/outside7.jpg'




const Testimonials = () => {
  const testimonials = [
    {image: image9, name: "Raj", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    {image: image9, name: "Simran", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    {image: image9, name: "Amit", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    {image: image9, name: "Neha", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    {image: image9, name: "Vikram", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    {image: image9, name: "Pooja", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  ];

  const latestTestimonials = testimonials.slice(-5).reverse();

  return (
    <div data-aos="zoom-in" className="testimonial-wrapper">
      <h2 className="testimonial-heading"><span>Testimonials</span></h2>
      <Swiper
        modules={[ Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
      >
        {latestTestimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="testimonial-image-box"><div className="testimonial-image"><img src={testimonial.image} /></div></div>
              <p className="testimonial-message">“{testimonial.message}”</p>
              <p className="testimonial-name">— {testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
