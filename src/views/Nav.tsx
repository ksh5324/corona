import React, { lazy, memo } from "react";
// import "../styles/NavbarAnimation.css";
import { StyledEngineProvider } from "@mui/material/styles";
import "../styles/Nav/Nav.css";

const NavBar = lazy(() => import("../components/Nav/NavBar"));
const NavDarkmode = lazy(() => import("../components/Nav/NavDarkmode"));
const NavTitle = lazy(() => import("../components/Nav/NavTitle"));

const Nav = memo(() => {
  return (
    <div>
      <div className="sticky__bar">
        <StyledEngineProvider injectFirst>
          <NavTitle />
          <NavBar />
          <NavDarkmode />
        </StyledEngineProvider>
      </div>
    </div>
  );
});

export default Nav;
