import { useState, useEffect } from 'react';

export default function useIsMobile() {
    const [ isMobile, setIsMobile ] = useState(false);

    useEffect(() => {
        function handleWidthChange() {
            if (window.innerWidth < 800) {
                console.log('Is mobile');

                return setIsMobile(true);
            }

            return setIsMobile(false);
        }

        window.addEventListener('resize', handleWidthChange);
        handleWidthChange();

        return () => window.removeEventListener('resize', handleWidthChange);
    }, []);

    return isMobile;
}
