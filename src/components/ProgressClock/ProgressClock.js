import { convertSeconds } from '../../lib/convertToTime';
import './ProgressClock.css';

const ProgressClock = ({ time, minutesMax }) => {
    const minutes = time / 60;
    const seconds = time % 60;

    // For now times the size by 16 to get the rem value.
    const secSize = 100;
    const strokeWidth = 10;
    const secRadius = (secSize - strokeWidth) / 2;
    const secCircumference = secRadius * 2 * Math.PI;

    // Work out the offset by getting the percentage of Pi * radius
    const secPercentage = 100 - (seconds / 60) * 100;
    // const secStrokeDashOffset = ((Math.PI * 2) / 100) * secPercentage * secRadius;
    const secStrokeDashOffset =
        minutes === minutesMax && seconds === 0
            ? 0
            : minutes === 0 && seconds === 0
            ? ((Math.PI * 2) / 100) * 100 * secRadius
            : seconds === 0
            ? 0
            : ((Math.PI * 2) / 100) * secPercentage * secRadius;

    // Create minute circle
    const minSize = 75;
    const minRadius = (minSize - strokeWidth) / 2;
    const minCircumference = minRadius * 2 * Math.PI;
    const minXY = (secSize - minSize) / 2;

    const minPercentage = 100 - (minutes / minutesMax) * 100;
    const minStrokeDashOffset = ((Math.PI * 2) / 100) * minPercentage * minRadius;

    return (
        <div className='progress-clock'>
            {/* 
                All circles are rotated from the center origin to -90degs to start from top.
                Minute circles are also translated to center.
            */}
            <svg viewBox='0 0 100 100'>
                <circle
                    className='progress-clock-background'
                    cx={secSize / 2}
                    cy={secSize / 2}
                    r={secRadius}
                    strokeWidth={strokeWidth / 1.4}
                />
                {/* Seconds Background Circle */}
                <circle
                    className='progress-clock-seconds background'
                    cx={secSize / 2}
                    cy={secSize / 2}
                    r={secRadius}
                    strokeWidth={strokeWidth / 1.4}
                    transform={`rotate(-90 ${secSize / 2} ${secSize / 2})`}
                />
                {/* Seconds Progress Circle */}
                <circle
                    className='progress-clock-seconds progress'
                    cx={secSize / 2}
                    cy={secSize / 2}
                    r={secRadius}
                    strokeDasharray={`${secCircumference} ${secCircumference}`}
                    strokeWidth={strokeWidth}
                    transform={`rotate(-90 ${secSize / 2} ${secSize / 2})`}
                    style={{
                        transition: 'all 0.3s',
                        strokeDashoffset: `${secStrokeDashOffset}`,
                    }}
                />

                {/* Minutes Background Circle */}
                <circle
                    className='progress-clock-minutes background'
                    cx={minSize / 2}
                    cy={minSize / 2}
                    r={minRadius}
                    strokeWidth={strokeWidth / 1.4}
                    transform={`rotate(-90 ${secSize / 2} ${
                        secSize / 2
                    }) translate(${minXY}, ${minXY})`}
                />
                {/* Minutes Progress Circle */}
                <circle
                    className='progress-clock-minutes progress'
                    cx={minSize / 2}
                    cy={minSize / 2}
                    r={minRadius}
                    strokeDasharray={`${minCircumference} ${minCircumference}`}
                    strokeWidth={strokeWidth}
                    transform={`rotate(-90 ${secSize / 2} ${
                        secSize / 2
                    }) translate(${minXY}, ${minXY})`}
                    style={{
                        transition: 'all 0.3s',
                        strokeDashoffset: `${minStrokeDashOffset}`,
                    }}
                />
            </svg>
            <span>{convertSeconds(time)}</span>
        </div>
    );
};

export default ProgressClock;
