import { useEffect, useRef, useState } from 'react';

const useTranslateXimg = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const prevScrollPosition = useRef(0);
    const [translateX, setTranslateX] = useState(80);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > prevScrollPosition.current) {
            setScrollDirection('down');
        } else if (currentScrollPosition < prevScrollPosition.current) {
            setScrollDirection('up');
        }

        prevScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;

        setScrollPosition(currentScrollPosition);
    };

    const handleTranslateX = () => {
        if (scrollDirection === 'down' && scrollPosition >= 1500) {
            setTranslateX(translateX <= 0 ? 0 : translateX - 1);
        } else if (scrollDirection === 'up') {
            setTranslateX(translateX >= 80 ? 80 : translateX + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);

        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return {
        translateX
    };
};

export default useTranslateXimg;
