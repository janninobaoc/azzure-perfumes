'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Decorative = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      className="w-full h-64 md:h-96 relative"
      style={{ background: 'linear-gradient(0deg, #CCCAC5 0%, rgba(254,252,246,0) 95%)' }}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
    </motion.section>
  );
};

export default Decorative;
