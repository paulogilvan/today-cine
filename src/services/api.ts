import axios from 'axios';
import { Movie } from '../types/Movie'

const apiKey = 'c55ff55c4dd6af9ce052265134cbd904';
const baseURL = 'https://api.themoviedb.org/3/';

export const getMovies = async (): Promise<Movie[]> => {
  const response = await axios.get(`${baseURL}/movie/now_playing?api_key=${apiKey}&language=pt-BR&page=1`);
  return response.data.results;
}