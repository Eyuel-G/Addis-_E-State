import StoryCard from "@/components/StoryCard";
import { Star, ShieldCheck, HeartHandshake, MessageSquareHeart } from "lucide-react";

const stories = [
    {
        clientName: "Bethlehem Tadesse",
        location: "Bole Atlas, Addis Ababa",
        clientReview: "Finding our family home with Addis E-State was an incredible experience. The team verified every document before we even visited. Smooth and trustworthy!",
        clientImage: "/hero.jpg",
        rating: 5,
        tag: "VERIFIED BUYER",
    },
    {
        clientName: "Yonas Alemu",
        location: "Kazanchis, Addis Ababa",
        clientReview: "I was looking for a modern luxury apartment for investment. The closing process took less than two weeks! Exceptional professional service.",
        clientImage: "/hero.jpg",
        rating: 5,
        tag: "APARTMENT OWNER",
    },
    {
        clientName: "Mahlet Solomon",
        location: "CMC Villa Zone, Addis Ababa",
        clientReview: "Selling our property took just days. Their market reach across Addis is unrivaled. I highly recommend Addis E-State to anyone buying or selling.",
        clientImage: "/hero.jpg",
        rating: 5,
        tag: "PROPERTY SELLER",
    },
];

const ClientStories = () => {
    return (
        <section className="bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-25">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
                    <div className="flex flex-col">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 text-orange-600 font-semibold tracking-widest text-xs uppercase w-fit mb-4 shadow-xs">
                            <MessageSquareHeart className="w-3.5 h-3.5" />
                            Client Stories
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                            Trusted by Homeowners Across <span className="text-orange-500">Addis</span>
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
                            Discover how we have helped hundreds of families and investors find, buy, and sell premier real estate safely in Ethiopia.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm w-fit">
                        <div className="flex -space-x-2">
                            <img src="/hero.jpg" alt="Client" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                            <img src="/hero.jpg" alt="Client" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                            <img src="/hero.jpg" alt="Client" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                ))}
                                <span className="text-xs font-bold text-gray-900 ml-1">4.9 / 5</span>
                            </div>
                            <span className="text-[11px] text-gray-500 font-medium">850+ Verified Testimonials</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <StoryCard
                            key={index}
                            clientName={story.clientName}
                            location={story.location}
                            clientReview={story.clientReview}
                            clientImage={story.clientImage}
                            rating={story.rating}
                            tag={story.tag}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-xs hover:border-orange-200 transition-colors">
                        <div className="p-3 rounded-xl bg-orange-50 text-orange-500">
                            <Star className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-gray-900">4.9 Stars</p>
                            <p className="text-xs text-gray-500 font-medium">Client Satisfaction Score</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-xs hover:border-orange-200 transition-colors">
                        <div className="p-3 rounded-xl bg-orange-50 text-orange-500">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-gray-900">100% Legal</p>
                            <p className="text-xs text-gray-500 font-medium">Verified Property Title Deeds</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-xs hover:border-orange-200 transition-colors">
                        <div className="p-3 rounded-xl bg-orange-50 text-orange-500">
                            <HeartHandshake className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-gray-900">850+ Deals</p>
                            <p className="text-xs text-gray-500 font-medium">Closed for Happy Families</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientStories;