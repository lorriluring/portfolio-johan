import { useState } from "react";

import ProjectCard from "./ProjectCard";
import trafikverket1 from "../assets/trafikverket1.webp";
import trafikverket2 from "../assets/trafikverket2.webp";
import trafikverket3 from "../assets/trafikverket3.webp";
import trafikverket4 from "../assets/trafikverket4.webp";
import trafikverket5 from "../assets/trafikverket5.webp";
import trafikverket6 from "../assets/trafikverket6.webp";

import active81 from "../assets/active81.webp";
import active82 from "../assets/active82.webp";
import active83 from "../assets/active83.webp";
import active84 from "../assets/active84.webp";
import active85 from "../assets/active85.webp";
import active86 from "../assets/active86.webp";
import active87 from "../assets/active87.webp";
import active88 from "../assets/active88.webp";

import HalmstadUniversityMastersLogo from "../assets/HalmstadUniversityMastersLogo.webp";

const projects = [
  {
    title: "Digital Service Design at Trafikverket",
    description:
      "Worked with service design and UX methods to improve digital public services. I conducted user resarch, stakeholder collaboration, workshops and concept development to create user-centered solutions in a complex public-sector environment.",
    longDescription:
      "During this project I worked with service design and UX methods in a public-sector environment. The work included stakeholder collaboration, workshops, user research, concept development, and iterative improvements of digital services. A strong focus was placed on understanding user needs and translating findings into actionable design decisions.",
    technologies: [
      "Service Design",
      "UX Research",
      "Workshops",
      "Stakeholder Management",
      "Figma",
    ],
    images: [
      trafikverket1,
      trafikverket2,
      trafikverket3,
      trafikverket4,
      trafikverket5,
      trafikverket6,
    ],
  },
  {
    title: "Active8 Planet Sustainability Tool",
    description:
      "Designed a digitphysical sustainability evaluation tool, in the form of a game, that helped organisations explore environmental decision-making through interactive workshops and visual facilitation techniques",
    longDescription:
      "The project focused on sustainability and environmental decision-making. Through workshops, user testing, and iterative prototyping, a digiphysical evaluation tool was developed to help organizations understand and improve sustainability-related decisions. The solution combined physical and digital interactions to support engagement and learning.",
    technologies: [
      "UX Design",
      "Service Design",
      "Prototyping",
      "User Testing",
      "Workshops",
    ],
    images: [
      active81,
      active82,
      active83,
      active84,
      active85,
      active86,
      active87,
      active88,
    ],
  },
  {
    title: "Master's Thesis",
    description:
      "Conducted a qualitative research project investigating how students and teachers percive AI usage in higher education. The project included interviews, thematic analysis, and academic reporting",
    longDescription:
      "This research project explored perceptions of AI and academic integrity in higher education. Semi-structured interviews were conducted with participants from Swedish universities, followed by thematic analysis to identify patterns, concerns, and opportunities related to AI usage in teaching and learning.",
    technologies: [
      "Interviews",
      "Thematic Analysis",
      "Research",
      "Academic Writing",
    ],
    images: [HalmstadUniversityMastersLogo],
  },
  {
    title: "Amanuensis",
    description:
      "Planned and delivered lectures, workshops, and mentoring sessions for university students. Developed teaching materials and supported students throughout full design projects.",
    longDescription:
      "As a teaching assistant I planned lectures, workshops, and mentoring sessions within UX and digital innovation. Responsibilities included creating educational material, supporting student projects, facilitating discussions, and helping students connect theory with practical design work.",
    technologies: [
      "Teaching",
      "Workshops",
      "Mentoring",
      "UX Design",
      "Facilitation",
    ],
    images: [HalmstadUniversityMastersLogo],
  },
  {
    title: "Full Stack Development",
    description:
      "Currently studying modern software development with a focus on frontend and backend technologies. Building practical projects while expanding knowledge in application architecture and software engineering.",
    longDescription:
      "Currently studying modern software development with a focus on both frontend and backend technologies. The goal is to complement an existing design and research background with technical implementation skills, enabling work throughout the full product development lifecycle.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "C#"],
    images: [],
  },
];
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            images={project.images}
            onClick={() => {
              setSelectedProject(project);
              setCurrentImage(0);
            }}
          />
        ))}
      </div>

      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={() => setSelectedProject(null)}>×</button>

            <h3>{selectedProject.title}</h3>

            <p>{selectedProject.longDescription}</p>

            <img
              src={selectedProject.images[currentImage]}
              alt={selectedProject.title}
            />

            <div className="modal-navigation">
              <button
                onClick={() => setCurrentImage(Math.max(currentImage - 1, 0))}
              >
                ← Previous
              </button>
              <span>
                {currentImage + 1} / {selectedProject.images.length}
              </span>
              <button
                onClick={() =>
                  setCurrentImage(
                    Math.min(
                      currentImage + 1,
                      selectedProject.images.length - 1,
                    ),
                  )
                }
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
/*Export Projects*/
export default Projects;
