const Timer = ({ value, phase }) => {
    return (
        <div>
            <h3>{phase}</h3>
            <h2>{value}</h2>
        </div>
    );
};

export default Timer;
