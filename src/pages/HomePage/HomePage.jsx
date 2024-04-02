import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../movies-api"
import css from "./HomePage.module.css"
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
    const [trendingMovies, setMovies] = useState([]);
    useEffect(() => {
    async function fetchMovies()  {
    try {
    //   setLoading(true);
    //   setError(false);
      const trendingMovies=await fetchTrendingMovies();
    setMovies(trendingMovies);
      console.log(trendingMovies);
    //   setShowBtn(total_pages > page);
    } catch (error) {
        //   setError(true)
        console.log(error);
    } finally {
    //   setLoading(false);
      }
    }
  fetchMovies();
    
}, [])
  return (
      <section className={css.home_section}>
          <h1 className={css.home_title}>Tranding today</h1>
          <MovieList trendingMovies={trendingMovies} />
      </section>
  )
}

export default HomePage