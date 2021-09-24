import './TimerControl.css';
import { CgPlayButtonR, CgPlayPauseR, CgPlayStopR } from 'react-icons/cg';
import { useCallback } from 'react';

const TimerControl = ({ isRunning, onStartStop, onReset }) => {
    const btnIconRef = useCallback((node) => {
        if (node !== null) {
            node.children[0].insertBefore(
                node.children[0].children[1],
                node.children[0].children[0]
            );
        }
    }, []);

    const btnPauseRef = useCallback((node) => {
        if (node !== null) {
            node.children[0].insertBefore(
                node.children[0].children[2],
                node.children[0].children[0]
            );
        }
    }, []);

    return (
        <div className='timer-control'>
            <button
                id='start_stop'
                className='icon-btn'
                onClick={onStartStop}
                ref={isRunning ? btnPauseRef : null}
            >
                {isRunning ? (
                    <>
                        <CgPlayPauseR className='icon-pause' aria-hidden={true} focusable={false} />
                        <span className='visually-hidden'>Pause</span>
                    </>
                ) : (
                    <>
                        <CgPlayButtonR className='icon-play' aria-hidden={true} focusable={false} />
                        <span className='visually-hidden'>Start</span>
                    </>
                )}
            </button>
            <button id='reset' className='icon-btn' onClick={onReset} ref={btnIconRef}>
                <CgPlayStopR className='icon-stop' aria-hidden={true} focusable={false} />
                <span className='visually-hidden'>Reset</span>
            </button>
        </div>
    );
};

export default TimerControl;
