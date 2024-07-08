// import { useNavigate } from "react-router-dom";

const TvHoverCard = ({ item }) => {
  return (
    <div className="absolute top-20 left-32 h-[160px] overflow-hidden w-[300px] z-10 rounded-md">
      <div className="relative">
        <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`} alt="" className=" z-10" />
        <div className="absolute p-4 backdrop-blur-3xl bg-[#00000060] w-full top-0 h-full">
          <h1 className="text-white">{item.name}</h1>
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
export default TvHoverCard