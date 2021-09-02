const TimerControl = ({ isRunning, onStartStop, onReset }) => {
    return (
        <div>
            <button id='start_stop' onClick={onStartStop}>
                {isRunning ? 'Pause' : 'Start'}
            </button>
            <button id='reset' onClick={onReset}>
                Reset
            </button>
        </div>
    );
};

export default TimerControl;
