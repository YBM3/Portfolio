/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@material-ui/core";

import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  const sectionsRef = useRef({});

  const sections = ["#home", "#works", "#skills", "#about"];
  if (
    typeof window !== "undefined" &&
    typeof IntersectionObserver !== "undefined"
  ) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );
    useEffect(() => {
      sections.forEach((id) => {
        const element = document.querySelector(id);
        if (element) {
          sectionsRef.current[id] = element;
          observer.observe(element);
        }
      });

      return () => {
        if (sectionsRef.current) {
          Object.values(sectionsRef.current).forEach((element) => {
            observer.unobserve(element);
          });
        }
      };
    }, [observer]);
  }

  return (
    <nav>
      {sections.map((section) => (
        <a
          href={section}
          key={section}
          onClick={() => setActiveNav(section)}
          className={activeNav === section ? "active" : ""}
        >
          <Typography>
            {section.substring(1).charAt(0).toUpperCase() +
              section.substring(2)}
          </Typography>
        </a>
      ))}
    </nav>
  );
};
