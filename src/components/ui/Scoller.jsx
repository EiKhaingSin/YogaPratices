import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    return (
        <div className="fixed bottom-8 right-8 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="p-3 rounded-full bg-[#2D2A28] text-white shadow-2xl hover:bg-[#C5B1A9] transition-all duration-300 active:scale-95 animate-bounce-subtle"
                >
                    <ArrowUp size={20} />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;