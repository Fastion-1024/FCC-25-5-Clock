import './AnalogueClock.css';
import useResizeObserver from '../../hooks/useResizeObserver';

const AnalogueClock = ({ time }) => {
    const [containerRef, dimensions] = useResizeObserver();
    const size = dimensions.width < dimensions.height ? dimensions.width : dimensions.height;

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const secondHandDeg = (seconds / 60) * 360;
    // const minuteHandDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const minuteHandDeg = (minutes / 60) * 360;

    return (
        <div className='analogue-clock-container' ref={containerRef}>
            <div className='analogue-clock' style={{ width: `${size}px`, height: `${size}px` }}>
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
        </div>
    );
};

export default AnalogueClock;
