import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useGetMoviesByPopularQuery } from '../apis/MovieApi';
import { BiSolidRightArrow } from 'react-icons/bi';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import { MdDateRange } from 'react-icons/md';
import { IoTime } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const { data } = useGetMoviesByPopularQuery();
  const nav = useNavigate();

  return (
    <div className="slide-container relative w-full">
      <Fade>
        {
          data?.results.slice(0, 5).map((item) => (
            <div className="relative" key={item.id}>
              <span className='absolute w-full h-[100%] bg-gradient-to-b from-[#0000002a] to-[#000000ef] z-30'></span>
              <div className="relative z-20">
                <img src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.backdrop_path}`} className='relative w-full h-full z-20' alt="" />
              </div>
              {console.log(item.id)}
              <div className="w-full lg:absolute z-40 px-6 py-4 lg:py-0 lg:px-16 lg:top-48 space-y-2 lg:space-y-8">
                <h1 className='text-2xl lg:text-5xl text-white font-semibold'>{item.title}</h1>
                <p className='text-zinc-200 text-sm lg:text-lg w-[80vw] lg:w-[40vw]'>{item.overview.slice(0, 150)} ...</p>
                <div className="flex gap-5 items-center text-white text-lg">
                  <p className='flex items-center gap-2 capitalize z-40'><IoMdArrowDroprightCircle /> {item.media_type}</p>
                  <p className='flex items-center gap-2 capitalize'><IoTime /> {item.media_type}</p>
                  <p className='flex items-center gap-2'><MdDateRange /> {item.release_date}</p>
                </div>
                <div className="">
                  <button className=' bg-[#116466] text-[#FFCB9A] lg:text-lg py-2 px-4 lg:py-3 lg:px-6 rounded-full flex justify-between items-center gap-1' onClick={() => nav(`/movies/${item.id}`)}><BiSolidRightArrow />Watch Movie</button>
                </div>
              </div>
            </div>
          ))
        }
      </Fade>
    </div>
  )
}
export default Hero