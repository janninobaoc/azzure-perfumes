'use client';

import { ShoppingCartIcon, UserIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // 300px is the point when navbar becomes fixed
            if (window.scrollY > 300) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`flex justify-between items-center px-16 py-4 w-full z-50 transition-all duration-300
        ${isFixed ? 'fixed top-0 left-0 shadow-lg'
                    : 'absolute left-0'}`}
        >
            {/* Left: Logo with its own background */}
            <div className="px-6 py-3 rounded-full bg-[rgba(155,221,253,0.5)]">
                <span className="text-2xl font-serif text-gray-800">azzure</span>
            </div>

            {/* Right: Nav + Icons with its own background */}
            <nav className="flex items-center gap-30 rounded-full bg-[rgba(155,221,253,0.5)]">
                <div className="flex items-center gap-12 px-6 py-3">
                    <a href="/" className="px-4 py-2 rounded-full bg-white shadow hover:bg-gray-100 text-gray-700 transition">
                        Home
                    </a>
                    <a href="/story" className="text-gray-700 hover:text-gray-900 transition">
                        Our Story
                    </a>
                    <a href="/shop" className="text-gray-700 hover:text-gray-900 transition">
                        Shop
                    </a>
                </div>
                <div className="flex items-center gap-6 px-6 py-3">
                    <UserIcon className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900 transition" />
                    <ShoppingCartIcon className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900 transition" />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
