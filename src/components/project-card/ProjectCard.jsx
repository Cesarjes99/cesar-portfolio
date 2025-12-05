import "./project-card.css";

function ProjectCard(props) {
  const handleClick = (e) => {
    // Si hay un callback personalizado, usarlo en lugar del link
    if (props.onClick) {
      e.preventDefault();
      props.onClick();
    }
  };

  return (
    <div className="project-container">
      <div className="img-container">
        <a
          href={props.link}
          target="_blank"
          onClick={handleClick}
          style={{ cursor: props.onClick ? "pointer" : "default" }}
        >
          <img alt="project-img" className="project-img" src={props.img} />
        </a>
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default ProjectCard;
