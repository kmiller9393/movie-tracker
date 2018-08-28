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