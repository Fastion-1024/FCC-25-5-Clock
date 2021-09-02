const Timer = ({ phase, value }) => {
    return (
        <div>
            <h3 id='timer-label'>{phase}</h3>
            <h2 id='time-left'>{value}</h2>
        </div>
    );
};

export default Timer;
