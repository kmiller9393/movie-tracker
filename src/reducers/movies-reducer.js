export const movieReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_MOVIES':
      return [...action.movies];
    case 'SHOW_FAVORITES':
      return [action.favorites];
    default:
      return state;
  }
};
