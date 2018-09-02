import React from 'react';
import { shallow } from 'enzyme';
import { mockMurrayData, mockMovie, mockUser, mockFavorites, mockFavoritesArray } from '../utils/mockData/mockMurrayData'
import { addFavoriteToDatabase } from '../utils/__mocks__/apiCalls'
import  Card  from './Card';

describe('Card', () => {
  
  let wrapper;
  let user;
  beforeEach(() => {
    const user = {name: 'Kurt', password: 'Kurt'};
    wrapper = shallow(<Card movie={mockMovie} image={mockMovie.image} favorites={mockFavoritesArray} user={user} handleToggle={jest.fn()} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('setFavoriteData', async () => {
    it.only('should add a movie to the favorites array if the movie is not already included in the favorites array', () => {
  
    })
  })
})