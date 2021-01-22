import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import logoImg from "../img/imgLogo.png";
import { ThemeContext } from "styled-components";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import { FlexBox } from "../Style/Flexbox";
import { Logo, NavContainer, IconMaterialUI } from "../Style/StyledNav";
import NavAutocomplete from "./NavAutocomplete";

function Nav({ toggleTheme }) {
  const [show, setShow] = useState(false);
  const { colors, title } = useContext(ThemeContext);

  // quando si scorre la pagina si aggiunge la classe alla nav per impostare il colore
  const scrollRemove = () => {};

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollRemove());
    };
  }, []);

  return (
    <NavContainer show={show}>
      <Link to="/">
        <Logo src={logoImg} />
      </Link>
      <FlexBox alignCenter>
        <NavAutocomplete></NavAutocomplete>
        <IconMaterialUI onClick={toggleTheme}>
          {title === "dark" ? <NightsStayIcon /> : <WbSunnyIcon />}
        </IconMaterialUI>
      </FlexBox>
    </NavContainer>
  );
}

export default Nav;
