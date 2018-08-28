import { murrayURL, urlToFetchImage} from './variables'
import { fetchMurrayMovies } from './apiCalls'

export const cleanMurrayData = async () => {
  const fetchedUncleanMurrayPages = await fetchMurrayMovies(murrayURL)
  const murrayPromises = fetchedUncleanMurrayPages.results.map(async result => {
    const image = urlToFetchImage + result.poster_path
    return {title: result.title, overview: result.overview, release: result.release_date, image}
  })
  return Promise.all(murrayPromises)
}



