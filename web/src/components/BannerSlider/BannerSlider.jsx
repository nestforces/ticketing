import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link, Image } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BannerSlider() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
      style={{
        height: "fit-content",
        margin: "0 auto",
        maxWidth: "1220px",
        gridTemplateRows: "1fr",
        position: "relative",
      }}
    >
      <Link>
        <SwiperSlide>
          <Image src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1694850845_x0hYtf.jpg" />
        </SwiperSlide>
      </Link>
      <Link>
        <SwiperSlide>
          <Image src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1696357756_Z9XJhc.jpg" />
        </SwiperSlide>
      </Link>
      <Link>
        <SwiperSlide>
          <Image src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1690260495_PraZyu.jpg" />
        </SwiperSlide>
      </Link>
      <Link>
        <SwiperSlide>
          <Image src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1693812387_AhirJz.jpg" />
        </SwiperSlide>
      </Link>
      <Link>
        <SwiperSlide>
          <Image src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1690530867_sahQv9.jpg" />
        </SwiperSlide>
      </Link>
    </Swiper>
  );
}
