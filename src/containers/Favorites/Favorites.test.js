import React from 'react';
import { shallow, mount } from 'enzyme';
import { Favorites, mapDispatchToProps, mapStateToProps } from './Favorites';
import {
  mockFavorites,
  mockMurrayData,
  mockUser,
  mockFavoriteStateResult,
} from '../../utils/mockData/mockMurrayData';

describe('Favorites', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Favorites
        favorites={mockFavorites.data}
        movies={mockMurrayData}
        user={mockUser}
      />,
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with no user', () => {
    wrapper = shallow(<Favorites favorites={[]} user={{}} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using logoutUser from props', () => {
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.logoutUser();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with movies, user and favorites', () => {
      const movies = mockMurrayData.data;
      const favorites = [mockFavorites];
      const user = mockUser;

      const mockState = {
        movies,
        favorites,
        user,
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(mockFavoriteStateResult);
    });
  });
});
