import { useGetSimilarTvShowQuery } from "../apis/TvShowApi"
import TvShowCard from "../components/TvShowCard"

const RelatedTvShow = ({ tvId }) => {
  const { data } = useGetSimilarTvShowQuery(tvId)
  return (
    <div className="">
      <h1 className="text-2xl text-[#FFCB9A]">Related Movies</h1>
      <hr className="border-b border-zinc-800 my-2" />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-2 w-full">
        {
          data && data.results.slice(0, 6).map((item) => {
            return <TvShowCard item={item} key={item.id} />
          })
        }
      </div>
    </div>

  )
}
export default RelatedTvShow