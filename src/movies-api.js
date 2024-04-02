import axios from "axios";

// ДВА ЗАПИТИ МАЄ БУТИ

export async function fetchTrendingMovies() {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjZlYTE2OGRiMzRkMGIzYzA0N2JmMGQ0Y2JlOTcyYiIsInN1YiI6IjY2MGM3MWU1YzhhNWFjMDE3Yzc5ZWI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mb0ZXQOzC06XijUTNXR3ukt76JMeOD7ALHyY1eXOHn4',
      accept: 'application/json'
}
  };
 await axios.get(url, options)
.then(response => console.log(response))
.catch(err => console.error(err));
}