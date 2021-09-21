import { useRef, useState, useEffect } from 'react';

const useResizeObserver = () => {
    const [dimensions, setDimensions] = useState({});
    const containerRef = useRef(null);
    const observer = useRef(
        new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            setDimensions({ width, height });
        })
    );
    useEffect(() => {
        const observerRefValue = observer;
        const elementRef = containerRef;
        if (observerRefValue && observerRefValue.current) {
            observerRefValue.current.observe(elementRef.current);
        }
        return () => {
            if (observerRefValue && observerRefValue.current) {
                observerRefValue.current.unobserve(elementRef.current);
            }
        };
    }, [containerRef]);

    return [containerRef, dimensions];
};

export default useResizeObserver;
