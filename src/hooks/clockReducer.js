import phaseTypes from '../lib/phaseTypes';
import actions from './clockActions';

const reducer = (state, action) => {
    console.log(action.type, '-', action.payload);

    switch (action.type) {
        case actions.INCREMENT_BREAK:
            return { ...state, breakTime: state.breakTime + 1 };
        case actions.DECREMENT_BREAK:
            return { ...state, breakTime: state.breakTime - 1 };
        case actions.UPDATE_BREAK:
            return { ...state, breakTime: action.payload };

        case actions.INCREMENT_SESSION:
            return { ...state, sessionTime: state.sessionTime + 1 };
        case actions.DECREMENT_SESSION:
            return { ...state, sessionTime: state.sessionTime - 1 };
        case actions.UPDATE_SESSION:
            return { ...state, sessionTime: action.payload };

        case actions.START_TIMER:
            return { ...state, isRunning: true };
        case actions.STOP_TIMER:
            return { ...state, isRunning: false };
        case actions.RESET_TIMER:
            return {
                ...state,
                isRunning: false,
                breakTime: 5,
                sessionTime: 25,
                timerValue: 25 * 60,
                timerPhase: phaseTypes.SESSION,
            };
        case actions.DECREMENT_TIMER:
            return { ...state, timerValue: state.timerValue - 1 };
        case actions.SWITCH_TO_BREAK_PHASE:
            return { ...state, timerValue: state.breakTime * 60, timerPhase: phaseTypes.BREAK };
        case actions.SWITCH_TO_SESSION_PHASE:
            return { ...state, timerValue: state.sessionTime * 60, timerPhase: phaseTypes.SESSION };

        case actions.UPDATE_STYLE:
            return { ...state, timerStyle: action.payload };

        default:
            throw new Error('No matching action found!');
    }
};

export default reducer;
