import { useEffect, useRef } from "react";
import { fetchMovieDetailsById } from "../../movies-api";
import { useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import css from "./MovieDetailsPage.module.css"
import clsx from "clsx"

const activeLink = ({ isActive }) => {
  return clsx(css.details_link, isActive && css.active);
};

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovieDetails] = useState([]);
    const location = useLocation();
    const backLink=useRef(location.state ?? "/")
    
    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                //   setLoading(true);
                //   setError(false);
                const movie = await fetchMovieDetailsById(movieId);
                setMovieDetails(movie);
            
                // console.log({ title, genres, overview, vote_average, backdrop_path });
                //   setShowBtn(total_pages > page);
            } catch (error) {
                //   setError(true)
                console.log(error);
            } finally {
                //   setLoading(false);
            }
        }
        fetchMovieDetails();
    }, [movieId])

    if (movie !== null) {
        const vote = Math.round(movie.vote_average * 100) / 10;
        return (
            (<div className={css.details_wrapper}>
                <Link className={css.go_back} to={backLink.current}>Back</Link>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} width="360" alt={`${movie.title}`} />
                <h2 className={css.movie_title}>{movie.title}</h2>
                <p>User score: {vote}%</p>
                <p className={css.movie_overview}>Overview {movie.overview}</p>
                <p>Genres</p>
 {/* {movie.genres!==null && (<ul>{movie.genres.map(genre => {
          
          return (
              <li key={genre.id} >
                  <p>{genre.name}</p>
              </li>)
      })}
      </ul>)}  */}

                <ul className={css.details_list}>
                    <li className={css.details_item}><NavLink className={activeLink} to="cast">Cast</NavLink></li>
                    <li className={css.details_item}><NavLink className={activeLink} to="reviews">Reviews</NavLink></li>
                </ul>
                <Routes>
                        <Route path="cast" element={<MovieCast/>}></Route>
                        <Route path="reviews" element={<MovieReviews/>}></Route>
                    </Routes>
            </div>)
        )
    }
        
}

export default MovieDetailsPage

