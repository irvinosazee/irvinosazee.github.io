'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        const mainElement = document.getElementById("main");
        if (mainElement) mainElement.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const mainElement = document.getElementById("main");
        if (!mainElement) return;

        const handleScroll = () => {
            setIsVisible(mainElement.scrollTop > 200);
        };

        mainElement.addEventListener('scroll', handleScroll);
        return () => mainElement.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className='fixed bottom-8 right-4 bg-gray-700 p-3 grid place-content-center rounded-full text-white shadow-lg cursor-pointer'
        >
            <motion.button
                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0}}
                exit={{ opacity: 0, scale: 0.7, y: 50 }}
                transition={{ 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <ArrowUp />
            </motion.button>
        </div>
    );
}
