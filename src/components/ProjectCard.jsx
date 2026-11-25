function ProjectCard({ title, description, technologies, images, onClick }) {
  return (
    <article
      onClick={() => {
        console.log("clicked");
        onClick();
      }}
    >
      {images.length > 0 && <img src={images[0]} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  );
}
export default ProjectCard;
