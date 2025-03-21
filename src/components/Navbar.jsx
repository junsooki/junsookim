import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => { {/* Constantly checks whenever menuOpen is changed (whenever hamburger icon is clicked)*/}
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">  
                        Junsoo
                    </a> 

                    <div 
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                        onClick={() => setMenuOpen((prev) => !prev)}
                    > {/* This is for mobile menu bar */}
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8"> {/* This is for computer */}
                        <a href="#home" className="text-gray-300 hove:text-white transition-colors"> Home </a>
                        <a href="#about" className="text-gray-300 hove:text-white transition-colors"> About </a>
                        <a href="#projects" className="text-gray-300 hove:text-white transition-colors"> Projects </a>
                        <a href="#blog" className="text-gray-300 hove:text-white transition-colors"> Blog </a>
                        <a href="#contact" className="text-gray-300 hove:text-white transition-colors"> Contact </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};