export const setFilter = filter => {
  return {
    type: 'SET_FILTER',
    filter
  };
};

export const populateMovies = movies => {
  return {
    type: 'POPULATE_MOVIES',
    movies
  };
};

export const getUserInfo = (name, id) => {
  return {
    type: 'GET_USER_INFO',
    name,
    id
  };
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  };
};

export const populateFavorites = favorites => {
  return {
    type: 'POPULATE_FAVORITES',
    favorites
  };
};

export const addFavorite = movie => {
  return {
    type: 'ADD_FAVORITE',
    movie
  };
};
