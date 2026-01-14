'use client';

import { motion, useScroll, useSpring, useTransform  } from 'framer-motion';
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Decorative from "./components/Decorative";
import Products from "./components/Products";
import PromotionalBanner from "./components/PromotionalBanner";
import Features from "./components/Features";
import Products2 from "./components/Products2";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function LandingPage() {
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 50, damping: 20, mass: 0.5 });

  // Convert the MotionValue to CSS-compatible string
  const yTransform = useTransform(smoothY, (val) => `-${val}px`);

  return (
    <>
      <Navbar />

      {/* Motion wrapper for smooth scroll */}
      <motion.main style={{ y: yTransform }}>
        <Welcome />
        <About />
        {/* Uncomment additional sections as needed */}
        {/* <Decorative/>
        <Products/>
        <PromotionalBanner/>
        <Features/>
        <Products2/>
        <Decorative/>
        <Gallery/> */}
        {/* <Footer /> */}
      </motion.main>
    </>
  );
}
