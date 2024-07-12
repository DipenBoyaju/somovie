import { useState } from "react";
import { useGetMoviesByPopularQuery } from "../apis/MovieApi"
import MovieCard from "./MovieCard";
import { FaList, FaPlay } from "react-icons/fa";
import { useGetPopularTvShowQuery } from "../apis/TvShowApi";
import TvShowCard from "./TvShowCard";

const PopularMovies = () => {
  const [catt, setCatt] = useState('Movie');

  const movieQuery = useGetMoviesByPopularQuery();
  const tvshowQuery = useGetPopularTvShowQuery();
  const data = catt === 'Movie' ? movieQuery.data : tvshowQuery.data;

  if (movieQuery.isLoading) {
    return <h1>Loading</h1>
  }
  return (
    <section className="py-10 lg:px-12 px-4">
      <div className="flex gap-8 items-center">
        <h1 className="text-2xl lg:text-3xl font-semibold text-[#FFCB9A]">Popular</h1>
        <div className="flex gap-2">
          <button className={`lg:px-4 lg:py-2 py-1 px-2 rounded-md flex gap-2 items-center ${catt === 'Movie' ? 'bg-yellow-500' : 'bg-white'}`} onClick={() => setCatt('Movie')}><FaPlay /> Movie</button>
          <button className={`lg:px-4 lg:py-2 py-1 px-2 rounded-md flex gap-2 items-center ${catt === 'tvshow' ? 'bg-yellow-500' : 'bg-white'}`} onClick={() => setCatt('tvshow')}><FaList /> Tv Show</button>
        </div>
      </div>
      <div className="py-4 grid grid-cols-2 lg:grid-cols-6 gap-6">
        {
          data && data.results?.slice(0, 16).map((item) => {
            return <>
              {catt === 'Movie' ? <MovieCard key={item.id} item={item} /> : <TvShowCard key={item.id} item={item} />}

            </>

          })
        }
      </div>
    </section>
  )
}
export default PopularMovies