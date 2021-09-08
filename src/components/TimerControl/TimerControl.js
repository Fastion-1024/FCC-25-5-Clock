import './TimerControl.css';

const TimerControl = ({ isRunning, onStartStop, onReset }) => {
    return (
        <div className='timer-control'>
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
