import React, { useContext, useReducer, useRef } from 'react';
import reducer from './clockReducer';
import actions from './clockActions';
import useInterval from './useInterval';
import phaseTypes from '../lib/phaseTypes';

const ClockContext = React.createContext();
const initialState = {
    sessionTime: 25,
    breakTime: 5,
    isRunning: false,
    timerValue: 25 * 60,
    timerPhase: phaseTypes.SESSION,
};

const ClockProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const audioRef = useRef(null);

    const onIncrement = (phaseType) => {
        if (!state.isRunning) {
            if (phaseType === phaseTypes.BREAK) dispatch({ type: actions.INCREMENT_BREAK });
            if (phaseType === phaseTypes.SESSION) {
                dispatch({ type: actions.INCREMENT_SESSION });
                dispatch({ type: actions.SWITCH_TO_SESSION_PHASE });
            }
        }
    };

    const onDecrement = (phaseType) => {
        if (!state.isRunning) {
            if (phaseType === phaseTypes.BREAK) dispatch({ type: actions.DECREMENT_BREAK });
            if (phaseType === phaseTypes.SESSION) {
                dispatch({ type: actions.DECREMENT_SESSION });
                dispatch({ type: actions.SWITCH_TO_SESSION_PHASE });
            }
        }
    };

    const startStopTimer = () => {
        if (state.isRunning) {
            dispatch({ type: actions.STOP_TIMER });
        } else {
            dispatch({ type: actions.START_TIMER });
        }
    };

    const resetTimer = () => {
        dispatch({ type: actions.RESET_TIMER });
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    };

    useInterval(
        () => {
            if (state.timerValue === 0) {
                if (state.timerPhase === phaseTypes.SESSION) {
                    dispatch({ type: actions.SWITCH_TO_BREAK_PHASE });
                }
                if (state.timerPhase === phaseTypes.BREAK) {
                    dispatch({ type: actions.SWITCH_TO_SESSION_PHASE });
                }
                audioRef.current.play();
            } else {
                dispatch({ type: actions.DECREMENT_TIMER });
            }
        },
        state.isRunning ? 1000 : null
    );

    return (
        <ClockContext.Provider
            value={{
                ...state,
                onIncrement,
                onDecrement,
                startStopTimer,
                resetTimer,
            }}
        >
            {children}
            <audio
                id='beep'
                preload='auto'
                ref={audioRef}
                src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
            />
        </ClockContext.Provider>
    );
};

export const useClockContext = () => {
    return useContext(ClockContext);
};

export default ClockProvider;
