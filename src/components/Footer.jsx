import "./Footer.css";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
//Componente footer
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className="contacto">
      <div>
        <h3>Contact me!</h3>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <a
            href="https://github.com/MiguelRlia117"
            target="_blank"
            id="s-link"
            title="GitHub"
          >
            <BsGithub />
          </a>
          <a target="_blank" id="s-link" title="email">
            <HiOutlineMail />
          </a>
        </IconContext.Provider>
      </div>
      <div className="credits">2023, Miguel Romero: intern developer</div>
    </footer>
  );
};

export default Footer;
