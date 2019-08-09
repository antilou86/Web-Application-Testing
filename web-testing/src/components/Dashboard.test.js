import React from 'react';
import {render, cleanup, fireEvent, getByText } from '@testing-library/react'
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
    }),
    it('should change state when buttons are clicked', () => {
      const wrapper = render(<Dashboard/>)
      

      const strikeButton = wrapper.queryByTestId(/strikeButton/i);
      const ballButton = wrapper.queryByTestId(/ballButton/i);
      const foulButton = wrapper.queryByTestId(/foulButton/i);
      const hitButton = wrapper.queryByTestId(/hitButton/i);

      fireEvent.click(strikeButton)
      wrapper.getByText(/strike: 1/)

      fireEvent.click(ballButton)
      wrapper.getByText(/ball: 1/)

      fireEvent.click(hitButton)
      wrapper.getByText(/strike: 0/)
      wrapper.getByText(/ball: 0/)

      fireEvent.click(strikeButton)
      fireEvent.click(strikeButton)
      fireEvent.click(strikeButton)
      wrapper.getByText(/strike: 0/)

      // fireEvent.click(ballButton)
      // fireEvent.click(foulButton)
      // fireEvent.click(hitButton)
  
    })
})
