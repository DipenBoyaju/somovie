import { useGetMoviesByLatestQuery } from "../apis/MovieApi"
import MovieCard from "../components/MovieCard";

const Latest = () => {

  const { data } = useGetMoviesByLatestQuery();
  return (
    <section className="py-10 lg:px-12 px-4">
      <div className="flex gap-8 items-center">
        <h1 className="text-2xl lg:text-3xl font-semibold text-[#FFCB9A]">Latest Movies</h1>
      </div>
      <div className="py-4 grid grid-cols-2 lg:grid-cols-6 gap-6">
        {
          data && data.results?.slice(0, 16).map((item) => {
            return <MovieCard key={item.id} item={item} />

          })
        }
      </div>

    </section>
  )
}
export default Latest