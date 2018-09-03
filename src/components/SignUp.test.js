import { SignUp } from './SignUp';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { mockHistory } from '../utils/mockData/mockMurrayData'
jest.mock('../utils/__mocks__/apiCalls');
import { setUserData } from '../utils/__mocks__/apiCalls';


describe('SignUp', () => {
  console.log(setUserData)
  let wrapper;
  let event;
  beforeEach(() => {
    event = {
      preventDefault: jest.fn(),
      target: {
        value: 'hello',
        name: 'name',
      }
    }
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve({ status: 200 }) })
      );

    wrapper = shallow(<SignUp history={mockHistory}/>)
  })

  describe('handleChange', () => {
    it('should change the state of the sign up of component when something is entered in the input field', () => {
      wrapper.find('input').first().simulate('change', event)
      expect(wrapper.state('name')).toEqual('hello')
    })
  })

  describe('handleSubmit', () => {
    it('should call setUserData', async () => {
      
      wrapper.state().name = 'dude'
      wrapper.state().email = 'yam';
      wrapper.state().password = 'juice'
      console.log(wrapper.state())
      await wrapper.instance().handleSubmit(event);
  
      // expect(wrapper.instance().handleSubmit).toHaveBeenCalled
      expect(setUserData).toHaveBeenCalledWith(...wrapper.state())
    })
  })
})