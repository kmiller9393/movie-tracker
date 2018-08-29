export const loginReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER_INFO':
      return [...state, {name: action.name, id: action.id}]
      default:
        return state;
  }
}