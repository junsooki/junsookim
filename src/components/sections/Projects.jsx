import { ReviewOnScroll } from "../ReviewOnScroll";

export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <ReviewOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Featured Projects </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">HandSignalCV</h3>
                            <p className="text-gray-400 mb-4">HandSignalCV is a project designed to detect American Sign Language (ASL) from a camera feed and convert it into text. The project will utilize OpenCV and Mediapipe to capture frames and retrieve an ASL dataset. This dataset will then be divided into training, validation, and test sets.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "OpenCV", "Mediapipe", "numpy", "tensorflow", "sk-learn", "h5py"].map((tech,key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/junsooki/HandSignalCV" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> 
                                    View Project 
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">College Professor Web Scraper</h3>
                            <p className="text-gray-400 mb-4">he project grabs data from a set URL - in this case the USC Viterbi faculty page. From the faculty page, the webscraper finds all the professor's individual pages. Afterwards, the webscraper then scrapes each professor's individual page to college information such as name, occupation, and degrees from the individual professor. We have accounted for possible internet errors through keeping track of the URLs of professors the first run did not receive information for. The data is then stored in a local database by last name order.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "PostgreSQL"].map((tech,key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/junsooki/collegeprofessorswebscrap" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">MuseumGeek Ticketing System</h3>
                            <p className="text-gray-400 mb-4">This project involved creating a multi-threaded Java application to simulate a museum exhibit ticketing system with dynamic ticket agents. It used locks and semaphores for synchronized resource management, ensuring smooth concurrent operations. A parser was developed to process JSON exhibit data and CSV transaction schedules, with input validation and error handling to maintain data integrity.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java", "JSON", "CSV", "Threading"].map((tech,key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </ReviewOnScroll>
        </section>
    );
};