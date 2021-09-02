import { useClockContext } from '../../hooks/clockContext';
import { convertSeconds } from '../../lib/convertToTime';
import phaseTypes from '../../lib/phaseTypes';
import PhaseControl from '../PhaseControl/PhaseControl';
import Timer from '../Timer/Timer';
import TimerControl from '../TimerControl/TimerControl';

const BasicClock = () => {
    const {
        sessionTime,
        breakTime,
        onIncrement,
        onDecrement,
        timerValue,
        timerPhase,
        isRunning,
        startStopTimer,
        resetTimer,
    } = useClockContext();

    return (
        <section>
            <div>
                <PhaseControl
                    label={phaseTypes.BREAK}
                    value={breakTime}
                    increment={onIncrement}
                    decrement={onDecrement}
                    min={1}
                    max={60}
                />
                <PhaseControl
                    label={phaseTypes.SESSION}
                    value={sessionTime}
                    increment={onIncrement}
                    decrement={onDecrement}
                    min={1}
                    max={60}
                />
            </div>
            <Timer value={convertSeconds(timerValue)} phase={timerPhase} />
            <TimerControl isRunning={isRunning} onStartStop={startStopTimer} onReset={resetTimer} />
        </section>
    );
};

export default BasicClock;
