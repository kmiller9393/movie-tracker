import {  loginReducer } from './login-reducer';
import * as actions from '../actions';

describe('loginReducer', () => {
  it('should return initial state by default', () => {
    const expected = [];
    const result = loginReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return state with a logged in user', () => {
    const expected = {name: 'Brandon', id: 1};
    const name = 'Brandon';
    const id = 1;

    const result = loginReducer([], actions.getUserInfo(name, id))

    expect(result).toEqual(expected)
  })

  it('should be able to log out a user', () => {
    const expected = [];
    const result = loginReducer({name: 'Brandon', id: 2}, actions.logoutUser())
    expect(result).toEqual(expected)
  })
})