import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../movies-api";


const MovieReviews = () => {
  const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);
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
    if (movieReviews.length === 0) { return <div>There are no reviews</div> }
        return (
      <div>
          <ul>{movieReviews.map(review => {
              return (
               <li key={review.id}>
                  
                  <p>Author: {review.author}</p>
                  <p>Character {review.content }</p>
              </li>   
              )
          })}              
          </ul>
    </div>
  )
}

export default MovieReviews