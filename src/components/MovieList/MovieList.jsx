import { Link } from "react-router-dom"
import css from "./MovieList.module.css"
const MovieList = ({trendingMovies}) => {
  return (
      <ul className={css.movies_list}>{trendingMovies.map(movie => {
          return (
              <li key={movie.id} >
                  <Link className={css.movie_link}>{movie.title}</Link>
              </li>)        
      })}
      </ul>
  )
}
export default MovieList