import { useLocation } from "react-router-dom"

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchInput = searchParams.get('q') || '';

  return (
    <section className="container mx-auto">
      <div className="py-2 px-4 lg:px-0">
        <p className="text-xl py-6 text-[#FFCB9A]">Search results for {searchInput}</p>
      </div>
    </section>
  )
}
export default Search