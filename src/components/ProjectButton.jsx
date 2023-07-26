import { IconContext } from "react-icons";
import bsIcons from "react-icons/bs/index";
import tbIcons from "react-icons/tb/index";
import "./ProjectButton.css";
const { BsGithub } = bsIcons;
const { TbWorldWww } = tbIcons;

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
