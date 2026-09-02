import Cards from "@/components/cards";

const FeaturedProperties = () => {
    return (
        <section className="bg-gray-50/50 py-16 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">

                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 text-orange-600 font-semibold tracking-widest text-xs uppercase w-fit mb-4 shadow-xs">
                    Handpicked For You
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        Featured Properties
                    </h2>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        <button className="px-4 py-2 rounded-full text-sm font-semibold bg-orange-500 text-white shadow-sm hover:bg-orange-600 transition-colors">
                            All
                        </button>
                        <button className="px-4 py-2 rounded-full text-sm font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-200 transition-colors">
                            Villa
                        </button>
                        <button className="px-4 py-2 rounded-full text-sm font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-200 transition-colors">
                            Apartment
                        </button>
                        <button className="px-4 py-2 rounded-full text-sm font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-200 transition-colors">
                            Commercial
                        </button>
                        <button className="px-4 py-2 rounded-full text-sm font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-200 transition-colors">
                            Land
                        </button>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center mt-4">
                    <Cards
                        propertyName="Luxury Villa in Bole"
                        location="Bole Atlas, Addis Ababa"
                        price="22,500,000 ETB"
                        image="/hero.jpg"
                        bedRoom={4}
                        bathRoom={3}
                        area={350}
                        tag="FOR SALE"
                    />

                    <Cards
                        propertyName="Modern Penthouse Apartment"
                        location="Kazanchis, Addis Ababa"
                        price="14,000,000 ETB"
                        image="/hero.jpg"
                        bedRoom={3}
                        bathRoom={2}
                        area={210}
                        tag="FEATURED"
                    />

                    <Cards
                        propertyName="Commercial Office Space"
                        location="Sarbet, Addis Ababa"
                        price="18,000,000 ETB"
                        image="/hero.jpg"
                        bedRoom={0}
                        bathRoom={2}
                        area={180}
                        tag="FOR RENT"
                    />
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <button
                    className="px-6 py-4 rounded-full text-sm font-semibold bg-orange-500 text-white shadow-sm hover:bg-orange-600 transition-colors">
                    More Properties
                </button>
            </div>
        </section>
    );
}

export default FeaturedProperties;