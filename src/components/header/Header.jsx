import "./header.css";

function Header({ onResumeClick }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleAboutClick = () => {
    scrollToSection("about");
  };

  const handleProjectsClick = () => {
    scrollToSection("projects");
  };

  return (
    <header>
      <div>
        <h1>CESAR LARRINAGA</h1>
        <h2>WEB & MOBILE DEVELOPER WITH ENGINEERING BACKGROUND</h2>
      </div>
      <nav>
        <button onClick={handleAboutClick}>About</button>
        <button onClick={handleProjectsClick}>Projects</button>
        <button className="resume-button" onClick={onResumeClick}>
          Resume
        </button>
      </nav>
    </header>
  );
}

export default Header;
