import './App.module.css'
import fetchMovies from "./services/movieService"
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from 'react-hot-toast';
import MovieGrid from "./components/MovieGrid/MovieGrid"
import type Movie from "../src/types/movie"
import Loader from './components/Loader/Loader';

import { useState} from "react"
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import MovieModal from './components/MovieModal/MovieModal';

function App() {

  // const [searchQuery, setSearchQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Movie>({} as Movie)
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  async function handleSearchSubmit(query: string) {
    try {
      setMovies([])
      setError(false)
      setLoader(true)
      const data = await fetchMovies(query);

      if (data.length === 0) {
        toast("No movies found for your request.")
      }
      setMovies(data);

    } catch {
      setError(true)
    } finally {
      setLoader(false)
    }
  }

  // useEffect(() => {
    
  // }, [movieModal])

  function handleClick(id:number) {
    const movie = movies.find((item) => item.id === (id));
    
    if (movie) {
      setMovie(movie);
    }

    setOpenModal(true)
  }

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error === true && <ErrorMessage />}
      {loader === true ? (<Loader />) : (<MovieGrid movies={movies} onSelect={handleClick} />)}
      {openModal === true && <MovieModal movie={ movie } onClose={() => setOpenModal(false)}/>}
    </>
  )
}

export default App


// const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function getMovies() {
//       try {
//         const data = await fetchMovies(title);
//         setMovies(data);
        
//       } catch (err) {
//         setError(err);
//       }
//     }

//     getMovies();
//   }, []);
  
//   console.log(movies);