import { ReviewOnScroll } from "../../ReviewOnScroll";

export const About = () => {
    const frontendSkills = ["React", "TypeScript", "Tailwindcss"];
    const backendSkills = ["Node.js", "Python", "MongoDB", "C++", "Java (multi-threading, JSON/CSV parsing)"];
    const mlAiSkills = ["TensorFlow","OpenCV", "Mediapipe", "Reinforcement Learning", "Large Language Models (LLMs)", "Neo4j (Knowledge Graphs)"];
    const otherSkills = ["Mathematica (for scientific calculations)", "Data analysis and optimization", "Concurrent programming (locks, semaphores)",];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <ReviewOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                        I’m a passionate computer engineering sophomore at USC with a strong interest in reinforcement learning, large language models, and their optimization and integration. I enjoy tackling complex problems at the intersection of machine learning and real-world applications. Beyond practical implementation, I am also deeply fascinated by the theoretical foundations of computer science and algorithmic logistics, always eager to explore and understand the principles that drive modern computing.
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

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Ml and AI</h3>
                                <div className="flex flex-wrap gap-2">
                                    {mlAiSkills.map((tech,key) => (
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
                                <h3 className="text-xl font-bold mb-4">Other</h3>
                                <div className="flex flex-wrap gap-2">
                                    {otherSkills.map((tech,key) => (
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
                                    (2023-2027)
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
                                    <h4 className="font-semibold"> Undergraduate Researcher at ICAROS Lab(Nov 2024-Present) </h4>
                                    <p> I collaborated with Postdoctoral researcher on reinforcement learning experiments for human-robot cooperative games, exploring innovative ways to enhance interaction between robots and humans. In addition, I engineered a Python-based AI interaction system using the Groq API, which enabled autonomous dialogue between language models. To further improve the system’s capabilities, I developed Neo4j knowledge graphs that facilitated planning when the discussions within the large language models (LLMs) reached their limitations, enabling more efficient and structured decision-making processes.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold"> Undergraduate Research Assitant at Takahashi Lab (Nov 2023-June2024) </h4>
                                    <p> I collaborated with graduate students on quantum physics experiments, gaining expertise in quantum mechanics. As part of my work, I developed a C++ program to calculate the standard deviation for N-V center data, optimizing lab data analysis. Additionally, I used Mathematica to calculate detection volumes from research papers, enhancing the accuracy and efficiency of experimental results.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ReviewOnScroll>
        </section>
    );
}