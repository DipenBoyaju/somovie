import { useState } from "react"
import { AiFillPlusSquare } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router-dom"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showGenre, setShowGenre] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
      setSearchInput('')
    }
  };

  const navStyle = ({ isActive }) => isActive ? 'text-md tracking-wider hover:text-[#D1E8E2] lg:py-5 py-2 font-bold text-[#D1E8E2]' : 'text-md font-normal tracking-wider hover:text-[#D1E8E2] lg:py-5 py-2';

  const genraList = () => {
    const genreListStyle = 'hover:bg-[#116466] px-3 py-1';
    return (
      <div className="lg:absolute bg-[#2C3531] text-white rounded lg:shadow-lg p-3 grid lg:grid-cols-4 grid-cols-2 gap-1 px-3 w-[40vw]">
        <p className={`${genreListStyle}`}>Action</p>
        <p className={`${genreListStyle}`}>Comedy</p>
        <p className={`${genreListStyle}`}>Thrill</p>
        <p className={`${genreListStyle}`}>Romance</p>
        <p className={`${genreListStyle}`}>Horror</p>
        <p className={`${genreListStyle}`}>Bio-Pic</p>
        <p className={`${genreListStyle}`}>Sports</p>
      </div>
    )
  }
  return (
    <div className="bg-[#ffffff0e] relative">
      <header className="text-white flex justify-between items-center lg:p-2 mx-auto container px-4 py-4">
        <div className="lg:hidden text-3xl cursor-pointer hover:text-[#FFCB9A] transition-all duration-500" onClick={() => setShowMenu(prev => !prev)}><HiMenuAlt3 /></div>
        <div className="font-bold text-2xl tracking-wider" >
          <Link to={'/'} onClick={() => showMenu(prev => !prev)}><p className="font-[orbitron] text-[#FFCB9A]"><span className="text-[#D1E8E2]">So</span>M<span className="">o</span>v<span className="text-[#FFCB9A]">ie</span>s</p></Link>
        </div>
        <nav className={`absolute gap-2 lg:relative flex lg:flex-row flex-col lg:gap-5 lg:items-center top-14 lg:top-0 bg-[#0b4142d7] lg:bg-transparent left-0 lg:w-auto w-[50vw] px-6 py-3 lg:p-0 h-[100vh] lg:h-auto ${showMenu ? 'translate-x-0' : '-translate-x-[100%]'} lg:translate-x-0 transition-all duration-700 z-50`}>
          <NavLink to={'/'} className={navStyle} onClick={() => showMenu(false)}>Home</NavLink>
          <div className="relative cursor-pointer" onMouseEnter={() => setShowGenre(!showGenre)} onMouseLeave={() => setShowGenre(!showGenre)}>
            <div className="flex items-center justify-between">
              <button
                className={navStyle`lg:py-5`}
              >
                Genre
              </button>
              <IoIosArrowDown className="hidden lg:block ml-1 mt-1 cursor-pointer" />
              <AiFillPlusSquare className="lg:hidden" />
            </div>
            {showGenre && genraList()}
          </div>
          <div className="relative" onMouseEnter={() => setShowCountry(!showCountry)} onMouseLeave={() => setShowCountry(!showCountry)}>
            <div className="flex items-center justify-between">
              <button
                className={navStyle`lg:py-5 lg:flex lg:justify-between flex-row`}
              >
                Country
              </button>
              <IoIosArrowDown className="hidden lg:block ml-1 mt-1 cursor-pointer" />
              <AiFillPlusSquare className="lg:hidden" />
            </div>
            {showCountry && genraList()}
          </div>
          <NavLink to={'/movies'} className={navStyle} onClick={() => showMenu(false)}>Movies</NavLink>
          <NavLink to={'/tvshows'} className={navStyle} nClick={() => showMenu(false)}>TV Shows</NavLink>
          <NavLink to={'/topimdb'} className={navStyle} nClick={() => showMenu(false)}>Top IMDB</NavLink>
        </nav>
        <div className="flex flex-row justify-between items-center gap-4">
          <div className="lg:flex hidden">
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
              <input type="text" placeholder="Search here..." onChange={(e) => setSearchInput(e.target.value)} value={searchInput} className="w-[15vw] h-[40px] rounded-md border-none focus:outline-none p-2 bg-transparent text-white" />
              <button><LuSearch className="text-xl" /></button>
            </form>
          </div>
          <button className="bg-[#FFCB9A] text-[#2C3531] text-lg lg:px-8 px-4 py-1 lg:py-2 rounded-3xl hover:bg-[#D1E8E2] transition-all hover:text-[#2C3531]">Login</button>
        </div>
      </header>
      <div className="lg:hidden flex justify-center items-center pb-4">
        <form onSubmit={handleSearchSubmit} className="relative items-center flex flex-col">
          <input type="text" className="w-[100%] h-[40px] focus:outline-none p-2 rounded-md" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
          <button className="absolute place-self-end mt-2 mr-2"><LuSearch className="text-xl" /></button>
        </form>
      </div>
    </div >
  )
}
export default Header
