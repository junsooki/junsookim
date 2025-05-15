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
      title: "Undergraduate Researcher at ICAROS Lab",
      company: "ICAROS Lab @ USC",
      companyLink: "https://icaros.usc.edu/",
      duration: "Nov 2024 - Present",
      location: "Los Angeles, California",
      descriptions: [
        "collaborated with Postdoctoral researcher on reinforcement learning experiments for human-robot cooperative games, exploring innovative ways to enhance interaction between robots and humans", 
        "engineered a Python-based AI interaction system using the Groq API, which enabled autonomous dialogue between language models",
        "developed Neo4j knowledge graphs that facilitated planning when the discussions within the large language models (LLMs) reached their limitations, enabling more efficient and structured decision-making processes",
        "developing PDDL Planner for Overcooked ai from scratch that will be used for incremental planning",
      ]
    },
    {
      title: "Professional Event Director at KSEA",
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
      title: "Undergraduate Research Assitant at Takahashi Lab",
      company: "Takashi Lab @ USC",
      companyLink: "https://www.uscqsensing.org/",
      duration: "Nov 2023 – Jun 2024",
      location: "Los Angeles, California",
      descriptions: [
        "collaborated with graduate students on quantum physics experiments, gaining expertise in quantum mechanics",
        "built a C++ program to compute the standard deviation of N-V center data, significantly improving the speed and reliability of lab data processing.",
        "used Mathematica to calculate detection volumes from research papers, verifying the accuracy of experimental results."
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