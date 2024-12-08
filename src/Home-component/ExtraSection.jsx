import React from 'react';

const ExtraSection = () => {
    return (
        <div>
            <section className="p-6">
                <div className="p-10 rounded-lg shadow-lg bg-gray-300 text-gray-900 dark:bg-gray-800 dark:text-white">
                    <h2 className="text-2xl font-semibold">Explore More</h2>
                    <p className="mt-4">
                        Dive deeper into our collection of sports equipment. Find your perfect gear for every sport and take advantage of our best offers!
                    </p>

                    <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all dark:bg-gray-700">
                            <h3 className="text-xl font-semibold mb-4"> Equipment</h3>
                            <p>Discover high-quality basketballs, baseball, and others.</p>
                            <h1 className="mt-4 inline-block text-blue-600 hover:text-blue-800">
                                Explore Equipment
                            </h1>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all dark:bg-gray-700">
                            <h3 className="text-xl font-semibold mb-4">Track your product</h3>
                            <p>See where is your product if you already Purchase</p>
                            <h1 className="mt-4 inline-block text-blue-600 hover:text-blue-800">
                                Explore track
                            </h1>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all dark:bg-gray-700">
                            <h3 className="text-xl font-semibold mb-4">Special Offers</h3>
                            <p>Get discounts on selected sports equipment. Limited time offer!</p>
                            <h1 className="mt-4 inline-block text-blue-600 hover:text-blue-800">
                                Check out our Offers
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ExtraSection;