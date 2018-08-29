import { combineReducers } from 'redux';
import { movieReducer } from './movies-reducer';
import { loginReducer } from './login-reducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  userLogin: loginReducer
})


export default rootReducer;