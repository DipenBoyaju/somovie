import { useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom"
import TvHoverCard from "./TvHoverCard";


const TvShowCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const nav = useNavigate();
  return (
    <div>
      <div className="">
        <div className="group relative cursor-pointer" onClick={() => nav(`/tvshow/${item.id}`)} >
          {isHovered && <TvHoverCard item={item} />}
          <span className="bg-[#023f2b52] hidden h-full w-full absolute justify-center group-hover:flex transition-all duration-700 items-center" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <AiOutlinePlayCircle className="text-6xl transition-all duration-500 text-white font-light" />
          </span>
          <span className='absolute bg-[#D1E8E2] text-[#2C3531] font-semibold px-1 rounded-sm text-sm right-0 top-2 mr-2'>HD</span>
          {
            item.poster_path ?
              <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`} alt="" className='w-full rounded-lg' /> :
              <div className="text-white w-full h-[235px] lg:h-[285px] items-center flex justify-center ">
                <p className="font-[orbitron] text-[#FFCB9A]"><span className="text-[#D1E8E2]">So</span>M<span className="">o</span>v<span className="text-[#FFCB9A]">ie</span>s</p>
              </div>
          }
          <span className='border border-[#FFCB9A] p-1 px-2 text-sm rounded-sm absolute bottom-0 text-[#FFCB9A] mr-2 mb-2 right-0 bg-[#ffffff20] backdrop-blur-3xl capitalize'>{item.media_type}</span>
        </div>
        <div className="space-y-2">
          <p className='font-semibold pt-2 text-[#D1E8E2]'>{item?.name.length > 30 ? `${item.name.slice(0, 22)}...` : `${item.name}`}</p>
          <p className='text-[#cfcfcf] text-sm'>{new Date(item.release_date).getFullYear()} | 198m</p>
        </div>
      </div>
    </div>
  )
}
export default TvShowCard