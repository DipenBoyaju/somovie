import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import TvShows from "./pages/TvShows"
import TopImdb from "./pages/TopImdb"
import MovieDetail from "./features/MovieDetail"
import TvShowDetail from "./features/TvShowDetail"
import Search from "./pages/Search"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'movies', element: <Movies /> },
        { path: 'tvshow', element: <TvShows /> },
        { path: 'topimdb', element: <TopImdb /> },
        { path: 'movies/:id', element: <MovieDetail /> },
        { path: 'tvshow/:id', element: <TvShowDetail /> },
        { path: 'search', element: <Search /> }
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default App
