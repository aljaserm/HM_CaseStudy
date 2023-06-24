const PastLaunches = () => {
    const [pastLaunches, setPastLaunches] = useState([]);

    useEffect(() => {
        const fetchPastLaunches = async () => {
            try {
                const response = await axios.get('/api/launches/past');
                setPastLaunches(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPastLaunches();
    }, []);

    return (
        <div>
            <h1>Past Launches</h1>
            {pastLaunches.map((launch) => (
                <div key={launch.id}>
                    <h3>{launch.missionName}</h3>
                    <p>{launch.launchDate}</p>
                </div>
            ))}
        </div>
    );
};

export default PastLaunches;
