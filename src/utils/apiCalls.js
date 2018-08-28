export const fetchMurrayMovies = async (url) => {
  const response = await fetch(url);
  const murrayMovieData = await response.json();
  return murrayMovieData;
}