import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import App from './App';

describe('App', () => {
  it('should have one grocery', () => {
    // Setup && Execution
    const wrapper = shallow(<App />)

    // Expectation
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state', () => {
    // Setup && Execution
    const wrapper = shallow(<App />)
    const expected = { groceries: [] }

    // Expectation
    expect(wrapper.state()).toEqual(expected)
  })

  it('should add a grocery when addGrocery is called', () => {
    // Setup
    const wrapper = shallow(<App />)
    const mockGrocery = { name: 'saffron', quantity: 1 }
    const expected = [mockGrocery]


    // Execution
    wrapper.instance().addGrocery(mockGrocery)

    // Expectation
    expect(wrapper.state().groceries).toEqual(expected)
  })
})
