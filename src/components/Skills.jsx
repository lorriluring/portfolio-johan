const skills = ["HTML", "CSS", "JavaScript", "React", "C#", "Figma"];
function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
/* Exports Skills */
export default Skills;
