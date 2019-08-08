import React from 'react';
import {render, cleanup} from '@testing-library/react'
import 'jest-dom/extend-expect';
import Display from './Display';

afterEach(cleanup)

describe('<Display/>', () => {
    it('renders without crashing', () => {
        const wrapper = render(<Display/>)
        console.log(wrapper.debug())
      }),
    it('should contain a div that displays game data', () => {

    })
})
