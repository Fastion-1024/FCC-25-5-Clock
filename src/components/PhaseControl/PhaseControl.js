import './PhaseControl.css';
import { CgArrowUpR, CgArrowDownR } from 'react-icons/cg';

const PhaseControl = ({ label, value, decrement, increment, updateValue, min, max }) => {
    const handleIncrement = () => {
        if (max === undefined) increment(label);
        if (value < max) increment(label);
    };
    const handleDecrement = () => {
        if (min === undefined) decrement(label);
        if (value > min) decrement(label);
    };

    const handleRangeChange = (e) => {
        updateValue(label, e.target.value);
    };

    const handleWheel = (e) => {
        // Scroll Up
        if (e.deltaY < 0) {
            handleIncrement();
        }
        // Scroll Down
        else if (e.deltaY > 0) {
            handleDecrement();
        }
    };

    return (
        <div className='phase-control' onWheel={handleWheel}>
            <span id={`${label}-label`} className='label'>
                {label} length
            </span>
            <button
                id={`${label}-decrement`}
                className='decrement icon-btn'
                onClick={handleDecrement}
            >
                <CgArrowDownR />
            </button>
            <span id={`${label}-length`} className='value'>
                {value}
            </span>
            <button
                id={`${label}-increment`}
                className='increment icon-btn'
                onClick={handleIncrement}
            >
                <CgArrowUpR />
            </button>
            <input
                type='range'
                min={min}
                max={max}
                step='1'
                value={value}
                onChange={handleRangeChange}
                className='slider'
            />
        </div>
    );
};

export default PhaseControl;
