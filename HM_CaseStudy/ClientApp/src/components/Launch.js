import React from 'react';

const Launch = ({ launch, fetchLaunchDetails }) => {
    const handleClick = () => {
        fetchLaunchDetails(launch.id);
    };

    return (
        <tr>
            <td>{launch.name}</td>
            <td>{launch.date}</td>
            <td>
                <button onClick={handleClick}>View Details</button>
            </td>
        </tr>
    );
};

export default Launch;
