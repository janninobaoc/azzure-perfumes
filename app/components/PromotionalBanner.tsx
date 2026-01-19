'use client';

import { motion } from "framer-motion";

const PromotionalBanner = () => {
  const text = "Special Offer! • Get 20% off on your first purchase • Use code: WELCOME20 •";

  return (
    <div className="w-full overflow-hidden bg-white py-8 border-y border-[#E5E1D8] text-[#695F4F] text-lg md:text-3xl font-medium">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,   // adjust speed here
          ease: "linear",
        }}
      >
        {/* Duplicate the text 2 times for seamless scrolling */}
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
      </motion.div>
    </div>
  );
};

export default PromotionalBanner;
