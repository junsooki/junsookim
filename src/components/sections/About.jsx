import { ReviewOnScroll } from "../ReviewOnScroll";

export const About = () => {
    const frontendSkills = ["React", "TypeScript", "Tailwindcss"];
    const backendSkills = ["Node.js", "Python", "MongoDB"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <ReviewOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I'm a passionate full-stack developer with a focus on creating intuitive and performant web applications. With a strong foundation in both frontend and backend technologies, I enjoy tackling complex problems and turning ideas into reality through clean, efficient code.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.2)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech,key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.2)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>B.S. in Computer Engineering and Computer Science (CECS)</strong> - University of Southern California
                                    (2023-2026)
                                </li>
                                <li>
                                    Relaevant Coursework: Data structures and Object Oriented Design, Introduction to Algorithms and Theory of Computing, Principles of Software Development, Advanced Principles of Physics I and II
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold"> Undergraduate Research Assitant (date) </h4>
                                    <p> Whatever you did</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold"> Undergraduate Research Assitant (date) </h4>
                                    <p> Whatever you did</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ReviewOnScroll>
        </section>
    );
}