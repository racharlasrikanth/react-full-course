import React from "react";
import { Link, Outlet } from "react-router-dom";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <nav>
        <Link to="/projects/featured">Featured Projects</Link>
        <Link to="/projects/new">New Projects</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Projects;
