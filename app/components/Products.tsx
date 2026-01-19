'use client';

import { motion } from "framer-motion";

const productsData = [
    { id: 1, title: "Floral Bliss", img: "/img/product-1.png" },
    { id: 2, title: "Citrus Charm", img: "/img/product-1.png" },
    { id: 3, title: "Woody Elegance", img: "/img/product-1.png" },
    { id: 4, title: "Fresh Harmony", img: "/img/product-1.png" },
];

const Products = () => {
    return (
        <section
            className="relative py-24 px-4 md:px-16"
            style={{
                background: `
          radial-gradient(circle at 62.05% 32.86%, rgba(251,234,209,0.8) 0%, rgba(251,234,209,0) 18%),
          radial-gradient(circle at 5.36% 89.93%, rgba(251,234,209,0.9) 0%, rgba(251,234,209,0) 7%),
          radial-gradient(circle at 93.15% 18.73%, rgba(251,234,209,0.52) 0%, rgba(251,234,209,0) 9%),
          radial-gradient(circle at 0% 71.89%, #CCCAC5 0%, rgba(204,202,197,0) 35%),
          radial-gradient(circle at 0% 0%, #CCCAC5 0%, rgba(204,202,197,0) 35%),
          radial-gradient(circle at 20.76% 98.88%, #CCCAC5 0%, rgba(204,202,197,0) 35%),
          radial-gradient(circle at 98.30% 72.85%, #FBEAD1 0%, rgba(251,234,209,0) 14%),
          radial-gradient(circle at 0% 44.68%, #FBEAD1 0%, rgba(251,234,209,0) 14%),
          radial-gradient(circle at 48.90% 49.52%, #CCCAC5 0%, rgba(204,202,197,0) 100%)
        `,
            }}
        >
            {/* Sticky Header */}
            <h2 className="text-3xl md:text-[74px] text-[#302B23] font-bold text-center sticky top-24 z-10 bg-transparent py-4">
                Shop By Category
            </h2>

            {/* Product containers */}
            <div className="mt-16 flex flex-col max-w-5xl mx-auto">
                {productsData.map((product, idx) => (
                    <motion.div
                        key={product.id}
                        className={`flex flex-col md:flex-row items-center gap-8
              ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Container Box */}
                        <div
                            className={`md:w-[395px] md:h-[500px] bg-[#FEFCF6] rounded-3xl p-6 shadow-lg
                            flex flex-col items-center text-center gap-4
                            ${idx % 2 === 0 ? "md:ml-12" : "md:mr-12"}
                        `}
                        >
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-46 object-contain mb-8"
                            />
                            <h3 className="text-2xl md:text-4xl font-semibold text-[#695F4F] mb-4">
                                {product.title}
                            </h3>
                            <button className="px-12 py-3 bg-transparent border border-[#695F4F] rounded-full text-[#695F4F] hover:bg-[#695F4F] hover:text-white transition text-md md:text-lg text-transform: uppercase">
                                Shop Now
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Products;
