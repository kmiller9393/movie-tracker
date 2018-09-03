import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import { App, mapDispatchToProps } from './App';
import { cleanMurrayData } from '../../utils/__mocks__/helper'
import { fetchMurrayMovies } from '../../utils/__mocks__/apiCalls'
// jest.mock('../../utils/__mocks__/apiCalls');

describe.skip('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App getMovies={jest.fn()}/>)
  })
  
  it('should call getMovies from props with the correct params', async () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(cleanMurrayData) })
      );
    // const result = await wrapper.instance().fetchMurrayData()
    console.log(result)
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
