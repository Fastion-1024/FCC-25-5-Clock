import './Timer.css';
import { useCallback } from 'react';

const Timer = ({ phase, value, isRunning }) => {
    const indicatorRef = useCallback(
        (node) => {
            if (node !== null) {
                if (isRunning) {
                    node.classList.add('animate');
                } else {
                    node.classList.remove('animate');
                }
            }
        },
        [isRunning]
    );

    return (
        <div className='timer-clock'>
            <span className='leftIndicator' ref={indicatorRef} />
            <span className='rightIndicator' ref={indicatorRef} />
            <span className='topIndicator' ref={indicatorRef} />
            <span className='bottomIndicator' ref={indicatorRef} />

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
