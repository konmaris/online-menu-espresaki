import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "../components/Menu";

function AppRouter() {
  return (
    <Router basename={"/menu"}>
      <Menu />
    </Router>
  );
}

export default AppRouter;
