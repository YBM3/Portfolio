import React from "react";
import "./ProjectView.css";

export const ProjectView = ({ project }) => {
  return (
    <div className="bg">
      <section className="ProjectView">
        <div className="modal">
          <div className="modal-content">
            <h2 className="modal-title">{project.title}</h2>
            <img
              src={project.imageMore}
              alt={project.alter}
              className="modal-img"
            />
            <p className="modal-description">{project.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
