import { useGetMovieCastsQuery } from "../apis/MovieApi"

const Casts = ({ movieId }) => {

  const { data } = useGetMovieCastsQuery({ movieId })
  console.log(movieId);
  return (
    <div>Casts</div>
  )
}
export default Casts