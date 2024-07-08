import { useNavigate } from "react-router-dom"

const TrendingCard = ({ item, index }) => {
  const nav = useNavigate();
  return (
    <div>
      <div className="relative flex flex-row gap-1 w-full rounded-lg overflow-hidden h-auto" key={item.id} onClick={() => nav(`movies/${item.id}`)}>
        <div className="absolute overflow-hidden left-0 bottom-0 top-0 w-[30px] text-center bg-[#FFCB9A]">
          <span className="absolute left-1 text-lg font-semibold bottom-0 items-center text-center text-[#263006] z-10">{index > 9 ? '' : 0}{index}</span>
          <div className="absolute [writing-mode:sideways-lr] bottom-7">{item.title}</div>
        </div>
        <img className="" src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`} alt="" />
      </div>
    </div>
  )
}
export default TrendingCard