export const favoritesReducer = (state=[], action) => {
  switch (action.type) {
    case 'POPULATE_FAVORITES' :
      return [...action.favorites]
    case 'ADD_FAVORITE' :
      return [...state, action.movie] 
    default:
      return state
  }
}