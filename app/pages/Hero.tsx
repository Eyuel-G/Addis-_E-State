'use client';

import LightRays from "@/components/LightRays";
import SearchBar from "@/components/SearchBar";

const Hero = () => {
    return (
        <main>
            <div
                className="relative min-h-screen bg-[url('/hero.jpg')] bg-cover bg-center w-full
                      flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-24 xl:px-25 pt-24 sm:pt-32 md:pt-36 pb-16 overflow-hidden"
            >
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#fb923c"
                        raysSpeed={1.5}
                        lightSpread={2}
                        rayLength={3}
                        followMouse={true}
                        mouseInfluence={0.15}
                    />
                </div>

                <div
                    className="border border-black rounded-3xl py-2 px-4 font-mono font-semibold mb-5 mt-10 md:mt-0
                        bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 relative z-10"
                >
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                        #1 REAL ESTATE PLATFORM IN ETHIOPIA
                    </span>
                </div>

                <div className="relative z-10 text-white [-webkit-text-stroke:1px_#000000]">
                    <h1 className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl">
                        Find Your
                        <span className="text-orange-300 [-webkit-text-stroke:2px_#000000]">
                            {" "}
                            Dream
                        </span>
                    </h1>
                    <h1 className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl">
                        <span className="text-orange-300 [-webkit-text-stroke:2px_#000000]">
                            Home{" "}
                        </span>
                        in Addis Ababa!
                    </h1>
                </div>

                <p className="text-white font-medium text-base sm:text-xl lg:text-2xl w-full lg:w-1/2 font-italic mt-4 sm:mt-5 relative z-10">
                    Discover premium properties across Ethiopia&apos;s most sought-after
                    neighborhoods. From modern apartments to sprawling villas - your
                    perfect home awaits.
                </p>

                <SearchBar />
            </div>
        </main>
    );
};

export default Hero;