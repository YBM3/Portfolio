import React, { useState } from "react";
import { Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Portfolio1 from "../../assets/bose1.png";
import Fade from "react-reveal/Fade";

import "./Works.css";



const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "150px",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [ setSelectedProject] = useState(null);
  const [setShowProjectView] = useState(false);
  const [projects] = useState([
    {
      id: 1,
      title: "Bose landing page",
      description: `A sleek and user-friendly landing page developed for Bose, showcasing their high-quality audio products. The project emphasizes intuitive navigation and responsive design, providing an engaging user experience across all devices.`,
      alter: "Bose landing page",
      image: `${Portfolio1}`,
      imageMedia: `${Portfolio1}`,
      imageMore: `${Portfolio1}`,
      tech: "Html, Css, Javascript",
    },
    {
      id: 2,
      title: "React Portfolio",
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: "React Portfolio",
      image: `${Portfolio1}`,
      imageMore: `${Portfolio1}`,
      tech: "React, Material UI, Three.js",
    },
    {
      id: 3,
      title: "React Portfolio",
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: "React Portfolio",
      image: `${Portfolio1}`,
      imageMore: `${Portfolio1}`,
      tech: "React, Material UI, Three.js",
    },
    {
      id: 4,
      title: "React Portfolio",
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: "React Portfolio",
      image: `${Portfolio1}`,
      imageMore: `${Portfolio1}`,
      tech: "React, Material UI, Three.js",
    },
    {
      id: 5,
      title: "React Portfolio",
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: "React Portfolio",
      image: `${Portfolio1}`,
      imageMore: `${Portfolio1}`,
      tech: "React, Material UI, Three.js",
    },
  ]);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setShowProjectView(true);
  };

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <Fade bottom>
            <div
              className="project"
              key={project.id}
              style={{
                flexDirection: project.id % 2 === 0 ? "row-reverse" : "row",
              }}
            >
              <div className="laptopBox">
                <div className="display">
                  <div
                    className="screen"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    {" "}
                    <div className="dock">
                      <div className="icons" />
                      <div className="icons" />
                      <div className="icons" />
                      <div className="icons" />
                      <div className="icons" />
                      <div className="icons" />
                      <div className="icons" />
                      <div className="icons" />
                      <div className="icons" />
                      <div className="icons" />
                      <div className="icons" />
                      <div className="icons" />
                      <div className="icons" />
                      <div className="icons" />
                      <div className="icons" />
                      <div className="icons" />
                    </div>
                  </div>
                  <span className="label">MacBook Pro</span>
                </div>
                <div className="keys">
                  <div className="board" />
                  <div className="touchpad" />
                </div>
                <div className="comp">
                  <div className="notch" />
                </div>
                <div className="compBottom" />
              </div>
              <div
                className="__content_wrapper"
                style={{
                  alignItems: project.id % 2 === 0 ? "flex-end" : "flex-start",
                  justifyContent:
                    project.id % 2 === 0 ? "flex-end" : "flex-start",
                }}
              >
                <h3
                  className="title"
                  style={{
                    flexDirection: project.id % 2 === 0 ? "row-reverse" : "row",
                  }}
                >
                  <TextDecrypt
                    text={
                      project.id % 2 === 0
                        ? "0" + project.id + ". " + project.title
                        : project.title + " .0" + project.id
                    }
                  />
                </h3>
                <p
                  className="description"
                  style={{
                    textAlign: project.id % 2 === 0 ? "right" : "left",
                  }}
                >
                  {project.description}
                </p>
                <p
                  className="tech"
                  style={{
                    textAlign: project.id % 2 === 0 ? "right" : "left",
                  }}
                >
                  {project.tech}
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleViewProject(project)}
                >
                  View Project
                </Button>
              </div>
            </div>
          </Fade>
        ))}
      </Container>
    </section>
  );
};
