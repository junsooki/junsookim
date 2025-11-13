import { ReviewOnScroll } from "../../ReviewOnScroll";

export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <ReviewOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-center"> Featured Projects </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">miniPDDLSolver</h3>
                            <p className="text-gray-400 mb-4">A lightweight PDDL solver implementing A* search algorithm to understand automated planning systems used in robotics task planning. Features domain-independent parsing of PDDL files and heuristic-based search with precondition validation for classical planning problems.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "PDDL", "A* Search", "Planning Algorithms"].map((tech,key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/junsooki/miniPDDLSolver" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors my-4"> 
                                    <span>View Project →</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 98 96" fill="currentColor">
                                        <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

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
                                <a href="https://github.com/junsooki/HandSignalCV" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors my-4"> 
                                    <span>View Project →</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 98 96" fill="currentColor">
                                        <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">College Professor Web Scraper</h3>
                            <p className="text-gray-400 mb-4">The project grabs data from a set URL - in this case the USC Viterbi faculty page. From the faculty page, the webscraper finds all the professor's individual pages. Afterwards, the webscraper then scrapes each professor's individual page to college information such as name, occupation, and degrees from the individual professor. We have accounted for possible internet errors through keeping track of the URLs of professors the first run did not receive information for. The data is then stored in a local database by last name order.</p>
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
                                <a href="https://github.com/junsooki/collegeprofessorswebscrap" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors my-4"> 
                                    <span>View Project →</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 98 96" fill="currentColor">
                                        <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                                    </svg>
                                </a>
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

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">YouTube Clone</h3>
                            <p className="text-gray-400 mb-4">
                                Built a full-stack YouTube clone using TypeScript, Firebase, and Tailwind CSS. Users can upload, stream, and download videos with real-time view, like, and comment tracking powered by Firebase Firestore. Integrated OAuth-based authentication and optimized performance through lazy loading and caching techniques.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["TypeScript", "Firebase", "Tailwind CSS", "OAuth"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">Artsy Artist Explorer</h3>
                            <p className="text-gray-400 mb-4">
                            A full-stack web application that allows users to explore and discover artists through the Artsy API. This project demonstrates modern web development practices, secure authentication, and efficient API integration.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java", "JavaScript", "HTML", "CSS", "MySQL", "Java Servlets", "JDBC", "Tomcat", "Eclipse", "Artsy API"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">Personal Website</h3>
                            <p className="text-gray-400 mb-4">
                                Designed and developed a responsive personal website using React, Tailwind CSS, and React Router. The site showcases my projects, resume, and blog, with smooth navigation and optimized performance across all devices. Built with a mobile-first approach and modern UI/UX principles for a clean, accessible experience.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Tailwind CSS", "React Router", "Responsive Design"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">USC Study Spot Finder (Group Project)</h3>
                            <p className="text-gray-400 mb-4">
                            USC Study Spot Finder is a web application that helps USC students discover and share favorite study locations on campus. It features a React-based frontend with an interactive OpenStreetMap-powered map, and a Spring Boot backend connected to a MySQL database for persisting spot details and user interactions. Users can add new spots, like and favorite existing ones, check in to record occupancy, and see which spots their friends recommend—all via simple, real-time RESTful APIs.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "react-leaflet", "OpenStreetMap", "Spring Boot", "MySQL", "RESTful APIs", "Maven", "Spring Boot", "Authentication & Authorization", "Real-time Data Fetching"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/HounigBiene/CSCI201FinalProject/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors my-4"> 
                                    <span>View Project →</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 98 96" fill="currentColor">
                                        <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </ReviewOnScroll>
        </section>
    );
};