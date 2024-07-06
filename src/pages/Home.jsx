import React from "react"
import Hero from "../components/Hero"
import TrendingMovies from "../features/TrendingMovies"
import PopularMovies from "../components/PopularMovies"
import Latest from "../features/Latest"
import LatestTvShow from "../features/LatestTvShow"

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <TrendingMovies />
      <PopularMovies />
      <Latest />
      <LatestTvShow />
    </React.Fragment>
  )
}
export default Home