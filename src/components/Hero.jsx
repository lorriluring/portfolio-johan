import profileimg from "../assets/profileimg.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <img src={profileimg} alt="ProfileImg" />
      <h1>Johan Lorentz</h1>
      <h2>UX/UI Designer | Service Designer | Future Fullstack Devloper</h2>
      <p>I am Johan Lorentz and this is a short introduction</p>
      <p>
        Click this button if you are interested in reading more about me and my
        work
      </p>
      <a href="#projects" className="hero-button">
        View My Projects
      </a>
    </section>
  );
}
// Other files can use Hero
export default Hero;
