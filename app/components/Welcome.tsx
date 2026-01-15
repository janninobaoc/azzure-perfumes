'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
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

            {/* Floating Bottle with arrows */}
            <div className="relative w-[360px] h-[640px] md:w-[400px] md:h-[680px] z-20 pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={slides[current].id}
                        src={slides[current].image}
                        alt="Floating Bottle"
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ rotateX, rotateY }}
                        initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
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

                {/* Carousel arrows inside bottle container */}
                <button
                    onClick={prevSlide}
                    className="absolute
                     left-8
                     sm:-left-10
                     md:-left-16
                    top-1/2
                    -translate-y-1/2
                     p-2
                    cursor-pointer
                     pointer-events-auto
                 "
                >
                    <img
                        src="/img/arrow-left.png"
                        alt="Arrow Left"
                        className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24"
                    />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute
                     right-8
                     sm:-right-10
                     md:-right-16
                     top-1/2
                     -translate-y-1/2
                     p-2
                     cursor-pointer
                     pointer-events-auto
                 "
                >
                    <img
                        src="/img/arrow-right.png"
                        alt="Arrow Right"
                        className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24"
                    />
                </button>

            </div>

            {/* Bottom section: text left, button right */}
            <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-20 flex flex-col sm:flex-row justify-between items-start md:items-end px-4 md:px-6 gap-4 md:gap-0">
                {/* Text block on the left */}
                <div className="flex flex-col text-left">
                    <p className="
                        text-sm
                        sm:text-base
                        md:text-xl
                        text-white
                        mb-3
                        sm:mb-4
                        md:mb-6
                    ">
                        Clean Fragrance, Clear Conscience
                    </p>

                    <h1 className="
                        text-2xl
                        sm:text-3xl
                        md:text-5xl
                        lg:text-6xl
                        font-serif
                        font-bold
                        text-white
                        leading-tight
                    ">
                        A Timeless Scented Lifestyle
                    </h1>
                </div>

                {/* Button on the right */}
                <a
                    href="/shop"
                    className="    w-full sm:w-auto
                    text-center
                    px-8 py-3 md:px-12 md:py-4
                    bg-white rounded-full shadow-lg
                    text-gray-900 font-medium
                    hover:bg-gray-100 transition"
                >
                    Shop Now
                </a>
            </div>

        </section>
    );
};

export default Welcome;
