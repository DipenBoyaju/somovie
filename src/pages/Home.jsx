import React from "react"
import Hero from "../components/Hero"
import TrendingMovies from "../features/TrendingMovies"
import PopularMovies from "../components/PopularMovies"

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <TrendingMovies />
      <PopularMovies />
    </React.Fragment>
  )
}
export default Home