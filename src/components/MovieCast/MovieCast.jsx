import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../movies-api";
import css from "./MovieCast.module.css"


const MovieCast = () => {
    const { movieId } = useParams();
    const [movieCasts, setCast] = useState(null);
useEffect(() => {
        async function fetchCast() {
            try {
                //   setLoading(true);
                //   setError(false);
                const movieCasts = await fetchMovieCast(movieId);
                setCast(movieCasts);
            console.log(movieCasts);
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
if (movieCasts !== null){return (
      <div>
          <ul className={css.cast_list}>{movieCasts.map(cast => {
              return (
               <li key={cast.id} className={css.cast_item}>
                  <img src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`} width="200" alt={`${cast.name}`} />
                  <p className={css.cast_name}>{cast.name}</p>
                  <p className={css.cast_charecter}>Character {cast.character }</p>
              </li>   
              )
          })}
              
          </ul>
    </div>
  )}
  
}

export default MovieCast


