import React from "react";

interface WhyCardProps {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
}

const Why_Card = ({ icon, title, description }: WhyCardProps) => {
    return (
        <div className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col gap-4">
            {icon && (
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    {icon}
                </div>
            )}
            <div className="flex flex-col gap-1.5">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                    {title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Why_Card;