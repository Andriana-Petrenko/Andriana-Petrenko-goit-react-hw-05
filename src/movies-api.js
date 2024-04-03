import axios from "axios";

// Три ЗАПИТИ МАЄ БУТИ

const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjZlYTE2OGRiMzRkMGIzYzA0N2JmMGQ0Y2JlOTcyYiIsInN1YiI6IjY2MGM3MWU1YzhhNWFjMDE3Yzc5ZWI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mb0ZXQOzC06XijUTNXR3ukt76JMeOD7ALHyY1eXOHn4'
  }
};

export async function fetchTrendingMovies() {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  const response = await axios.get(url, options);
  const data = response.data.results;
  return data;
}


export async function fetchMovieDetailsById(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const response = await axios.get(url, options);
  const {title,genres,overview,vote_average,backdrop_path} = response.data;
  return {title,genres,overview,vote_average,backdrop_path};
}
