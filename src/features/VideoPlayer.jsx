import { useGetMovieByIdQuery, useGetMovieVideoQuery } from "../apis/MovieApi"

const VideoPlayer = ({ movieId }) => {

  const { data } = useGetMovieVideoQuery(movieId)
  console.log(data);
  return (
    <div>
      <div className="h-[200px] lg:h-[450px] w-full bg-zinc-800">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${data?.results[5]?.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
export default VideoPlayer