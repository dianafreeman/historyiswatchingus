import React from 'react'
import { shallow } from 'enzyme'

import Select from './Select'

describe('Select', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Select {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})