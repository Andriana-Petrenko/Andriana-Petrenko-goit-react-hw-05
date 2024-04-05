import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../movies-api";
import css from "./MovieReviews.module.css"

const MovieReviews = () => {
  const { movieId } = useParams();
    const [movie, setMovieReviews] = useState(null);
useEffect(() => {
        async function fetchCast() {
            try {
                //   setLoading(true);
                //   setError(false);
                const movieReviews = await fetchMovieReviews(movieId);
                setMovieReviews(movieReviews);
            console.log(movieReviews);
                // console.log({ title, genres, overview, vote_average, backdrop_path });
                //   setShowBtn(total_pages > page);
            } catch (error) {
                //   setError(true)
                console.log(error);
            } finally {
                //   setLoading(false);
            }
        }
        fetchCast();
    }, [movieId])
    if (movie!== null) {return (
      <div>
          <ul className={css.review_list}>{movie.map(review => {
              return (
               <li key={review.id}>
                  <p className={css.author}>Author: {review.author}</p>
                  <p>{review.content }</p>
              </li>   
              )
          })}              
          </ul>
    </div>
    )  }
        
//  if (movie=== null) return (<div>There are no reviews</div>)
}

export default MovieReviews