import { useGetLatestTvShowQuery } from "../apis/TvShowApi"
import TvShowCard from "../components/TvShowCard"

const LatestTvShow = () => {
  const { data } = useGetLatestTvShowQuery()
  return (
    <section className="py-10 lg:px-12 px-4">
      <div className="flex gap-8 items-center">
        <h1 className="text-2xl lg:text-3xl font-semibold text-[#FFCB9A]">Latest Tv Show</h1>
      </div>
      <div className="py-4 grid grid-cols-2 lg:grid-cols-6 gap-6">
        {
          data && data.results?.slice(0, 16).map((item) => {
            return <TvShowCard key={item.id} item={item} />

          })
        }
      </div>

    </section>
  )
}
export default LatestTvShow