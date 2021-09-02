import React, { useState, useEffect, useRef } from 'react';

// Accurate Interval from FCC Example
const accurateInterval = function (fn, time) {
    var cancel, nextAt, timeout, wrapper;
    nextAt = new Date().getTime() + time;
    timeout = null;
    wrapper = function () {
        nextAt += time;
        timeout = setTimeout(wrapper, nextAt - new Date().getTime());
        return fn();
    };
    cancel = function () {
        return clearTimeout(timeout);
    };
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return {
        cancel: cancel,
    };
};

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            // Original setInterval Implementation
            // let id = setInterval(tick, delay);
            // return () => clearInterval(id);

            // Using Accurate Interval from FCC
            let id = accurateInterval(tick, delay);
            return () => id.cancel();
        }
    }, [delay]);
}

export default useInterval;
