import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpcomingLaunches = () => {
    const [upcomingLaunches, setUpcomingLaunches] = useState([]);

    useEffect(() => {
        const fetchUpcomingLaunches = async () => {
            try {
                const response = await axios.get('/api/launches/upcoming');
                setUpcomingLaunches(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUpcomingLaunches();
    }, []);

    return (
        <div>
            <h1>Upcoming Launches</h1>
            {upcomingLaunches.map((launch) => (
                <div key={launch.id}>
                    <h3>{launch.missionName}</h3>
                    <p>{launch.launchDate}</p>
                </div>
            ))}
        </div>
    );
};

export default UpcomingLaunches;
