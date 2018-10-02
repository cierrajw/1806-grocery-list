import React from 'react'
import Grocery from './Grocery'
import { shallow } from 'enzyme'

describe('Grocery', () => {
  it('should have a class of starred', () => {
    // Setup && Execution
    const wrapper = shallow(<Grocery
                              name="bananas"
                              starred={true}
                            />)
    // Expectation
    expect(wrapper.is('.starred')).toBe(true)
  })

  it('should call addGrocery on purchase click', () => {
    // Setup
    const mockAddGrocery = jest.fn()
    const wrapper = shallow(<Grocery
                              name="apples"
                              starred={false}
                              addGrocery={mockAddGrocery}
                            />)
    
    // Execution
    wrapper.find('.purchase').simulate('click')

    // Expectation
    expect(mockAddGrocery).toHaveBeenCalled()
  })
})
