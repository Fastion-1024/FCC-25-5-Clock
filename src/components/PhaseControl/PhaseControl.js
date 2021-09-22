import './PhaseControl.css';
import { CgArrowUpR, CgArrowDownR } from 'react-icons/cg';
import { useCallback } from 'react';

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

    const btnIconRef = useCallback((node) => {
        if (node !== null) {
            node.children[0].insertBefore(
                node.children[0].children[1],
                node.children[0].children[0]
            );
        }
    }, []);

    return (
        <div className='phase-control' onWheel={handleWheel}>
            <span id={`${label}-label`} className='label'>
                {label} length
            </span>
            <button
                id={`${label}-decrement`}
                className='decrement icon-btn'
                onClick={handleDecrement}
                ref={btnIconRef}
            >
                <CgArrowDownR className='icon-arrow-down' />
            </button>
            <span id={`${label}-length`} className='value'>
                {value}
            </span>
            <button
                id={`${label}-increment`}
                className='increment icon-btn'
                onClick={handleIncrement}
                ref={btnIconRef}
            >
                <CgArrowUpR className='icon-arrow-up' />
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
