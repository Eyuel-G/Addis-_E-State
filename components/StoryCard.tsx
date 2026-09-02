import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

interface StoryProps {
    clientReview?: string;
    clientImage?: string;
    clientName?: string;
    location?: string;
    rating?: number;
    tag?: string;
}

const StoryCard = ({
    clientReview = "Finding our home with Addis E-State was the smoothest experience. Highly recommended!",
    clientImage = "/hero.jpg",
    clientName = "Bethlehem Tadesse",
    location = "Bole, Addis Ababa",
    rating = 5,
    tag = "VERIFIED BUYER",
}: StoryProps) => {
    return (
        <div className="group bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col justify-between gap-6 relative">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                        <Quote className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                                key={index}
                                className={`w-4 h-4 ${index < rating ? "text-amber-400 fill-amber-400" : "text-gray-200"}`}
                            />
                        ))}
                    </div>
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
                    &ldquo;{clientReview}&rdquo;
                </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                    <img
                        src={clientImage || "/hero.jpg"}
                        alt={clientName}
                        className="w-11 h-11 rounded-full object-cover border-2 border-orange-200 shadow-xs"
                    />
                    <div className="flex flex-col">
                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                            {clientName}
                        </h4>
                        <span className="text-xs text-gray-500 font-medium">
                            {location}
                        </span>
                    </div>
                </div>

                {tag && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full uppercase">
                        <CheckCircle2 className="w-3 h-3 text-orange-500" />
                        {tag}
                    </span>
                )}
            </div>
        </div>
    );
};

export default StoryCard;