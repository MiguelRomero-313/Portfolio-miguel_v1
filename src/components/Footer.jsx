import "./Footer.css";
import bsIcons from "react-icons/bs/index";
import hiIcons from "react-icons/hi/index";
import { IconContext } from "react-icons";
const { BsGithub, BsLinkedin } = bsIcons;
const { HiOutlineMail } = hiIcons;
//Componente footer

const Footer = () => {
  return (
    <footer className="contacto">
      <div>
        <h3>Contact me!</h3>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <a
            href="https://github.com/MiguelRomero-313"
            target="_blank"
            id="s-link"
            title="GitHub"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/miguel-isai-romero-rios-lia313/"
            target="_blank"
            id="s-link"
            title="LikedIn"
          >
            <BsLinkedin />
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
