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

  it('should change state of toggle when the image is clicked', () => {
  wrapper.find('img').simulate('click')
  expect(wrapper.state().toggle).toEqual(true)
  wrapper.find('img').simulate('click')
  expect(wrapper.state().toggle).toEqual(false)
  })

  it('should change the state of toggle when the article is clicked', () => {
    wrapper.find('article').simulate('click')
    expect(wrapper.state().toggle).toEqual(true)
    wrapper.find('article').simulate('click')
    expect(wrapper.state().toggle).toEqual(false)
  })

  it('should call setFavorieData when clicked', () => {
    wrapper = mount(<Card movie={mockMovie} image={mockMovie.image} favorites={[]} user={user} handleToggle={jest.fn()} />)
    wrapper.instance().setFavoriteData = jest.fn()
    wrapper.find('button').simulate('click')

    expect(wrapper.instance().setFavoriteData).toHaveBeenCalledWith(mockMovie)
  })

  describe('setFavoriteData', async () => {
    it('should call handleToggle with a movie that is passed in', () => {
      wrapper = mount(<Card movie={mockMovie} image={mockMovie.image} favorites={[]} user={user} handleToggle={jest.fn()} />)
      wrapper.instance().setFavoriteData(mockMovie);
      expect(wrapper.props().handleToggle).toHaveBeenCalledWith(mockMovie)
    })
    it('should call history.push with the correct parameters if no user is signed in', () => {
      wrapper = mount(<Card movie={mockMovie} image={mockMovie.image} favorites={[]} user={user} handleToggle={jest.fn()} />)

      console.log(wrapper.props().history)

    })
  })
})