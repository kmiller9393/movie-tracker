export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOGOUT_USER':
      return [];
    case 'POPULATE_FAVORITES':
      return action.favorites;
    case 'ADD_FAVORITE':
      return [...state, action.movie.movie_id];
    default:
      return state;
  }
};
