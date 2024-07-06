const TvShowCard = ({ item }) => {
  return (
    <div>
      <div className="">
        <div className="relative">
          <span className='absolute bg-[#D1E8E2] text-[#2C3531] font-semibold px-1 rounded-sm text-sm right-0 top-2 mr-2'>HD</span>
          <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`} alt="" className='w-full rounded-lg' />
          <span className='border border-[#FFCB9A] p-1 px-2 text-sm rounded-sm absolute bottom-0 text-[#FFCB9A] mr-2 mb-2 right-0 bg-[#ffffff20]'>Tv Show</span>
        </div>
        <div className="space-y-2">
          <p className='font-semibold pt-2 text-[#D1E8E2]'>{item.name.length > 30 ? `${item.name.slice(0, 22)}...` : `${item.name}`}</p>
          <p className='text-[#cfcfcf] text-sm'>{new Date(item.first_air_date).getFullYear()} | 198m</p>
        </div>
      </div>
    </div>
  )
}
export default TvShowCard