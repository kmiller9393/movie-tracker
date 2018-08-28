export const movies = (state=[], action) => {
  console.log(action)
  switch(action.type) {
    case 'POPULATE_MOVIES':
      return [...action.movies]
    case 'SHOW_FAVORITES':
      return [action.favorites]
    default:
      return state
  }
}

