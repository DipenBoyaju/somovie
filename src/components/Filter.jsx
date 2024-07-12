import { useEffect, useState } from "react"
import { baseUrl } from "../constant/apis";
import axios from "axios";
import { LuSearch } from "react-icons/lu";

const Filter = ({ filterValue }) => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const response = await axios.get(`${baseUrl}/genre/movie/list`, {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTYzN2Q2ODNhYThjNzE4ZGRlNmI1ZTJiOGVkMDA5NSIsIm5iZiI6MTcyMDc4MDY3NS45MDQ1MzMsInN1YiI6IjY2ODExZjMzNWNkMDlkN2ExMjQ3ZDk2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7XVRr59RETXiGVREA7BJmFnAfw_MGym4wOB2DLeggOU'
          }
        });
        setGenres(response.data.genres);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchGenre();
  }, [])

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedGenres([...selectedGenres, parseInt(value)]);
    } else {
      setSelectedGenres(selectedGenres.filter((genre) => genre !== parseInt(value)));
    }
  };

  // useEffect(() => {
  //   filterValue(selectedGenres);
  // }, [selectedGenres, filterValue]);

  const handleFilter = () => {
    filterValue(selectedGenres);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
    <div>
      <div className="bg-zinc-800 text-white p-6 w-[80vw] mx-auto mb-10">
        <p className="text-xl font-semibold">Filter</p>
        <hr className="border border-zinc-600 border-b-[1px] my-4" />
        <form action="flex">
          <span>
            <p className="text-lg font-semibold tracking-wide">Genre</p>
            <hr className="border border-zinc-700 border-b-[1px] my-2" />
            {
              genres.map((genre) => (
                <span key={genre.id} className="px-2">

                  <input type="checkbox" value={genre.id} className="mr-2 my-2" onChange={handleCheckboxChange} /> {genre.name}
                </span>
              ))
            }

          </span>
          <div className="">
            <button className="bg-black text-white px-6 text-sm py-2 rounded-full mt-4 flex gap-2 items-center" type="button" onClick={handleFilter} ><LuSearch /> Filter</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Filter