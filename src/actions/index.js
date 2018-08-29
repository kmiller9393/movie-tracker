export const toggleFavorite = (id) => {
  return {
    type: 'TOGGLE_FAVORITE',
    id
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}

export const populateMovies = (movies) => {
  return {
    type: 'POPULATE_MOVIES',
    movies
  }
}

export const getUserInfo = (email, password, favorites) => {
  return {
    type: 'GET_USER_INFO',
    email,
    password,
    favorites
  }
}