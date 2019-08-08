import React from 'react';
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(cleanup)

describe('<Dashboard/>', () => {
    it('renders without crashing', () => {
        const wrapper = render(<Dashboard/>)
        console.log(wrapper.debug())
      }),
    it('should contain a div with buttons for strike, ball, foul, and hit.', () => {
      const wrapper = render(<Dashboard/>)
      
      const strikeButton = wrapper.queryByTestId(/strikeButton/i);
      const ballButton = wrapper.queryByTestId(/ballButton/i);
      const foulButton = wrapper.queryByTestId(/foulButton/i);
      const hitButton = wrapper.queryByTestId(/hitButton/i);

      expect(strikeButton).toBeInTheDocument();
      expect(ballButton).toBeInTheDocument();
      expect(foulButton).toBeInTheDocument();
      expect(hitButton).toBeInTheDocument();
    })
})
