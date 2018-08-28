import { murrayURL, urlToFetchImage, key } from './variables'
import { fetchMurrayMovies } from './apiCalls'

export const cleanMurrayData = async () => {
  const fetchedUncleanMurrayMovies = await fetchMurrayMovies(murrayURL)
  console.log(fetchedUncleanMurrayMovies.results)
  const response = await fetch(murrayURL)
  const uncleanMurrayData = await response.json()

  const murrayPromises = uncleanMurrayData.results.map(async result => {
    const image = urlToFetchImage + result.poster_path
    console.log(image)
    return {title: result.title, overview: result.overview, release: result.release_date, image}
  })

  return Promise.all(murrayPromises)
}



