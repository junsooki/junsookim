import React from "react";
import { ReviewOnScroll } from "../../ReviewOnScroll";
import { Link } from "react-router-dom";

export const Home = () => {
    // Function to handle smooth scrolling to sections
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <ReviewOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent leading-right"> 
                        Hi, I'm Junsoo!
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        I am a passionate sophomore studying Computer Engineering at USC.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <button 
                            onClick={() => scrollToSection('projects')}
                            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130, 246, 0.4)]"
                        >
                            View Projects
                        </button>
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130, 246, 0.2)] hover:bg-blue-500/10"
                        >
                            Contact Me 
                        </button>
                    </div>
                </div>
            </ReviewOnScroll>
        </section>
    );
};