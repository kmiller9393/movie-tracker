export const loginReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER_INFO':
      return [...state, {email: action.email, password: action.password, favorites: action.favorites}]
      default:
        return state;
  }
}