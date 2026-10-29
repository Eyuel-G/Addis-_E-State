'use client';

import LightRays from "@/components/LightRays";
import SearchBar from "@/components/SearchBar";

const Hero = () => {
    return (
        <main id="home" className="relative w-full h-screen max-h-screen overflow-hidden">
            <div
                className="relative h-full w-full bg-[url('/hero.jpg')] bg-cover bg-center
                      flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-24 xl:px-28 pt-20 sm:pt-24 pb-4 sm:pb-6 overflow-hidden"
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
                    className="border border-black rounded-3xl py-1.5 px-3.5 font-mono font-semibold mb-2 sm:mb-3 mt-1 sm:mt-0
                        bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 relative z-10 shadow-sm"
                >
                    <span className="text-xs sm:text-sm font-bold tracking-wide">
                        #1 REAL ESTATE PLATFORM IN ETHIOPIA
                    </span>
                </div>

                <div className="relative z-10 text-white [-webkit-text-stroke:1px_#000000] leading-tight">
                    <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                        Find Your
                        <span className="text-orange-300 [-webkit-text-stroke:2px_#000000]">
                            {" "}
                            Dream
                        </span>
                    </h1>
                    <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mt-0.5 sm:mt-1">
                        <span className="text-orange-300 [-webkit-text-stroke:2px_#000000]">
                            Home{" "}
                        </span>
                        in Addis Ababa!
                    </h1>
                </div>

                <p className="text-white/95 font-medium text-xs sm:text-base md:text-lg w-full lg:w-3/5 font-italic mt-2 sm:mt-3 relative z-10 drop-shadow-sm">
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