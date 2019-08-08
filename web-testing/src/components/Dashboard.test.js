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
      const ballButton = wrapper.queryByText(/ball/i);
      const foulButton = wrapper.queryByText(/foul/i);
      const hitButton = wrapper.queryByText(/hit/i);

      expect(strikeButton).toBeInTheDocument();
      expect(ballButton).toBeInTheDocument();
      expect(foulButton).toBeInTheDocument();
      expect(hitButton).toBeInTheDocument();
    }),
    it('should update the display with each click', () => {
      const wrapper = render(<Dashboard/>)
      
      const strikeButton = wrapper.queryByTestId(/strikeButton/i);
      const ballButton = wrapper.queryByText(/ball/i);
      const foulButton = wrapper.queryByText(/foul/i);
      const hitButton = wrapper.queryByText(/hit/i);
      
      
    })
})
