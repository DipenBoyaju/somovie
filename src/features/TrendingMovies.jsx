import { Swiper, SwiperSlide } from "swiper/react";
import { useGetMoviesByTrendingQuery } from "../apis/MovieApi"
import TrendingCard from "../components/TrendingCard";
import { A11y, Controller, Navigation, Pagination, Scrollbar } from "swiper/modules";


const TrendingMovies = () => {

  const data = useGetMoviesByTrendingQuery();

  return (
    <section className="py-10 lg:px-12 px-4">
      <div className="pb-4">
        <h1 className="text-2xl lg;text-3xl font-semibold text-[#FFCB9A]">Trending</h1>
      </div>
      <div className="">
        <Swiper className="grid grid-cols-2 lg:grid-cols-7 gap-4 py-6" modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
          spaceBetween={20}
          slidesPerView={7}
          breakpoints={{
            280: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            480: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}>

          {
            data && data?.data?.results?.slice(0, 10).map((item, index) => {
              return <SwiperSlide key={item.id}>
                <TrendingCard item={item} index={index + 1} />
              </SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </section>
  )
}
export default TrendingMovies