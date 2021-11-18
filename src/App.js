import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Main = lazy(() => import("./views/Main.tsx"));
const Nav = lazy(() => import("./views/Nav.tsx"));

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
