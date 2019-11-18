import React from 'react'
import { shallow } from 'enzyme'

import SpringWrapper from './SpringWrapper'

describe('SpringWrapper', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<SpringWrapper {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})