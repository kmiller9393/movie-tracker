export const movies = (state=[], action) => {
  switch(action.type) {
    case 'POPULATE_MOVIES':
      return state
    case 'SHOW_FAVORITES':
      return [action.favorites]
    default:
      return ['1', '2', '3', '4', '5', '6']
  }
}

