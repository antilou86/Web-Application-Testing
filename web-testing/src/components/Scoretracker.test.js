import React from 'react';
import {render} from '@testing-library/react'
import Scoretracker from './Scoretracker';
q

it('renders without crashing', () => {
  const wrapper = render(<Scoretracker/>)
  console.log(wrapper.debug())
})