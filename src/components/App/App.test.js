import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import { App, mapDispatchToProps } from './App';
import { cleanMurrayData } from '../../utils/__mocks__/helper'

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App getMovies={jest.fn()}/>)
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve({ status: 200 }) })
      );
  })

  it('should call getMovies from props with the correct params', () => {
    expect(wrapper.props().getMovies).toHaveBeenCalledWith('')
  })

  describe('mapDispatchToPros', () => {
    it('should call dispatch when getMovies from props is invoked', () => {
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.getMovies();
      expect(mockDispatch).toHaveBeenCalled()
    })
  })

})
