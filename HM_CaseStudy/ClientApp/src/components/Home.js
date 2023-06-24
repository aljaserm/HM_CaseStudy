// Home.js
import React, { Component } from 'react';
import Launch from './Launch';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            launches: [],
            selectedLaunch: null,
            error: null,
        };
    }

    componentDidMount() {
        this.fetchPastLaunches();
    }

    fetchPastLaunches = async () => {
        try {
            const response = await fetch('/api/launches/past');
            const data = await response.json();
            this.setState({ launches: data });
        } catch (error) {
            this.setState({ error: 'Failed to fetch past launches' });
        }
    };

    fetchUpcomingLaunches = async () => {
        try {
            const response = await fetch('/api/launches/upcoming');
            const data = await response.json();
            this.setState({ launches: data });
        } catch (error) {
            this.setState({ error: 'Failed to fetch upcoming launches' });
        }
    };

    fetchLaunchDetails = async (id) => {
        try {
            const response = await fetch(`/api/launches/launches/${id}`);
            const data = await response.json();
            this.setState({ selectedLaunch: data });
        } catch (error) {
            this.setState({ error: 'Failed to fetch launch details' });
        }
    };

    render() {
        const { launches, selectedLaunch, error } = this.state;

        return (
            <div>
                <h1>Launch Schedule</h1>
                <div>
                    <button onClick={this.fetchPastLaunches}>Past Launches</button>
                    <button onClick={this.fetchUpcomingLaunches}>Upcoming Launches</button>
                </div>
                {error && <p>{error}</p>}
                {selectedLaunch && (
                    <div>
                        <h2>Launch Details</h2>
                        <p>{selectedLaunch.name}</p>
                        <p>{selectedLaunch.date}</p>
                        {/* Add additional launch details here */}
                    </div>
                )}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {launches.map((launch) => (
                            <Launch
                                key={launch.id}
                                launch={launch}
                                fetchLaunchDetails={this.fetchLaunchDetails}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;
