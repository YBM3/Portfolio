/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";
import { Link, Tooltip, IconButton, Zoom } from "@material-ui/core";
import Resume from "../../settings/resume.json";

import "./About.css";

import profile from "../../assets/photo_2023-11-16_23-36-47.jpg";
import { SocialIcons } from "../content/SocialIcons";

export const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName}, a Frontend Developer, originally hailing from Minsk, Belarus, and now operating out of Gdynia, Poland.
   My specialty lies in crafting fully responsive, functional websites with a sleek, contemporary aesthetic. 
   My approach to collaboration is centered around understanding your unique needs and objectives. 
   This enables me to deliver a final product that not only aligns with your specifications, but also provides a valuable and engaging user experience.
   `;
  const tech = `I'm proficient in HTML, CSS, JavaScript, React, Redux, TypeScript, Node.js, Express.js, MySQL, Git, and more.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div
            className="_img"
            style={{
              background: "url(" + profile + ")",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="_content_wrapper">
            <Typography component="h2" variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">{aboutme}</p>
            <p className="aboutme">{tech}</p>
            <div className="socialAbout">
              {Resume.basics.profiles.map((socialItem) => (
                <Link
                  href={socialItem.url}
                  key={socialItem.network.toLowerCase()}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  color="inherit"
                >
                  <Tooltip
                    title={socialItem.username}
                    placement="left"
                    TransitionComponent={Zoom}
                  >
                    <IconButton
                      color="inherit"
                      aria-label={socialItem.network}
                      className={classes.iconButton}
                    >
                      <i className={`${classes.icon} ${socialItem.x_icon}`}></i>
                    </IconButton>
                  </Tooltip>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
