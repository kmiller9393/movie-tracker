export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
});

export const populateMovies = movies => ({
  type: 'POPULATE_MOVIES',
  movies
});

export const getUserInfo = (name, id) => ({
  type: 'GET_USER_INFO',
  name,
  id
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});

export const populateFavorites = favorites => ({
  type: 'POPULATE_FAVORITES',
  favorites
});

export const addFavorite = movie => ({
  type: 'ADD_FAVORITE',
  movie
});

export const deleteFavorite = movie => ({
  type: 'DELETE_FAVORITE',
  movie
});
