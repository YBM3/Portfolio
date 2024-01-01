import React, { useState } from "react";
import { Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Portfolio1 from "../../assets/bose1.png";
import Portfolio2 from "../../assets/Catalog.jpg";
import Portfolio3 from "../../assets/Screenshot_4.png";
import Portfolio4 from "../../assets/Screenshot_5.png";
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
      view: "https://ybm3.github.io/layout_miami/",
      source: "https://github.com/YBM3/bose-landing",
    },
    {
      id: 2,
      title: "Rent a Car application",
      description: `This user-friendly app, designed to be convenient in mind, offers a seamless and enjoyable experience for renting the perfect vehicle for your needs.`,
      alter: "Rent a Car application",
      image: `${Portfolio2}`,
      imageMore: `${Portfolio2}`,
      imageMedia: `${Portfolio2}`,
      tech: "React, JS, CSS, Redux, Axios, REST API",
      view: "https://rentpp.netlify.app/",
      source: "https://github.com/YBM3/rent-a-car",
    },
    {
      id: 3,
      title: "Yoga landing page",
      description: `A tranquil Yoga studio landing page promoting wellness. Features clean design, intuitive navigation, and responsive layout. Provides detailed class, schedule, and instructor information for easy booking.`,
      image: `${Portfolio3}`,
      imageMore: `${Portfolio3}`,
      imageMedia: `${Portfolio3}`,
      tech: "React, HTML, CSS, JS, Tailwind CSS",
      view: "https://yogalanding.netlify.app/",
      source: "https://github.com/YBM3/yoga",
    },
    {
      id: 4,
      title: "Portfolio: Reflection of My Growth in Web Development",
      description: `Welcome to my web development world! Explore my portfolio, a digital showcase of FrontEnd achievements. Witness the fusion of creativity and tech in HTML, CSS, JavaScript, React, Node.js. Git and npm ensure efficient project management. It's more than projects; it's a narrative of my growth, reflecting passion for modern web standards. Join me where design meets functionality. Welcome to my creative space!`,
      image: `${Portfolio4}`,
      imageMore: `${Portfolio4}`,
      imageMedia: `${Portfolio4}`,
      tech: "React, HTML, CSS, JS, Tailwind CSS, node.js, npm, Git",
      view: "https://aleksanderporakh.netlify.app/",
      source: "https://github.com/YBM3/Portfolio",
    },
  ]);

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
                  onClick={() => window.open(project.view, "_blank")}
                >
                  View Project
                </Button>
                <Button
                  variant="contained"
                  style={{ marginTop: "1em" }}
                  color="primary"
                  onClick={() => window.open(project.source, "_blank")}
                >
                  View Source
                </Button>
              </div>
            </div>
          </Fade>
        ))}
      </Container>
    </section>
  );
};
