import { Link } from "react-router-dom"
import css from "./MovieList.module.css"
const MovieList = ({trendingMovies}) => {
  return (
      <ul className={css.movies_list}>{trendingMovies.map(movie => {
          const movieId = movie.id;
          return (
              <li className={css.movie_item} key={movieId} >
                  <Link to={`/movies/${movieId}`} className={css.movie_link}>{movie.title}</Link>    
              </li>)        
      })}
          
          
      </ul>
  )
}
export default MovieList