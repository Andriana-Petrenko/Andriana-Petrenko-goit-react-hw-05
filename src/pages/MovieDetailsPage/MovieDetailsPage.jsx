import { useEffect } from "react";
import { fetchMovieDetailsById } from "../../movies-api";
import { useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";


const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovieDetails] = useState([]);
    
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
    console.log(movie);
    if (movie !== null) {
        return (
            (<div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} width="360" alt={`${movie.title}`} />
                <h2>{movie.title}</h2>
                <p>User score:{movie.vote_average}</p>
                <p>Overview {movie.overview}</p>
                <p>Genres</p>
 {/* {movie.genres!==null && (<ul>{movie.genres.map(genre => {
          
          return (
              <li key={genre.id} >
                  <p>{genre.name}</p>
              </li>)
      })}
      </ul>)}  */}

                <ul>
                    <li><Link to="cast">Cast</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
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

