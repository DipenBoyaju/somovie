import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import TvShows from "./pages/TvShows"
import TopImdb from "./pages/TopImdb"
import MovieDetail from "./features/MovieDetail"
import Search from "./components/Search"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'movies', element: <TopImdb /> },
        // { path: 'topimdb', element: <TvShows /> },
        { path: 'topimdb', element: <TopImdb /> },
        { path: 'movies/:id', element: <MovieDetail /> },
        { path: 'search', element: <Search /> }
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default App
