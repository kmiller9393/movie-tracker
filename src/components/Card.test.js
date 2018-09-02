import React from 'react';
import { shallow, mount } from 'enzyme';
import { mockMurrayData, mockMovie, mockUser, mockFavorites, mockFavoritesArray } from '../utils/mockData/mockMurrayData'
import { addFavoriteToDatabase, deleteMovieFromDatabase } from '../utils/__mocks__/apiCalls'
import  { Card }  from './Card';

describe('Card', () => {
  
  let wrapper;
  let user;
  beforeEach(() => {
    user = {name: 'Kurt', password: 'Kurt'};
    wrapper = shallow(<Card movie={mockMovie} image={mockMovie.image} favorites={[]} user={user} handleToggle={jest.fn()} />)
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json:() => Promise.resolve({status: 200})}))

  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('setFavoriteData', async () => {
    it.only('should call handleToggle with a movie that is passed in', () => {
      wrapper = mount(<Card movie={mockMovie} image={mockMovie.image} favorites={[]} user={user} handleToggle={jest.fn()} />)
      wrapper.instance().setFavoriteData(mockMovie);
      expect(wrapper.props().handleToggle).toHaveBeenCalledWith(mockMovie)
    })
  })
})