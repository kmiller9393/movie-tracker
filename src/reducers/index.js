import { combineReducers } from 'redux';
import { movieReducer } from './movies-reducer';
import { loginReducer } from './login-reducer';
import { favoritesReducer } from './favorites-reducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  userLogin: loginReducer,
  favorites: favoritesReducer,
});


export default rootReducer;
