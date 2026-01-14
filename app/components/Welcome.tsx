'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar';
import { useState, useEffect } from 'react';

const Welcome = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0)

    const slides = [
        { id: 1, image: '/img/perfume-1.png' },
        { id: 2, image: '/img/perfume-2.png' },
        { id: 3, image: '/img/perfume-3.png' },
    ];

    const nextSlide = () => {
        setDirection(1)
        setCurrent((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setDirection(-1)
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    }
    /* Cursor-follow motion */
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useTransform(mouseY, [-200, 200], [10, -10])
    const rotateY = useTransform(mouseX, [-200, 200], [-10, 10])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - window.innerWidth / 2)
            mouseY.set(e.clientY - window.innerHeight / 2)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <section
            className="relative flex flex-col items-center h-[80vh] rounded-3xl mx-12 mt-8 overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/img/bg-hero.png')" }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/15 z-0"></div>
            {/* z-0 ensures it's behind other content */}

            {/* Navbar inside hero */}
            {/* <div className="w-full z-20">
                <Navbar />
            </div> */}

            {/* Floating Bottle */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={slides[current].id}
                    src={slides[current].image}
                    alt="Floating Bottle"
                    className="absolute z-20 w-[440px] pointer-events-none"
                    style={{ rotateX, rotateY }}
                    initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }} // direction-aware
                    animate={{ opacity: 1, x: 0, y: [0, -24, 0] }}
                    exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                    transition={{
                        x: { type: 'tween', duration: 0.5 },
                        opacity: { duration: 0.5 },
                        y: {
                            repeat: Infinity,
                            duration: 4,
                            ease: 'easeInOut',
                        },
                    }}
                />
            </AnimatePresence>

            {/* Carousel arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-170 top-1/2 -translate-y-1/2 p-2 z-20 cursor-pointer"
            >
                <img src="/img/arrow-left.png" alt="Arrow Left" className="w-24 h-24" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-170 top-1/2 -translate-y-1/2 p-2 z-20 cursor-pointer"
            >
                <img src="/img/arrow-right.png" alt="Arrow Right" className="w-24 h-24" />
            </button>


            {/* Bottom section: text left, button right */}
            <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-between items-end px-6">
                {/* Text block on the left */}
                <div className="flex flex-col text-left">
                    <p className="text-2xl text-white mb-6">Clean Fragrance, Clear Conscience</p>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">
                        A Timeless Scented Lifestyle
                    </h1>
                </div>

                {/* Button on the right */}
                <a
                    href="/shop"
                    className="px-12 py-4 bg-white rounded-full shadow-lg text-gray-900 font-medium hover:bg-gray-100 transition"
                >
                    Shop Now
                </a>
            </div>

        </section>
    );
};

export default Welcome;
