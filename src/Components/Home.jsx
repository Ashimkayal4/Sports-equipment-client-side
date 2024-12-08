import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Slider from "../Home-component/Slider";
import ShowSixData from "../Home-component/ShowSixData";
import Feedback from "../Home-component/Feedback";
import ExtraSection from "../Home-component/ExtraSection";

const Home = () => {
    const products = useLoaderData();

    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? true : false;
    });

    const toggleTheme = () => {
        const newTheme = !darkMode;
        setDarkMode(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    };

    // Effect to add or remove dark class from document
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div>
            <header className="flex justify-between items-center p-6">
                <h1 className="text-2xl font-bold">Sports Equipment Store</h1>
                <button onClick={toggleTheme} className="btn btn-outline flex items-cente space-x-2">
                    {darkMode ? (
                        <span>Light Mode</span>
                    ) : (
                        <span>Dark Mode</span>
                    )}
                </button>
            </header>

            <main className={`min-h-screen transition-colors duration-500 ${darkMode ? "dark:bg-gray-900 dark:text-white" : "bg-gray-100 text-gray-800"
                }`}>
                <section>
                    <Slider></Slider>
                </section>

                <section>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        {products.map((product) => (
                            <ShowSixData key={product._id} product={product} />
                        ))}
                    </div>
                </section>

                <section>
                    <Feedback></Feedback>
                </section>

                <section>
                    <ExtraSection></ExtraSection>
                </section>
            </main>
        </div>
    );
};

export default Home;
