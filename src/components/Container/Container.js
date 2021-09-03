import { useClockContext } from '../../hooks/clockContext';
import { convertSeconds } from '../../lib/convertToTime';
import phaseTypes from '../../lib/phaseTypes';
import PhaseControl from '../PhaseControl/PhaseControl';
import timerStyles from '../../lib/timerStyles';
import Timer from '../Timer/Timer';
import TimerControl from '../TimerControl/TimerControl';

const Container = () => {
    const {
        sessionTime,
        breakTime,
        onIncrement,
        onDecrement,
        updatePhaseTime,
        timerValue,
        timerPhase,
        isRunning,
        startStopTimer,
        resetTimer,
        timerStyle,
    } = useClockContext();

    const getTimerComponent = () => {
        switch (timerStyle) {
            case timerStyles.SIMPLE:
                return <Timer value={convertSeconds(timerValue)} phase={timerPhase} />;

            default:
                return <Timer value={convertSeconds(timerValue)} phase={timerPhase} />;
        }
    };

    return (
        <section className='container'>
            <h1>25 + 5 Clock</h1>
            <div>
                <PhaseControl
                    label={phaseTypes.BREAK}
                    value={breakTime}
                    increment={onIncrement}
                    decrement={onDecrement}
                    updateValue={updatePhaseTime}
                    min={1}
                    max={60}
                />
                <PhaseControl
                    label={phaseTypes.SESSION}
                    value={sessionTime}
                    increment={onIncrement}
                    decrement={onDecrement}
                    updateValue={updatePhaseTime}
                    min={1}
                    max={60}
                />
            </div>
            {getTimerComponent()}
            <TimerControl isRunning={isRunning} onStartStop={startStopTimer} onReset={resetTimer} />
        </section>
    );
};

export default Container;
