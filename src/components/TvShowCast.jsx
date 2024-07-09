import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Controller, Navigation, Pagination, Scrollbar } from "swiper/modules"
import CardCast from "./CardCast"
import { useGetTvShowCastsQuery } from "../apis/TvShowApi"

const TvShowCast = ({ tvId }) => {
  const { data } = useGetTvShowCastsQuery(tvId)

  return (
    <div>
      <h1 className="text-2xl lg:text-3xl font-normal lg:font-semibold pb-4 text-[#FFCB9A]">Casts and Crews</h1>
      <Swiper className="grid lg:grid-cols-8" modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        spaceBetween={20}
        slidesPerView={9}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {
          data && data.cast.map((item) => {
            return <SwiperSlide key={item.id}>
              <CardCast item={item} />
            </SwiperSlide>
          })
        }
      </Swiper>
    </div >
  )
}
export default TvShowCast