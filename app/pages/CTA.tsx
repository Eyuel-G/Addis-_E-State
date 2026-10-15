"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    PhoneCall,
    MessageSquare,
    Sparkles,
    CheckCircle2,
    ShieldCheck,
    Languages,
    Clock,
    Star,
    ArrowRight,
    Check,
} from "lucide-react";

const propertyTypes = ["Buying", "Renting", "Selling", "Investment"];

const CTA = () => {
    const [selectedType, setSelectedType] = useState("Buying");
    const [contact, setContact] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!contact.trim()) return;
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setContact("");
        }, 5000);
    };

    return (
        <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-3xl bg-white text-gray-900 shadow-2xl shadow-orange-500/5 border border-orange-100 p-8 sm:p-12 lg:p-16 overflow-hidden">
                    {/* Ambient Glow Orbs */}
                    <div className="absolute -top-32 -left-32 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-400/5 via-transparent to-transparent pointer-events-none" />

                    {/* Subtle Grid Pattern Overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]"
                    />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Left Column: Content & Conversion Form */}
                        <div className="lg:col-span-7 flex flex-col justify-center">
                            {/* Eyebrow Tag */}
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-semibold tracking-wider uppercase w-fit mb-5 shadow-xs">
                                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                                <span>Free Property Consultation • No Obligation</span>
                            </div>

                            {/* Headline */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.15] mb-5">
                                Ready to find your{" "}
                                <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                                    Perfect Property?
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                                Connect with Addis Ababa&apos;s premier real estate consultants. Whether
                                you&apos;re looking to acquire a luxury villa in Bole, lease a contemporary
                                apartment in Kazanchis, or invest in prime commercial estates, our expert
                                advisors are here to help you navigate every step seamlessly.
                            </p>

                            {/* Key Value Proposition Badges */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                                <div className="flex items-center gap-2.5 text-sm text-gray-700 font-medium">
                                    <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100/80">
                                        <Languages className="w-4 h-4 text-orange-500" />
                                    </div>
                                    <span>Amharic, Afaan Oromoo &amp; English</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-gray-700 font-medium">
                                    <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100/80">
                                        <Clock className="w-4 h-4 text-orange-500" />
                                    </div>
                                    <span>Average response under 15 minutes</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-gray-700 font-medium">
                                    <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100/80">
                                        <ShieldCheck className="w-4 h-4 text-orange-500" />
                                    </div>
                                    <span>100% Legal verification &amp; due diligence</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-gray-700 font-medium">
                                    <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100/80">
                                        <CheckCircle2 className="w-4 h-4 text-orange-500" />
                                    </div>
                                    <span>Completely free consultation</span>
                                </div>
                            </div>

                            {/* Category Selector Tabs */}
                            <div className="mb-6">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2.5">
                                    I am interested in:
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {propertyTypes.map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => setSelectedType(type)}
                                            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                                                selectedType === type
                                                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/25 scale-105"
                                                    : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200/80 hover:text-gray-900"
                                            }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Callback Request Form */}
                            <form onSubmit={handleSubmit} className="mb-8">
                                <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
                                    <div className="relative flex-1">
                                        <input
                                            type="text"
                                            value={contact}
                                            onChange={(e) => setContact(e.target.value)}
                                            placeholder="Enter phone number or email..."
                                            className="w-full px-4 py-3.5 rounded-xl bg-gray-50/90 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-inner"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shrink-0 cursor-pointer"
                                    >
                                        <span>Request Callback</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {isSubmitted && (
                                    <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-2.5 rounded-xl animate-fadeIn">
                                        <Check className="w-4 h-4 text-emerald-600" />
                                        <span>
                                            Thank you! Our Addis advisor will reach out to you within 15
                                            minutes for your {selectedType.toLowerCase()} inquiry.
                                        </span>
                                    </div>
                                )}
                            </form>

                            {/* Direct Contact Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                                <a
                                    href="tel:+251911000000"
                                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
                                >
                                    <PhoneCall className="w-4 h-4 transition-transform group-hover:rotate-12 text-white" />
                                    <span>Call Us Now: +251 911 000 000</span>
                                </a>

                                <a
                                    href="https://wa.me/251911000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-gray-800 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <MessageSquare className="w-4 h-4 text-orange-500" />
                                    <span>Send a Message</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Visual Showcase & Floating Glass Badges */}
                        <div className="lg:col-span-5 relative flex justify-center items-center">
                            <div className="relative w-full max-w-md lg:max-w-none">
                                {/* Visual Card Container */}
                                <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl shadow-gray-200/60 group bg-gray-50 aspect-4/3 sm:aspect-5/4 lg:aspect-4/3">
                                    <Image
                                        src="/cta_property.jpg"
                                        alt="Modern luxury property in Addis Ababa"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                        priority
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                                    {/* Floating Badge: Active Advisors */}
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-xl flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        <span>Advisors Online Now</span>
                                    </div>

                                    {/* Top Right Tag */}
                                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                        Featured Villa
                                    </div>

                                    {/* Bottom Glass Card: Social Proof & Details */}
                                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md text-gray-900 p-4 rounded-2xl shadow-xl border border-white/40 flex items-center gap-3.5">
                                        <div className="p-2.5 bg-orange-500 text-white rounded-xl shadow-md shrink-0">
                                            <Star className="w-5 h-5 fill-white" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center gap-1">
                                                <div className="flex text-amber-500">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                                    ))}
                                                </div>
                                                <span className="text-xs font-extrabold text-gray-900 ml-1">4.9 / 5.0</span>
                                            </div>
                                            <p className="text-xs font-bold text-gray-900 mt-0.5 truncate">
                                                850+ Happy Homeowners Assisted
                                            </p>
                                            <p className="text-[11px] text-gray-500 font-medium truncate">
                                                Bole • Kazanchis • Old Airport • CMC
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Background Accent Ring */}
                                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-orange-500/15 to-amber-500/15 -z-10 blur-xl opacity-70" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
