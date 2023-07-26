import pkg from "react-icons/bi/index";
import { IconContext } from "react-icons";
import { useState } from "react";
import NavItems from "./NavItems";
const { BiMenu } = pkg;

/*Navbar button component - main component */
//only render if window size is less than 600
const NavButton = ({ isRender }) => {
  const [visibility, setVisibility] = useState(false);

  if (isRender) {
    return (
      //Rendering the button and navbar items
      <>
        <button
          className="btn-menu"
          onClick={() => {
            //the state changes with each click on the button
            visibility == false ? setVisibility(true) : setVisibility(false);
          }}
        >
          <IconContext.Provider value={{ className: "react-icons" }}>
            <BiMenu />
          </IconContext.Provider>
        </button>
        <NavItems isVisible={visibility} />
      </>
    );
  } else {
    //Only rendering navbar items (window width grater than 600 )
    return <NavItems isVisible={true} />;
  }
};

export default NavButton;
