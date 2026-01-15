'use client';

import { ShoppingCartIcon, UserIcon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`w-full z-50 transition-all duration-300
            ${isFixed
                    ? 'fixed top-0 left-0 bg-gray/50 backdrop-blur-sm shadow-lg'
                    : 'absolute left-0'}`}
        >
            {/* Top bar */}
            <div className="flex justify-between items-center px-14 sm:px-8 md:px-16 py-4">
                {/* Logo */}
                <div className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[rgba(155,221,253,0.5)]">
                    <span className="text-xl sm:text-2xl font-serif text-gray-800">
                        azzure
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-12 rounded-full bg-[rgba(155,221,253,0.5)]">
                    <div className="flex items-center gap-6 px-6 py-3">
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

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-full bg-[rgba(155,221,253,0.5)]"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-14 pb-6">
                    <div className="flex flex-col gap-4 rounded-2xl bg-[rgba(155,221,253,0.5)] p-6">
                        <a href="/" className="text-gray-800 font-medium">
                            Home
                        </a>
                        <a href="/story" className="text-gray-800 font-medium">
                            Our Story
                        </a>
                        <a href="/shop" className="text-gray-800 font-medium">
                            Shop
                        </a>

                        <div className="flex gap-6 pt-4">
                            <UserIcon className="w-6 h-6 text-gray-700" />
                            <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
