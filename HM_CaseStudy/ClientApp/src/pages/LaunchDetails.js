import React from 'react';
import LaunchDetails from './LaunchDetails_components';

const LaunchDetailsPage = () => {
    const launchId = 'your_launch_id'; // Provide the actual launch ID here

    return (
        <div>
            <h1>Launch Details Page</h1>
            <LaunchDetails launchId={launchId} />
        </div>
    );
};

export default LaunchDetailsPage;
