import React from "react";
import "./rowLine.css";

import html from "../../assets/html-124-svgrepo-com.svg";
import css from "../../assets/css3-02-svgrepo-com.svg";
import js from "../../assets/js01-svgrepo-com.svg";
import react from "../../assets/react-logo-programming-svgrepo-com.svg";
import node from "../../assets/nodejs01-svgrepo-com.svg";
import vscode from "../../assets/vs-code-logo-microsoft-svgrepo-com.svg";
import git from "../../assets/git-svgrepo-com.svg";
import github from "../../assets/github-142-svgrepo-com.svg";
import npm from "../../assets/npm-svgrepo-com.svg";
import sass from "../../assets/sass-svgrepo-com.svg";
import adobe from "../../assets/adobe-ae-svgrepo-com.svg";
import figma from "../../assets/figma-svgrepo-com.svg";
import bootstrap from "../../assets/bootstrap-fill-svgrepo-com.svg";
import api from "../../assets/api-svgrepo-com.svg";
import mysql from "../../assets/mysql-svgrepo-com.svg";
import seo from "../../assets/seo-3-svgrepo-com.svg";

export const RowLine = () => {
  return (
    <section id="skills">
      <div className="heading">
        <h2 className="title"
        style={{
          gap: "0.5em",
        }}
        >SKILLS & TOOLS</h2>
        <p className="description">
          Here are some of my skills and tools I work with.
        </p>
      </div>
      <article class="wrapper">
        <div class="marquee">
          <div class="marquee__group">
            <div className="svg">
              <img src={html} alt="" />
              <p className="descriptionTech">HTML</p>
            </div>
            <div className="svg">
              <img src={css} alt="" />
              <p className="descriptionTech">CSS</p>
            </div>
            <div className="svg">
              <img src={js} alt="" />
              <p className="descriptionTech">JavaScript</p>
            </div>
            <div className="svg">
              <img src={react} alt="" />
              <p className="descriptionTech">ReactJS</p>
            </div>
            <div className="svg">
              <img src={node} alt="" />
              <p className="descriptionTech">NodeJS</p>
            </div>
            <div className="svg">
              <img src={vscode} alt="" />
              <p className="descriptionTech">VSCode</p>
            </div>
            <div className="svg">
              <img src={git} alt="" />
              <p className="descriptionTech">Git</p>
            </div>
            <div className="svg">
              <img src={github} alt="" />
              <p className="descriptionTech">GitHub</p>
            </div>
          </div>

          <div aria-hidden="true" class="marquee__group">
            <div className="svg">
              <img src={npm} alt="" />
              <p className="descriptionTech">Npm</p>
            </div>
            <div className="svg">
              <img src={sass} alt="" />
              <p className="descriptionTech">SaSS</p>
            </div>
            <div className="svg">
              <img src={adobe} alt="" />
              <p className="descriptionTech">Adobe</p>
            </div>
            <div className="svg">
              <img src={figma} alt="" />
              <p className="descriptionTech">Figma</p>
            </div>
            <div className="svg">
              <img src={bootstrap} alt="" />
              <p className="descriptionTech">Bootstrap</p>
            </div>
            <div className="svg">
              <img src={api} alt="" />
              <p className="descriptionTech">Api</p>
            </div>
            <div className="svg">
              <img src={mysql} alt="" />
              <p className="descriptionTech">MySql</p>
            </div>
            <div className="svg">
              <img src={seo} alt="" />
              <p className="descriptionTech">SEO</p>
            </div>
          </div>
        </div>

        <div class="marquee marquee--reverse">
          <div class="marquee__group">
            <div className="svg">
              <img src={npm} alt="" />
              <p className="descriptionTech">Npm</p>
            </div>
            <div className="svg">
              <img src={sass} alt="" />
              <p className="descriptionTech">SaSS</p>
            </div>
            <div className="svg">
              <img src={adobe} alt="" />
              <p className="descriptionTech">Adobe</p>
            </div>
            <div className="svg">
              <img src={figma} alt="" />
              <p className="descriptionTech">Figma</p>
            </div>
            <div className="svg">
              <img src={bootstrap} alt="" />
              <p className="descriptionTech">Bootstrap</p>
            </div>
            <div className="svg">
              <img src={api} alt="" />
              <p className="descriptionTech">Api</p>
            </div>
            <div className="svg">
              <img src={mysql} alt="" />
              <p className="descriptionTech">MySql</p>
            </div>
            <div className="svg">
              <img src={seo} alt="" />
              <p className="descriptionTech">SEO</p>
            </div>
          </div>

          <div aria-hidden="true" class="marquee__group">
            <div className="svg">
              <img src={html} alt="" />
              <p className="descriptionTech">HTML</p>
            </div>
            <div className="svg">
              <img src={css} alt="" />
              <p className="descriptionTech">CSS</p>
            </div>
            <div className="svg">
              <img src={js} alt="" />
              <p className="descriptionTech">JavaScript</p>
            </div>
            <div className="svg">
              <img src={react} alt="" />
              <p className="descriptionTech">ReactJS</p>
            </div>
            <div className="svg">
              <img src={node} alt="" />
              <p className="descriptionTech">NodeJS</p>
            </div>
            <div className="svg">
              <img src={vscode} alt="" />
              <p className="descriptionTech">VSCode</p>
            </div>
            <div className="svg">
              <img src={git} alt="" />
              <p className="descriptionTech">Git</p>
            </div>
            <div className="svg">
              <img src={github} alt="" />
              <p className="descriptionTech">GitHub</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
