import { useGetMovieRecommendationQuery } from "../apis/MovieApi"
import MovieCard from "../components/MovieCard";

const MovieRecommendation = ({ movieId }) => {

  const { data } = useGetMovieRecommendationQuery(movieId);

  return (
    <div className="px-4 py-4 pb-20 lg:py-5 lg:px-16">
      <div className="">
        <h1 className="text-2xl lg:text-4xl font-normal lg:font-semibold py-6 text-[#FFCB9A]">You may also like</h1>
      </div>
      <div className="py-4 grid lg:grid-cols-6 grid-cols-2 md:grid-cols-4 xs:grid-col-1 gap-4">
        {
          data && data?.results?.slice(0, 12).map((item) => {
            return <MovieCard key={item.id} item={item} />
          })
        }
      </div>
    </div>
  )
}
export default MovieRecommendation