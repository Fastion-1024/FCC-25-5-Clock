import './SliderClock.css';

const SliderClock = ({ time }) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const minuteTens = Math.floor(minutes / 10);
    const minuteSingles = minutes - minuteTens * 10;
    const secondTens = Math.floor(seconds / 10);
    const secondSingles = seconds - secondTens * 10;

    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className='slider-clock'>
            <div className='minute-tens'>
                {arr.map((item, index) => {
                    return (
                        <span
                            key={index}
                            className={'slider-num'}
                            style={{ transform: `translateY(calc(${minuteTens - index} * 4rem))` }}
                        >
                            {item}
                        </span>
                    );
                })}
            </div>

            <div className='minute-singles'>
                {arr.map((item, index) => {
                    return (
                        <span
                            key={index}
                            className={'slider-num'}
                            style={{
                                transform: `translateY(calc(${minuteSingles - index} * 4rem))`,
                            }}
                        >
                            {item}
                        </span>
                    );
                })}
            </div>
            <div className='slider-clock-divider'>:</div>
            <div className='seconds-tens'>
                {arr.map((item, index) => {
                    return (
                        <span
                            key={index}
                            className={'slider-num'}
                            style={{ transform: `translateY(calc(${secondTens - index} * 4rem))` }}
                        >
                            {item}
                        </span>
                    );
                })}
            </div>
            <div className='seconds-singles'>
                {arr.map((item, index) => {
                    return (
                        <span
                            key={index}
                            className={'slider-num'}
                            style={{
                                transform: `translateY(calc(${secondSingles - index} * 4rem))`,
                            }}
                        >
                            {item}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default SliderClock;
