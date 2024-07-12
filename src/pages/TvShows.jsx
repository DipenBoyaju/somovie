import { Link } from "react-router-dom"
import { useGetAllTvShowsQuery } from "../apis/TvShowApi";
import TvShowCard from "../components/TvShowCard";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md"
import { FaFilter } from "react-icons/fa";
import CardSkeleton from "../components/skeleton/CardSkeleton";

const TvShows = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading } = useGetAllTvShowsQuery({ page });

  if (isLoading) {
    return (
      <div className="grid lg:grid-cols-6 grid-cols-2 gap-6 py-16">
        {[...Array(12)].map((_, index) => (
          <CardSkeleton key={index} height={300} />
        ))}
      </div>
    );
  }

  const handlePrevPage = () => {
    if (data.page > 1) {
      setPage(prevPage => prevPage - 1)
    }
  }

  const handleNextPage = () => {
    if (data.page < data.total_pages) {
      setPage(prevPage => prevPage + 1)
    } else {
      setPage(data.page)
    }
  }


  return (
    <section className="container mx-auto">
      <div className="py-10 px-4 lg:px-0">
        <div className=""></div>
        <div className=""><Link to={'/'}>Home</Link><span className="text-[#D1E8E2]"> / Tv Show</span></div>
        <div className="flex justify-between items-center">
          <p className="text-4xl font-semibold py-6 text-[#FFCB9A]">Tv Shows</p>
          <button className="bg-[#116466] text-[#fff] px-4 py-2 rounded-sm flex items-center gap-2"><FaFilter /> Filter</button>
        </div>
        <div className="grid lg:grid-cols-6 grid-cols-2 gap-6">
          {
            data && data?.results?.map((item) => {
              return <TvShowCard key={item.id} item={item} />
            })
          }
        </div>

        <div className="flex gap-2 justify-center pt-8">
          <button className={`bg-[#116466] text-white text-2xl py-2 px-3  rounded-lg ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''} `} onClick={() => setPage(1)}><MdKeyboardDoubleArrowLeft /></button>
          <button className={`bg-[#116466] text-white text-2xl py-2 px-3  rounded-lg ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => handlePrevPage()} ><IoIosArrowBack /></button>
          <div className="flex gap-2">
            <p className="bg-[#116466] text-white text-2xl w-auto h-full py-2 px-3 text-center rounded-lg cursor-pointer" onClick={() => page > 1 ? setPage(page - 1) : setPage(page)}>{page}</p>
            <p className="bg-[#116466] text-white text-2xl w-auto h-full py-2 px-3 text-center rounded-lg cursor-pointer" onClick={() => page <= data?.total_pages - 1 ? setPage(page + 1) : setPage(page)}>{page + 1}</p>
            <p className="bg-[#116466] text-white text-2xl w-auto h-full py-2 px-3 text-center rounded-lg cursor-pointer" onClick={() => page !== data?.total_pages ? setPage(page + 2) : setPage(page)}>{page + 2}</p>
          </div>
          <button className={`bg-[#116466] text-white text-2xl py-2 px-3  rounded-lg ${page === data?.last_pages - 1 ? 'opacity-50 cursor-not-allowed' : ''}  `} onClick={() => handleNextPage()}><IoIosArrowForward /></button>
          <button className={`bg-[#116466] text-white text-2xl py-2 px-3 rounded-lg ${page === data?.last_pages ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => setPage(data?.total_pages)}><MdKeyboardDoubleArrowRight /></button>
        </div>

      </div>
    </section>
  )
}
export default TvShows