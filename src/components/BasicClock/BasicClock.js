import PhaseControl from '../PhaseControl/PhaseControl';
import Timer from '../Timer/Timer';
import TimerControl from '../TimerControl/TimerControl';

const BasicClock = () => {
    return (
        <section>
            <div>
                <PhaseControl />
                <PhaseControl />
            </div>
            <Timer />
            <TimerControl />
        </section>
    );
};

export default BasicClock;
