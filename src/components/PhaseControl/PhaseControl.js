const PhaseControl = ({ label, value, onDecrease, onIncrease }) => {
    return (
        <div>
            <span>{label}</span>
            <button onClick={onDecrease}>Decrease</button>
            <span>{value}</span>
            <button onClick={onIncrease}>Increase</button>
        </div>
    );
};

export default PhaseControl;
