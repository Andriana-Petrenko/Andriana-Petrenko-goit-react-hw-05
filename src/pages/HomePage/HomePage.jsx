import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../movies-api"
import css from "./HomePage.module.css"
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
    const [trendingMovies, setMovies] = useState(null);
    // const [showBtn, setShowBtn] = useState(false);
    useEffect(() => {
    async function fetchMovies()  {
    try {
    //   setLoading(true);
    //   setError(false);
      const trendingMovies=await fetchTrendingMovies();
    setMovies(trendingMovies);

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
   if (trendingMovies !== null) {
    return (
      <section className={css.home_section}>
          <h1 className={css.home_title}>Tranding today</h1>
          <MovieList trendingMovies={trendingMovies} />
      </section>
  )
   } 
}

export default HomePage