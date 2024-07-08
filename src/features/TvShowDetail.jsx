import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FaCalendarWeek, FaClock } from "react-icons/fa";
import { useGetTvShowByIdQuery } from "../apis/TvShowApi";
import TvShowRecommendation from "./TvShowRecommendation";

const TvShowDetail = () => {
  const { id } = useParams();
  const { data } = useGetTvShowByIdQuery(id);
  const hrs = Math.floor((data?.runtime / 60));
  const mins = data?.runtime - (60 * hrs);

  console.log(id);
  return (
    <section>
      <div className="">
        <img src="" alt="" />
      </div>
      <div className="">
        {
          data &&
          <div className="">
            <div className="relative">
              <span className="absolute z-30 bg-gradient-to-b from-[#0000004a] to-[#0e2b2be1] h-full w-full"></span>
              <img src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}`} className='relative w-full h-full z-20' alt="" />
              <div className="absolute grid grid-cols-4 gap-10 z-40 top-20 px-16">
                <div className="row-span-1">
                  <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`} alt="" className="rounded-lg w-full" />
                </div>
                <div className="space-y-2 col-span-3">
                  <h1 className="text-5xl font-semibold text-[#FFCB9A]">{data.original_name}</h1>
                  <h6 className="text-lg text-[#6effd8]">{data.original_name}</h6>
                  <div className="flex gap-10 bg-[#ffcb9aab] pl-6 rounded-lg py-2">
                    <div className="flex items-center flex-row gap-5 text-white">
                      <p>{data.vote_average.toFixed(2)}</p>
                      <div className="">
                        <ReactStars
                          count={5}
                          size={24}
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
                      <div className="flex gap-6 flex-row items-center">
                        <p className="flex gap-1 items-center"><FaClock />{hrs}H {mins}M </p>
                        <p className="flex gap-1 items-center"><FaCalendarWeek /> {data.first_air_date}</p>
                      </div>
                    </div>
                    <p></p>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <div className="grid lg:grid-cols-9 px-4 py-2 lg:py-10 lg:px-16 gap-8">
        <div className="col-span-6 h-[200px] lg:h-[450px] w-full bg-zinc-800"></div>
        <div className="col-span-3 w-full">
          <h1 className="text-2xl text-[#FFCB9A]">Related Movies</h1>
          <hr className="border-b border-zinc-800 my-2" />
        </div>
      </div>
      <TvShowRecommendation tvId={id} />
    </section>
  )
}
export default TvShowDetail