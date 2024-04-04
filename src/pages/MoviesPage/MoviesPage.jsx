import { FaSearch } from "react-icons/fa"
import toast, { Toaster } from 'react-hot-toast'
import css from "./MoviesPage.module.css"
import { useSearchParams } from "react-router-dom"
import MovieList from "../../components/MovieList/MovieList"
import { useEffect, useState } from "react"
import { fetchMovieSearch } from "../../movies-api"

const MoviesPage = () => {
     const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const inputSearch = searchParams.get('query');

    useEffect(() => {
    if (!inputSearch) return;
    async function fetchMoviesByQuery()  {
    try {
    //   setLoading(true);
    //   setError(false);
      const moviesByQuery=await fetchMovieSearch(inputSearch);
        //   setPhotos((prevPhotos) => [...prevPhotos, ...results]);
        setMovies(moviesByQuery);
    } catch (error) {
    //   setError(true)
    } finally {
    //   setLoading(false);
      }
    }
  fetchMoviesByQuery();
    
}, [inputSearch])
  
    const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputSearch = form.elements.search.value;
          if (inputSearch.trim() === "") {
              toast('Please enter search term!', {
                  style: {
                      borderRadius: '10px',
                      background: 'rgb(73, 248, 42)',
                      color: '#000',
                  },
              });
              return;
          }
    setSearchParams({ query: inputSearch }); 
    }
    return (
        <>
            <form className={css.form} onSubmit={handleOnSubmit}>
       <input className={css.input_search} type="text" autoComplete="off" autoFocus  placeholder="Search movies..." name="search"/>
       <button className={css.btn_search} type="submit"><FaSearch  size='16' fill='#010147'/></button>
       <Toaster position="top-right" reverseOrder={false}/>
            </form>
            {movies !== null && <MovieList trendingMovies={movies} />}
  </>
  )
}

export default MoviesPage


