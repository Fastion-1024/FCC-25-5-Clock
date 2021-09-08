import './AnalogueClock.css';

const AnalogueClock = ({ time }) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const secondHandDeg = (seconds / 60) * 360;
    // const minuteHandDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const minuteHandDeg = (minutes / 60) * 360;

    console.log(secondHandDeg);
    console.log(minuteHandDeg);

    return (
        <div className='analogue-clock'>
            <div className='outer-face'>
                <span className='mark mark-one' />
                <span className='mark mark-two' />
                <span className='mark mark-three' />
                <span className='mark mark-four' />
                <div className='inner-face'>
                    <span
                        className='hand second-hand'
                        style={{ transform: `rotate(${secondHandDeg}deg)` }}
                    />
                    <span
                        className='hand minute-hand'
                        style={{ transform: `rotate(${minuteHandDeg}deg)` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AnalogueClock;
