import React, { memo } from "react";
import Total from "../components/korea/Total";
import "../styles/Main/main.css";

const Main = memo(() => {
  return (
    <div className="main">
      <Total />
    </div>
  );
});

export default Main;
