import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
    test('renders the launch schedule', () => {
        render(<Home />);
        const headingElement = screen.getByText('Launch Schedule');
        expect(headingElement).toBeInTheDocument();
    });

    test('fetches past launches when "Past Launches" button is clicked', async () => {
        render(<Home />);
        const pastLaunchesButton = screen.getByText('Past Launches');
        fireEvent.click(pastLaunchesButton);
        // Add assertions to check if the data is fetched and displayed correctly
    });

    test('fetches upcoming launches when "Upcoming Launches" button is clicked', async () => {
        render(<Home />);
        const upcomingLaunchesButton = screen.getByText('Upcoming Launches');
        fireEvent.click(upcomingLaunchesButton);
        // Add assertions to check if the data is fetched and displayed correctly
    });

    test('fetches launch details when a launch is clicked', async () => {
        render(<Home />);
        const launchElement = screen.getByTestId('launch-123'); // Replace with an actual test ID
        fireEvent.click(launchElement);
        // Add assertions to check if the launch details are fetched and displayed correctly
    });
});
