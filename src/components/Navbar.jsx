import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => { // Constantly checks whenever menuOpen is changed (whenever hamburger icon is clicked)
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    const handleNavigation = (sectionId) => {
        if (location.pathname !== '/') {
            // If we're not on the homepage, navigate to homepage with the section hash
            navigate('/#' + sectionId);
        } else {
            // If already on homepage, just scroll to the section
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a 
                        onClick={() => handleNavigation('home')} 
                        className="font-mono text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent cursor-pointer"
                    >  
                        Junsoo
                    </a> 

                    <div 
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                        onClick={() => setMenuOpen((prev) => !prev)}
                    > {/* This is for mobile menu bar */}
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8"> {/* This is for computer */}
                        <a 
                            onClick={() => handleNavigation('home')} 
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        > 
                            Home 
                        </a>
                        <a 
                            onClick={() => handleNavigation('about')} 
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        > 
                            About 
                        </a>
                        <a 
                            onClick={() => handleNavigation('projects')} 
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        > 
                            Projects 
                        </a>
                        <a 
                            onClick={() => handleNavigation('blogsPreviews')} 
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        > 
                            Blog 
                        </a>
                        <a 
                            onClick={() => handleNavigation('contact')} 
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        > 
                            Contact 
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};