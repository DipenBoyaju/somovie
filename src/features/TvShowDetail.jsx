import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FaBookmark, FaCalendarWeek, FaClock, FaClosedCaptioning, FaMicrophone } from "react-icons/fa";
import { useGetTvShowByIdQuery, useGetTvShowCastsQuery } from "../apis/TvShowApi";
import TvShowRecommendation from "./TvShowRecommendation";
import RelatedTvShow from "./RelatedTvShow";
import TvShowCast from "../components/TvShowCast";
import TvPlayer from "../components/TvPlayer";
import { useState } from "react";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";

const TvShowDetail = () => {
  const { id } = useParams();
  const { data } = useGetTvShowByIdQuery(id);
  const credit = useGetTvShowCastsQuery(id)
  const [castSlice, setCastSlice] = useState(10)
  console.log(id);

  const handleCast = () => {
    setCastSlice((prev) => (prev === 10 ? 100 : 10))
  }

  console.log(id);
  return (
    <section>
      <div className="">
        {
          data &&
          <div className="">
            <div className="relative">
              <div className="relative">
                <span className="absolute z-30 bg-gradient-to-b from-[#0000004a] to-[#0e2b2be1] h-full w-full"></span>
                <img src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path || data.belongs_to_collection.backdrop_path}`} className='relative w-full h-full z-20' alt="" />
              </div>
              <div className="relative lg:absolute grid lg:grid-cols-4 gap-10 z-40 -mt-36 lg:mt-0 lg:top-24 lg:px-16 px-4 py-10 lg:py-0">
                <div className="w-[30vw] lg:w-auto lg:col-span-1 flex lg:flex-col gap-5 lg:gap-0">
                  <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`} alt="" className="rounded-lg w-full" />
                  <div className="flex flex-col gap-2 py-2 mt-28 lg:mt-0">
                    <div className="flex justify-between gap-2 items-center text-center">
                      <button className=" w-1/2 text-center flex justify-center items-center gap-2 px-4 py-1 rounded-sm bg-green-600 text-white"><BiSolidLike /> Like</button>
                      <button className="flex w-1/2 col-span-1 items-center justify-center gap-2 px-4 py-1 rounded-sm bg-zinc-700 text-white"><BiSolidDislike /> Dislike</button>
                    </div>
                    <div className="lg:hidden bg-yellow-400 flex items-center justify-center py-1 gap-3"><FaBookmark /> Add to Watchlist</div>
                  </div>
                </div>
                <div className="space-y-2 col-span-3">
                  <div className=" flex justify-between items-center">
                    <div className="">
                      <h1 className="text-5xl font-semibold text-[#FFCB9A]">{data.original_name}</h1>
                      <h6 className="text-lg text-[#6effd8]">{data.original_name}</h6>
                    </div>
                    <div className="hidden px-6 lg:flex bg-[#f1ee07] items-center justify-center py-2 rounded-sm backdrop-blur-3xl gap-3"><FaBookmark /> Add to Watchlist</div>
                  </div>

                  <div className="flex gap-2 lg:gap-10 bg-[#ffcb9aab] pl-6 rounded-lg py-2">
                    <div className="flex items-center flex-row gap-4 lg:gap-5 text-white">
                      <p>{data.vote_average.toFixed(2)}</p>
                      <div className="">
                        <ReactStars
                          count={5}
                          size={14}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="#ffd700"
                          edit={false}
                          value={data.vote_average / 2}
                        />
                        <p className="text-sm">({data.vote_average} from {data.vote_count} users)</p>
                      </div>
                      <hr className="border-r border-zinc-300 h-full" />
                      <div className="flex gap-2 lg:gap-6 flex-col lg:flex-row items-center">
                        <p className="flex gap-1 items-center bg-purple-600 p-1 rounded-md"><FaClosedCaptioning />{data.number_of_seasons} </p>
                        <p className="flex gap-1 items-center bg-cyan-600 p-1 rounded-md"><FaMicrophone /> {data.number_of_episodes} </p>
                        <p className="flex gap-1 items-center"><FaCalendarWeek /> {data.first_air_date}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#D1E8E2] py-2">{data.overview}</p>
                  <div className="">
                    <p className="text-md text-[#b8b8b8] flex gap-1">Genre :
                      <span className="flex gap-1 text-white">{data.genres.map((item, index) => {
                        return <p key={item.id}>{item.name}{index < data.genres.length - 1 ? ',' : ''} </p>
                      })}</span>
                    </p>
                    <p className="text-md text-[#b8b8b8] flex gap-1">Country :
                      <span className="flex gap-1 text-white">{data.production_countries.map((item, index) => {
                        return <p key={item.id}>{item.name}{index < data.production_countries.length - 1 ? ',' : ''} </p>
                      })}</span>
                    </p>
                    <p className="text-md text-[#b8b8b8] flex flex-1 gap-2">Casts:
                      <span className="flex flex-wrap text-white">{credit?.data?.cast?.slice(0, castSlice).map((item, index) => {
                        return <p key={item.id}>{item?.name}{index < credit.data.cast.length - 1 ? ',' : ''} </p>
                      })}</span>
                    </p>
                    <span onClick={handleCast} className="cursor-pointer text-[#24b388]">{castSlice === 10 ? 'view more' : 'view less'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <div className="lg:px-16 hidden lg:block px-4 lg:py-4 py-2">
        <TvShowCast tvId={id} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-9 px-4 py-2 lg:py-10 lg:px-16 gap-8">
        <div className="lg:col-span-6 h-[200px] lg:h-[450px] w-full">
          <TvPlayer tvId={id} />
        </div>
        <div className="lg:col-span-3 w-full">
          <RelatedTvShow tvId={id} />
        </div>
      </div>
      <TvShowRecommendation tvId={id} />
    </section>
  )
}
export default TvShowDetail