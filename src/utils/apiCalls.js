import { key } from './variables'

// export const fetchMurrayMovies = async (url) => {
//   const response = await fetch(url);
//   const murrayMovieData = await response.json();
//   return murrayMovieData;
// }



export const fetchMurrayMovies = async () => {
  const uncleanMurrayData = []
  for (let i = 1; i < 6; i++) {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + key + '&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=' + i +'&with_people=1532')
    const fetchedMurrayData = await response.json()
    uncleanMurrayData.push(fetchedMurrayData)
  }
  return uncleanMurrayData;
}