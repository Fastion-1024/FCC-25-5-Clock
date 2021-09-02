const convertSeconds = (value) => {
    let minutes = Math.floor(value / 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let seconds = Math.floor(value % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${minutes}:${seconds}`;
};

const convertMiliiSeconds = (value) => {
    let minutes = Math.floor((value % (1000 * 60 * 60)) / (1000 * 60));
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let seconds = Math.floor((value % (1000 * 60)) / 1000);
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${minutes}:${seconds}`;
};

export { convertSeconds, convertMiliiSeconds };
