import React, { useState, useEffect } from 'react';

const LaunchDetailsPage = () => {
    const [launch, setLaunch] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFetchLaunchDetails = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/launches/launch-details');
            const data = await response.json();
            setLaunch(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching launch details:', error);
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h1>Launch Details Page</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {launch ? (
                        <div>
                            <h2>{launch.name}</h2>
                            <p>{launch.details}</p>
                        </div>
                    ) : (
                        <div>No launch details available</div>
                    )}
                    <button onClick={handleFetchLaunchDetails}>Fetch Launch Details</button>
                </>
            )}
        </div>
    );
};

export default LaunchDetailsPage;
