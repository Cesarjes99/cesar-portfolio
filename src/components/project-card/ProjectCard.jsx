import "./project-card.css";

function ProjectCard(props) {
  return (
    <div className="project-container">
      <div clasName="img-container">
        <img alt="project-img" className="project-img" src={props.img} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default ProjectCard;
