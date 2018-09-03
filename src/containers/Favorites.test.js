import { Favorites, mapDispatchToProps } from './Favorites'
import React from 'react'
import { shallow, mount } from 'enzyme';
import { mockFavorites, mockMurrayData, mockUser } from '../utils/mockData/mockMurrayData';

describe('Favorites', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Favorites favorites={mockFavorites.data} movies={mockMurrayData} user={mockUser}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot with no user', () => {
    wrapper = shallow(<Favorites favorites={[]} user={{}}/>)
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using logoutUser from props', () => {
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.logoutUser();
      expect(mockDispatch).toHaveBeenCalled();
    })
  });
})