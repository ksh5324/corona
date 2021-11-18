import React, { lazy, memo } from "react";
import { Route, Routes } from "react-router-dom";

const Main = lazy(() => import("./views/Main.tsx"));
const Nav = lazy(() => import("./views/Nav.tsx"));

const App = memo(() => {
  return (
    <div style={{ display: "flex" }}>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/earth" element={<Main />} />
        <Route path="/a" element={<Main />} />
        <Route path="/people" element={<Main />} />
      </Routes>
    </div>
  );
});

export default App;
