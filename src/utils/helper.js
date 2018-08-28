import { murrayURL } from './variables'
import { fetchMurrayMovies } from './apiCalls'

export const cleanMurrayData = async () => {
  // const fetchedUncleanMurrayMovies = await fetchMurrayMovies(murrayURL)
  // console.log(fetchedUncleanMurrayMovies.results)
  const response = await fetch(murrayURL)
  const uncleanMurrayData = await response.json()
  return uncleanMurrayData.results.map(result => {
    console.log(result.title)
    return {title: result.title, overview: result.overview, release: result.release_date}
  })
}

