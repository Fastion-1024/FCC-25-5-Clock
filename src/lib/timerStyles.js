const timerStyles = {
    SIMPLE: 'SIMPLE',
    PROGRESS: 'PROGRESS',
    FLIP: 'FLIP',
    ANALOGUE: 'ANALOGUE',
    SLIDER: 'SLIDER',
};

const getStylesArray = () => {
    return Object.keys(timerStyles).map((key) => timerStyles[key]);
};

export default timerStyles;
export { getStylesArray };
