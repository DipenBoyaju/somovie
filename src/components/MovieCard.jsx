import { useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom"


const MovieDetail = ({ item }) => {
  return (
    <div className="absolute top-20 left-32 h-[160px] overflow-hidden w-[300px] z-10 rounded-md">
      <div className="relative">
        <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`} alt="" className=" z-10" />
        <div className="absolute p-4 backdrop-blur-3xl bg-[#00000060] w-full top-0 h-full">
          <h1 className="text-white">{item.title}</h1>
          <div className="flex gap-4 text-sm items-center py-2">
            <p className="text-yellow-500">{item.vote_average}/10</p>
            <p className="text-zinc-400">{new Date(item.release_date).getFullYear()}</p>
            <span className=" bg-yellow-500 p-[1px] leading-0 rounded-sm text-[12px]">HD</span>
          </div>
          <p className="text-zinc-400 font-light text-sm">{item.overview.slice(0, 100)}...</p>
        </div>
      </div>
    </div>
  );
}

const MovieCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const nav = useNavigate();
  return (
    <div>
      <div className="">
        <div className="group relative cursor-pointer" onClick={() => nav(`/movies/${item.id}`)} >
          {isHovered && <MovieDetail item={item} />}
          <span className="bg-[#023f2b52] hidden h-full w-full absolute justify-center group-hover:flex transition-all duration-700 items-center" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <AiOutlinePlayCircle className="text-6xl transition-all duration-500 text-white font-light" />
          </span>
          <span className='absolute bg-[#D1E8E2] text-[#2C3531] font-semibold px-1 rounded-sm text-sm right-0 top-2 mr-2'>HD</span>
          {
            item.poster_path ?
              <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path || item?.belongs_to_collection?.poster_path}`} alt="" className='w-full rounded-lg' /> :
              <div className="text-white w-full h-[235px] lg:h-[285px] items-center flex justify-center ">
                <p className="font-[orbitron] text-[#FFCB9A]"><span className="text-[#D1E8E2]">So</span>M<span className="">o</span>v<span className="text-[#FFCB9A]">ie</span>s</p>
              </div>
          }
          <span className='border border-[#FFCB9A] p-1 px-2 text-sm rounded-sm absolute bottom-0 text-[#FFCB9A] mr-2 mb-2 right-0 bg-[#ffffff20] backdrop-blur-3xl'>Movie</span>
        </div>
        <div className="space-y-2">
          <p className='font-semibold pt-2 text-[#D1E8E2]'>{item.title.length > 30 ? `${item.title.slice(0, 22)}...` : `${item.title}`}</p>
          <p className='text-[#cfcfcf] text-sm'>{new Date(item.release_date).getFullYear()} | 198m</p>
        </div>
      </div>
    </div>
  )
}
export default MovieCard