import React from "react";
import Why_Card from "@/components/Why_Card";
import { ShieldCheck, Zap, Award, Headphones, Building2, Users } from "lucide-react";

const WhyUs = () => {
    return (
        <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-white via-orange-50/20 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 flex flex-col justify-center w-full">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 text-orange-600 font-semibold tracking-widest text-xs uppercase w-fit mb-4 shadow-xs">
                            Why Choose Us?
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                            Ethiopia&apos;s Most <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">Trusted Real Estate</span> Partner
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-4 mb-8">
                            Since 2015, Addis E-State has helped over 850 families find their perfect home. We combine deep local knowledge with cutting-edge technology to deliver an unmatched property search experience.
                        </p>

                        <div className="relative rounded-3xl group">
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="/hero.jpg"
                                    alt="Addis E-State Real Estate"
                                    className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                                    <span className="text-orange-400 font-bold text-xs sm:text-sm tracking-wider uppercase">Addis Ababa Premium</span>
                                    <h3 className="text-white text-xl sm:text-2xl font-bold mt-1">Excellence in Every Neighborhood</h3>
                                </div>
                            </div>

                            <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-20 hover:scale-105 transition-transform duration-300">
                                <div className="p-2.5 sm:p-3 bg-orange-500 text-white rounded-xl shadow-md">
                                    <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">Properties</p>
                                    <p className="text-sm sm:text-base font-extrabold text-gray-900">1,200+ Managed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-15">
                        <Why_Card
                            icon={<ShieldCheck className="w-6 h-6" />}
                            title="Verified Listings"
                            description="Every property is vetted by our team of experts. No scams, no surprises — just trusted real estate you can count on."
                        />

                        <Why_Card
                            icon={<Zap className="w-6 h-6" />}
                            title="Fast Transactions"
                            description="From search to keys in hand — our streamlined process cuts deal time by 40%, so you move in faster."
                        />

                        <Why_Card
                            icon={<Award className="w-6 h-6" />}
                            title="Award-Winning Agents"
                            description="Work with Ethiopia's top-rated real estate professionals who know every neighborhood inside out."
                        />

                        <Why_Card
                            icon={<Headphones className="w-6 h-6" />}
                            title="24/7 Support"
                            description="Our dedicated support team is always one call away — in Amharic, Oromo, or English."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;