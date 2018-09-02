import { urlToFetchImage } from './variables';
import { fetchMurrayMovies } from './apiCalls';

export const cleanMurrayData = async () => {
  const fetchedUncleanMurrayPages = await fetchMurrayMovies();
  const murrayPromises = fetchedUncleanMurrayPages.reduce((acc, page) => {
    page.results.forEach(result => {
      const image = urlToFetchImage + result.poster_path;
      acc.push({
        title: result.title,
        overview: result.overview,
        release: result.release_date,
        image,
        movie_id: result.id,
        vote_average: result.vote_average
      });
    });
    return acc;
  }, []);
  return Promise.all(murrayPromises);
};
