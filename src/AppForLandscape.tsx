import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default AppForLandscape;

function AppForLandscape() {
  return (
    <Router>
      <div className="container">
        <div className="side-content">
          <Sidebar />
        </div>
        <div className="main-content">
          <MainContent />
        </div>
      </div>
    </Router>
  );
}
