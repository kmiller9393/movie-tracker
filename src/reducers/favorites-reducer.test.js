import { favoritesReducer } from './favorites-reducer';
import * as actions from '../actions';
import { mockFavoriteResult, mockMovie } from '../utils/mockData/mockMurrayData'

describe('favoritesReducer', () => {
  it('should return intial state be default', () => {
    const expected = [];
    const result = favoritesReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return and array of favorites', () => {
    const expected = mockFavoriteResult
    const result = favoritesReducer([], actions.populateFavorites(mockFavoriteResult))
    expect(result).toEqual(expected)
  })

  it('should return an empty array when the action type is LOGOUT_USER', () => {
    const expected = [];
    const action = {type: 'LOGOUT_USER'}
    const result = favoritesReducer([], action)
    expect(result).toEqual(expected)
  })

  it('should return state with an additional movie if action type is ADD_FAVORITE', () => {
    const expected = [164808];
    const action = {movie: mockMovie, type: 'ADD_FAVORITE'}
    const result = favoritesReducer([], action)
    expect(result).toEqual(expected)
  })

  it('should return and array of filtered favorites if action type is DELETE_FAVORITE', () => {
    const expected = [];
    const action = {movie: mockMovie, type: 'DELETE_FAVORITE'};
    const initial = [164808];
    const result = favoritesReducer(initial, action);
    expect(result).toEqual(expected)
  })
})
