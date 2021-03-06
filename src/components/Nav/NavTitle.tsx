import React, { memo } from "react";
import "../../styles/Nav/Nav.css";
import "../../styles/font.css";

const NavTitle = memo(() => {
  return (
    <div className="nav-title-frame">
      <span className="nav-title-Roboto-Condensed">CORONA</span>
      <span className="nav-title-NovaSquareRegular">PROJECT</span>
    </div>
  );
});

export default NavTitle;
