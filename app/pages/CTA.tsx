const CTA = () => {
    return (
        <section className="border-2 w-[80%] mx-auto rounded-lg p-10 flex flex-cols">
            <div className="max-w-[70%]">
                <h2 className="mb-5">Ready to find your
                    <span className="bg-gradient-to-r from-orange-600 via-yellow-400 to-orange-300 bg-clip-text text-transparent ml-2">
                        Perfect Property?
                    </span>
                </h2>
                <p className="text-black">
                    Connect with us today for personalized assistance from an experienced agent who speaks every major language fluently.
                    Our free consultations are completely free without any obligation – we're here to help you solve problems and
                    achieve your goals!
                </p>
                <div className="flex flex-col gap-6 items-center mt-5">
                    <button className="w-[70%] bg-orange-500 text-white max-px-5 py-2 rounded-lg">
                        Call Us Now
                    </button>

                    <button className="w-[70%] bg-white text-orange-500 max-px-5 py-2 rounded-lg shadow-lg">
                        Send a Message
                    </button>
                </div>
            </div>

            <div>
                <img src="/hero.jpg" alt="estate image"
                    className="rounded-4xl max-w-lg" />
            </div>

        </section>

    );
};

export default CTA;


