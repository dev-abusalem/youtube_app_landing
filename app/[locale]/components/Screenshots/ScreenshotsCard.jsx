// import required modules
import { Pagination, Navigation } from "swiper/modules";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../../public/images/01.png";
import image2 from "../../../../public/images/02.png";
import image3 from "../../../../public/images/03.png";
import image4 from "../../../../public/images/04.png";
import image5 from "../../../../public/images/05.png";
import image6 from "../../../../public/images/06.png";
import Image from "next/image";

export default function ScreenshotsCard() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <Image src={image1} alt="image1" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} alt="image2" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image3} alt="image3" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image4} alt="image4" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image5} alt="image5" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image6} alt="image6" className="rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
