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
        if (observer && observer.current) {
            observer.current.observe(containerRef.current);
        }
        return () => {
            if (observer && observer.current) {
                observer.current.unobserve(containerRef.current);
            }
        };
    }, [containerRef]);

    return [containerRef, dimensions];
};

export default useResizeObserver;
