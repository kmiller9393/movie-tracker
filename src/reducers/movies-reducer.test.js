import { movieReducer } from './movies-reducer';

import * as actions from '../actions'
import { mockMovie, mockMurrayData } from '../utils/mockData/mockMurrayData'

describe('moviesReducer', () => {
  it('should return initial state by default', () => {
    const expected = [];
    const result = movieReducer(undefined, {})

    expect(result).toEqual(expected)
  })
  it('should return an array containing all of our movies if action POPULATE_MOVIES is passed in', () => {
    const expected = [mockMurrayData];
    const action = {type: 'POPULATE_MOVIES', movies:[mockMurrayData]}

    const result = movieReducer([], action)

    expect(result).toEqual(expected)
  })
})
