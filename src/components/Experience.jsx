const experiences = [
  {
    role: "Service Designer / UX Designer",
    organization: "Trafikverket",
    period: "2024",
  },

  {
    role: "Teaching Assistant",
    organization: "Halmstad University",
    period: "2023-2025",
  },

  {
    role: "UX Designer",
    organization: "Active8 Planet",
    period: "2021-2022",
  },
];

function Experience() {
  return (
    <section id="experience" className="experiences">
      <h2>Experience</h2>
      <ul>
        {experiences.map((experience) => (
          <li key={experience.role}>
            <h3>{experience.role}</h3>
            <p>{experience.organization}</p>
            <p>({experience.period})</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
