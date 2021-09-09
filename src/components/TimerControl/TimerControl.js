import './TimerControl.css';
import { CgPlayButtonR, CgPlayPauseR, CgPlayStopR } from 'react-icons/cg';

const TimerControl = ({ isRunning, onStartStop, onReset }) => {
    return (
        <div className='timer-control'>
            <button id='start_stop' className='icon-btn' onClick={onStartStop}>
                {isRunning ? <CgPlayPauseR /> : <CgPlayButtonR />}
            </button>
            <button id='reset' className='icon-btn' onClick={onReset}>
                <CgPlayStopR />
            </button>
        </div>
    );
};

export default TimerControl;
