import React, { useState } from 'react';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import './CarouselContainer.css';

const CarouselContainer = ({ children }) => {
    const [current, setCurrent] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const prevClicked = () => {
        const newIndex = current - 1;
        setCurrent(newIndex < 0 ? children.length - 1 : newIndex);
    };

    const nextClicked = () => {
        const newIndex = current + 1;
        setCurrent(newIndex > children.length - 1 ? 0 : newIndex);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchEnd === 0) return;

        if (touchStart - touchEnd > 150) {
            // do your stuff here for left swipe
            nextClicked();
        }

        if (touchStart - touchEnd < -150) {
            // do your stuff here for right swipe
            prevClicked();
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <div
            className='carousel-container'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <button className='carousel-btn-prev icon-btn' onClick={prevClicked}>
                <VscChevronLeft aria-hidden={true} focusable={false} />
                <span className='visually-hidden'>Previous Style</span>
            </button>
            <button className='carousel-btn-next icon-btn' onClick={nextClicked}>
                <VscChevronRight aria-hidden={true} focusable={false} />
                <span className='visually-hidden'>Next Style</span>
            </button>
            {children.map((child, index) => {
                return (
                    <div
                        key={index}
                        className={`carousel-child ${
                            index < current ? 'prev' : index > current ? 'next' : 'active'
                        }`}
                    >
                        {child}
                    </div>
                );
            })}
        </div>
    );
};

export default CarouselContainer;
