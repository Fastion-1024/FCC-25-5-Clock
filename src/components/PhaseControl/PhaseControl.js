const PhaseControl = ({ label, value, decrement, increment, min, max }) => {
    const handleIncrement = () => {
        if (max === undefined) increment(label);
        if (value < max) increment(label);
    };
    const handleDecrement = () => {
        if (min === undefined) decrement(label);
        if (value > min) decrement(label);
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
        <div onWheel={handleWheel}>
            <span id={`${label}-label`}>{label} length</span>
            <button id={`${label}-decrement`} onClick={handleDecrement}>
                Decrease
            </button>
            <span id={`${label}-length`}>{value}</span>
            <button id={`${label}-increment`} onClick={handleIncrement}>
                Increase
            </button>
        </div>
    );
};

export default PhaseControl;
