import React from "react";
import { Bed, Bath, Square, MapPin } from "lucide-react";

interface CardProps {
    propertyName?: string;
    location?: string;
    image?: string;
    price?: string | number;
    bedRoom?: number;
    bathRoom?: number;
    area?: number | string;
    tag?: string;
}

const Cards = ({
    propertyName = "Modern Luxury Apartment",
    location = "Bole, Addis Ababa",
    image = "/hero.jpg",
    price = "12,500,000 ETB",
    bedRoom = 3,
    bathRoom = 2,
    area = 250,
    tag = "FOR SALE",
}: CardProps) => {
    const displayImage = image && image !== "testjpg" && image !== "" ? image : "/hero.jpg";

    return (
        <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col w-full max-w-sm sm:max-w-md">

            <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <img
                    src={displayImage}
                    alt={propertyName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {tag && (
                    <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                        {tag}
                    </span>
                )}
            </div>

            <div className="p-5 flex flex-col gap-3">
                <div>
                    <span className="text-2xl font-extrabold text-orange-500 block">
                        {typeof price === "number" ? `${price.toLocaleString()} ETB` : price}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mt-1 line-clamp-1 group-hover:text-orange-600 transition-colors">
                        {propertyName}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium flex items-center gap-1.5 mt-1">
                        <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span className="truncate">{location}</span>
                    </p>
                </div>

                <hr className="border-gray-100 my-1" />

                <div className="flex items-center justify-between text-gray-600 text-sm bg-gray-50 p-3 rounded-2xl">
                    <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-orange-500" />
                        <span className="font-semibold">{bedRoom}</span>
                        <span className="text-xs text-gray-500">Beds</span>
                    </div>

                    <div className="w-px h-4 bg-gray-200" />

                    <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-orange-500" />
                        <span className="font-semibold">{bathRoom}</span>
                        <span className="text-xs text-gray-500">Baths</span>
                    </div>

                    <div className="w-px h-4 bg-gray-200" />

                    <div className="flex items-center gap-1.5">
                        <Square className="w-4 h-4 text-orange-500" />
                        <span className="font-semibold">{area}</span>
                        <span className="text-xs text-gray-500">m²</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;