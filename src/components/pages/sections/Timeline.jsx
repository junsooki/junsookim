import React from 'react';

const TimelineContent = ({ title, company, companyLink, duration, location, descriptions }) => {
  return (
    <div className="relative mb-8 ml-4 pl-6 py-4 border-l border-gray-200 ">
      {/* Timeline dot */}
      <div className="absolute w-3 h-3 bg-white rounded-full mt-2 -left-1.5 border border-white"></div>
      
      {/* Duration */}
      <time className="text-sm font-semibold leading-none">{duration}</time>

      {/* Title */}
      <h3 className="text-lg font-semibold text-blue-500">{title}</h3>

      {/* Company */}
      {company && (
        <div className="text-sm text-blue-600">
          <a href={companyLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {company}
          </a>
        </div>
      )}

      {/* Location */}
      {location && <p className="text-sm text-gray-500">{location}</p>}

      {/* Descriptions */}
      <ul className="text-base font-normal list-disc list-inside">
        {descriptions.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export const Timeline = () => {
  const experiences = [
    {
      title: "Undergraduate Researcher at GVL Lab",
      company: "GVL Lab @ USC",
      companyLink: "https://gvl.usc.edu/",
      duration: "Aug 2025 - Present",
      location: "Los Angeles, California",
      descriptions: [
        "managing data collections and preprocessing for large-scale robotic datasets, ensuring high-quality inputs for training machine learning models",
        "working with 6+ graduate students to develop robotics simulation platform, contributing to ongoing research projects",
        "capturing 100 videos per week, preprocessing, and segmenting for reconstruction inside a simulation, requiring deep understanding of system limitations and capabilities"
      ]
    },
    {
      title: "Undergraduate Researcher at Robotic Embedded Systems Laboratory",
      company: "RESL @ USC",
      companyLink: "https://viterbi-web.usc.edu/~jdesai/RESL/index.html",
      duration: "Nov 2024 - Present",
      location: "Los Angeles, California",
      descriptions: [
        "working under the advisement of postdoctoral researcher Guangyao Shi to explore heuristics and optimization techniques for enhancing LLM-based task planning in robotic systems",
        "writing simple search algorithms including A* to understand PDDL planners, improving knowledge of pathfinding and planning algorithms",
        "developing codebases to implement heuristics for VPR questions enabling more flexible and efficient planning with LLM chain-of-thought or DNN-based approaches",
        "implementing various VPR heuristic approaches from scratch to better understand the strengths and weaknesses of each method"
      ]
    },
    {
      title: "Undergraduate Researcher at ICAROS Lab",
      company: "ICAROS Lab @ USC",
      companyLink: "https://icaros.usc.edu/",
      duration: "Nov 2024 - Aug 2025",
      location: "Los Angeles, California",
      descriptions: [
        "collaborated with postdoctoral researchers to design and execute weekly human-robot interaction experiments, managing protocols from initial concept through implementation to streamline data collection and analysis",
        "wrote and optimized PDDL domain and problem definitions for the Overcooked environment in multiple agent settings; leveraged Llama 3.3 prompt engineering to iteratively refine 10+ functional planning scenarios",
        "built a comprehensive Python framework to facilitate systematic LLM chain-of-thought sanity checks, reducing integration errors and accelerating debugging cycles",
        "designed and integrated dynamic Neo4j knowledge graphs to support complex LLM planning, enhancing decision-making capabilities and improving query response times"
      ]
    },
    {
      title: "Vice President at KSEA",
      company: "Korean-American Scientists and Engineers Association",
      companyLink: "https://uscksea.github.io/USC-KSEA-Website/",
      duration: "Aug 2024 – Present",
      location: "Los Angeles, California",
      descriptions: [
        "organized and hosted 20+ events for undergraduate students, including panels with invited speakers and networking opportunities",
        "participated in weekly meetings to assess student needs and align event planning with club goals",
        "created presentations, coordinated logistics, invited panelists, and booked venues—handling all aspects of event execution",
        "attended Katalyst, a national undergraduate conference with students from USC, UCLA, UCSD, UNC Chapel Hill, and more to present research and engage with industry mentors",
        "volunteered at NMSC (National Math and Science Competition), proctored exams, taught drone programming, and answered college admissions questions for parents",
        "helped organize the College Expo, an international virtual event connecting high school students globally with undergraduates from U.S. universities like UCLA, UCSD, and UMich"
      ]
    },
    {
      title: "Undergraduate Research Assistant at Takahashi Lab",
      company: "Takahashi Lab @ USC",
      companyLink: "https://www.uscqsensing.org/",
      duration: "Nov 2023 – Jun 2024",
      location: "Los Angeles, California",
      descriptions: [
        "collaborated with 4+ graduate students on quantum physics experiments, gaining expertise in quantum mechanics",
        "developed a C++ program to calculate standard deviation for over 3000 N-V centers data, optimizing lab data analysis",
        "utilized Mathematica to calculate detection volumes from research papers, enhancing experimental results"
      ]
    },
  ];

  return (
    <div className="w-full lg:w-2/3 mx-auto pt-20">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-center">Timeline</h1>
      {experiences.map((exp, index) => (
        <TimelineContent
          key={index}
          title={exp.title}
          company={exp.company}
          companyLink={exp.companyLink}
          duration={exp.duration}
          location={exp.location}
          descriptions={exp.descriptions}
        />
      ))}
    </div>
  );
};