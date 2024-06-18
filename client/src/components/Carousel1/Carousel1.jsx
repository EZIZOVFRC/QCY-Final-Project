import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Carousel.scss'
const slides = [
  {
    title: "1 Series",
    image: "https://i.pinimg.com/236x/b0/da/7f/b0da7f3ec947241af95d40d802b96909.jpg", 
    link: "https://example.com/1", 
  },
  {
    title: "2 Series",
    image: "https://t4.ftcdn.net/jpg/05/07/73/89/360_F_507738905_ZTp0WkLIGhdPE13bcFq89yt876FwVgAt.jpg",
    link: "https://example.com/2"
  },
  {
    title: "1 Series",
    image: "https://i.pinimg.com/236x/b0/da/7f/b0da7f3ec947241af95d40d802b96909.jpg", 
    link: "https://example.com/1", 
  },

];

export const Carousel1 = () => {
  return (
    <section className="page carousel-1-page">
      <Swiper
        grabCursor
        centeredSlides
        slidesPerView={2}
        effect="coverflow"
        loop
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        modules={[Pagination, EffectCoverflow]}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.title}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div>
              <div>
                <h2>{slide.title}</h2>
                {slide.link && <a href={slide.link}>explore</a>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
