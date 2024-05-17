import { useEffect, useState } from 'react';
import { getMovies } from './services/api';
import { Movie } from './types/Movie';
import * as C from './globalStyles';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesList = await getMovies();
      setMovies(moviesList);
    };

    fetchMovies();
  }, []);  

  return (
    <C.Container>
      <C.Title>Filmes hoje nos cinemas</C.Title>
      <C.ContainerMovies>
        {movies.map((movie) => (
          <C.MovieItem key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            {/* <p>Data de lançamento: {movie.release_date}</p> */}
          </C.MovieItem>
        ))}
      </C.ContainerMovies>
    </C.Container>
  )
}

export default App;
