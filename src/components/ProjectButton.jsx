import { IconContext } from "react-icons";
import pkg from "react-icons/bs";
const { BsGithub } = pkg;
import { TbWorldWww } from "react-icons/tb";
import "./ProjectButton.css";

const ProjectButton = ({ buttonLink, buttonDemo }) => {
  return (
    <div className="btn-list">
      <button className="project-btn">
        <a
          href={buttonLink != "" ? buttonLink : null}
          target="_blank"
          title="Project Repo"
        >
          <IconContext.Provider value={{ className: "project-icons" }}>
            <BsGithub />
          </IconContext.Provider>
        </a>
      </button>
      {buttonDemo != "" ? (
        <button className="project-btn">
          <a
            href={buttonDemo != "" ? buttonDemo : null}
            target="_blank"
            title="Live demo"
          >
            <IconContext.Provider value={{ className: "project-icons" }}>
              <TbWorldWww />
            </IconContext.Provider>
          </a>
        </button>
      ) : null}
    </div>
  );
};

export default ProjectButton;
