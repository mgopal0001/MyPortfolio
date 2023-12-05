import { projectDetails } from "./Constants";
import "./style.css";

const Projects = () => {
  const _handleClick = (project) => {
    console.log(window.location.href);
    console.log(project.link);
    window.location.replace(project.link);
  };

  return (
    <>
      <div className="projects-main-con">
        {projectDetails.map((project) => (
          <div key={project.id} className="project-con">
            <div className="project-title">
              <h3>{project.title}</h3>
            </div>
            
            <div className="project-details">
              <p>{project.details}</p>
            </div>
            <div className="project-link">
              <a id={project.id} className="btn btn-dark" href={project.link} target="_blank">
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Projects;
