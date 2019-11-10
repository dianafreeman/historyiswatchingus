import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'

describe('Card', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Card {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})