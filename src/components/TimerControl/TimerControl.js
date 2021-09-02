const TimerControl = ({ onStartStop, onReset }) => {
    return (
        <div>
            <button onClick={onStartStop}>Start</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
};

export default TimerControl;
