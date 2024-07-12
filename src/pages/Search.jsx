import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchCollectionQuery } from '../apis/SearchApi';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import CardSkeleton from '../components/skeleton/CardSkeleton';

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchInput = searchParams.get('q') || '';
  const nav = useNavigate();

  const { data, error, isLoading } = useSearchCollectionQuery({ query: searchInput, page: 1 });

  if (isLoading) {
    return (
      <div className="grid lg:grid-cols-6 grid-cols-2 gap-6 py-16">
        {[...Array(12)].map((_, index) => (
          <CardSkeleton key={index} height={300} />
        ))}
      </div>
    );
  }
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="container mx-auto">
      <div className="py-2 px-4 lg:px-0">
        <p className="text-xl py-6 text-[#FFCB9A]">Search results for {searchInput}</p>
        {data?.results?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pb-10">
            {data?.results?.map((item) => (
              item.poster_path && (
                <div className="" key={item.id} >
                  <div className="group relative cursor-pointer w-full h-auto" onClick={() => nav(`/${item.media_type === "movie" ? 'movies' : 'tvshow'}/${item.id}`)} >

                    <span className="bg-[#023f2b52] hidden h-full w-full absolute justify-center group-hover:flex transition-all duration-700 items-center" >
                      <AiOutlinePlayCircle className="text-6xl transition-all duration-500 text-white font-light" />
                    </span>
                    <span className='absolute bg-[#D1E8E2] text-[#2C3531] font-semibold px-1 rounded-sm text-sm right-0 top-2 mr-2'>HD</span>
                    <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`} alt="" className='w-full rounded-lg' />
                    <span className='border border-[#FFCB9A] p-1 px-2 text-sm rounded-sm absolute bottom-0 text-[#FFCB9A] mr-2 mb-2 right-0 bg-[#ffffff20] backdrop-blur-3xl capitalize'>{item.media_type}</span>
                  </div>
                  <div className="space-y-2">
                    <p className='font-semibold pt-2 text-[#D1E8E2]'>{(item.title || item.name).length > 30 ? `${(item.title || item.name).slice(0, 22)}...` : `${item.title || item.name}`}</p>
                    <p className='text-[#cfcfcf] text-sm'>{new Date(item.release_date).getFullYear()} | 198m</p>
                  </div>
                </div>
              )
            ))}
          </div>
        ) : (
          <p className="text-white">No results found</p>
        )}
      </div>
    </section >
  );
};

export default Search;
