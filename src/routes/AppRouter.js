import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Menu from "../components/Menu";

function AppRouter() {
  return (
    <BrowserRouter basename="/menu">
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
