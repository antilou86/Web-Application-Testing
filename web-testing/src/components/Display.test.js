import React from 'react';
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(cleanup)

describe('<Display/>', () => {
    it('renders without crashing', () => {
        const wrapper = render(<Display/>)
        console.log(wrapper.debug())
      }),
    it('should contain a div that displays game data', () => {
        const wrapper = render(<Display/>)
        
        const strikeLabel = wrapper.queryByText(/strikes/i)
        const ballLabel = wrapper.queryByText(/balls/i)

        // const strikeCount = wrapper.queryByTestId(/strike-count/i)
        // const ballCount = wrapper.queryByTestId(/ball-count/i)

        expect(strikeLabel).toBeInTheDocument()
        expect(ballLabel).toBeInTheDocument();

        // expect(strikeCount).resolves().toBeLessThanOrEqual(2);
        // expect(ballCount).resolves().toBeLessThanOrEqual(3);

    })
})
