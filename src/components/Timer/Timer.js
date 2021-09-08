import './Timer.css';

const Timer = ({ phase, value }) => {
    return (
        <div className='timer-clock'>
            <h3 id='timer-label' className='label'>
                {phase}
            </h3>
            <h2 id='time-left' className='value'>
                {value}
            </h2>
        </div>
    );
};

export default Timer;
