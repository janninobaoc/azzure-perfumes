'use client';

const About = () => {
    return (
        <section className="max-w-7xl mx-6 sm:mx-10 md:mx-16 my-16 sm:my-20 md:my-24">
            <div className="flex flex-col items-start">
                {/* Header */}
                <h2 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-[#695F4F]">
                    Our Mission - Your Impact
                </h2>

                {/* Paragraph */}
                <p className="
                    text-[#695F4F]
                    text-[24px]
                    sm:text-[32px]
                    md:text-[44px]
                    lg:text-[52px]
                    mb-6
                    leading-relaxed
                ">
                    Discover our collection of perfumes, crafted to captivate the senses. Each fragrance embodies elegance, sophistication, and individuality, reflecting the unique essence of those who wear them.
                </p>

                {/* Button */}
                <button className="
                    px-10 sm:px-12 md:px-16
                    py-3 sm:py-4
                    bg-transparent
                    text-[#695F4F]
                    border border-[#695F4F]
                    rounded-full
                    shadow
                    hover:bg-[#695F4F]
                    hover:text-white
                    transition text-md md:text-lg text-transform: uppercase
                ">
                    Read More
                </button>
            </div>
        </section>
    );
};

export default About;
