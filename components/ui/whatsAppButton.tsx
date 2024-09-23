/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import { PhoneCallIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <a
            href=""
            className={`fixed bottom-4 right-4 p-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            aria-label="Action link"
        >
            <PhoneCallIcon />
        </a>
    )
}
