import React, { useContext, useReducer } from 'react';
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
        </ClockContext.Provider>
    );
};

export const useClockContext = () => {
    return useContext(ClockContext);
};

export default ClockProvider;
