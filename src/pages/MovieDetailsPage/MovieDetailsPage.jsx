import { useEffect } from "react";
import { fetchMovieDetailsById } from "../../movies-api";
import { useState } from "react";
import { useParams } from "react-router-dom";


const MovieDetailsPage = () => {
    const { movieId } = useParams();
const [{title,genres,overview,vote_average,backdrop_path}, setMovieDetails] = useState([]);
    useEffect(() => {
    async function fetchMovieDetails()  {
    try {
    //   setLoading(true);
    //   setError(false);
        const { title, genres, overview, vote_average, backdrop_path } = await fetchMovieDetailsById(movieId);
        

    setMovieDetails({title,genres,overview,vote_average,backdrop_path});
      console.log({title,genres,overview,vote_average,backdrop_path});
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

  return (
      <div>
          <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} width="360" alt={`${title}"`} />
          <h2>{title}</h2>
          <p>User score:{vote_average}</p>
          <p>Overview {overview }</p>
          <p>Genres</p>
 
    </div>
  )
}

export default MovieDetailsPage

