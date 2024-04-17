import { useState, useEffect } from 'react';

const useNavbarVisibility = () =>
{
    const [scrolling, setScrolling] = useState(false);

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            const scrollTop = window.scrollY;
            const triggerPoint = 700;
            if (scrollTop > triggerPoint) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
        {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrolling;
};

export default useNavbarVisibility;
