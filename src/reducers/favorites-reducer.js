export const favoritesReducer = (state=[], action) => {
  switch (action.type) {
    case 'POPULATE_FAVORITES' :
      return [...action.favorites]
    case 'TOGGLE_FAVORITE':
    if (state.includes(action.movie)) {
      const filteredFavorites = state.filter(movie => movie !== action.movie)
      return filteredFavorites
    } else {
      return  [...state, action.movie] 
    }
    default:
      return state
  }
}