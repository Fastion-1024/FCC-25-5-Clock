import { useClockContext } from '../../hooks/clockContext';
import { convertSeconds } from '../../lib/convertToTime';
import phaseTypes from '../../lib/phaseTypes';
import timerStyles from '../../lib/timerStyles';
import PhaseControl from '../PhaseControl/PhaseControl';
import Timer from '../Timer/Timer';
import AnalogueClock from '../AnalogueClock/AnalogueClock';
import SliderClock from '../SliderClock/SliderClock';
import ProgressClock from '../ProgressClock/ProgressClock';
import TimerControl from '../TimerControl/TimerControl';
import './Container.css';
import CarouselContainer from '../CarouselContainer/CarouselContainer';

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
        updateTimerStyle,
    } = useClockContext();

    const getTimerComponent = () => {
        switch (timerStyle) {
            case timerStyles.SIMPLE:
                return <Timer value={convertSeconds(timerValue)} phase={timerPhase} />;

            case timerStyles.ANALOGUE:
                return <AnalogueClock time={timerValue} />;

            case timerStyles.SLIDER:
                return <SliderClock time={timerValue} />;

            case timerStyles.PROGRESS:
                return (
                    <ProgressClock
                        time={timerValue}
                        minutesMax={timerPhase === phaseTypes.SESSION ? sessionTime : breakTime}
                    />
                );

            default:
                return <Timer value={convertSeconds(timerValue)} phase={timerPhase} />;
        }
    };

    return (
        <section className='container'>
            <h1>25 + 5 Clock</h1>
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

            <CarouselContainer>
                <Timer value={convertSeconds(timerValue)} phase={timerPhase} />
                <SliderClock time={timerValue} />
                <AnalogueClock time={timerValue} />
                <ProgressClock
                    time={timerValue}
                    minutesMax={timerPhase === phaseTypes.SESSION ? sessionTime : breakTime}
                />
            </CarouselContainer>

            <TimerControl isRunning={isRunning} onStartStop={startStopTimer} onReset={resetTimer} />
        </section>
    );
};

export default Container;
