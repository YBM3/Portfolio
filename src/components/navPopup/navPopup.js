import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@material-ui/core";
import { MdMenu } from "react-icons/md";
import "./navPopup.css";

export const NavPopup = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [isOpen, setIsOpen] = useState(false);
  const sectionsRef = useRef({});

  const sections = ["#home", "#works", "#skills", "#about"];

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
  return (
    <>
      <div className="buttonMenu">
        <MdMenu onClick={() => setIsOpen(!isOpen)} className="menu-icon" />{" "}
      </div>
      <div
        className="bg"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "all" : "none",
        }}
        onClick={() => setIsOpen(false)}
      >
        <div
          className="navPopup"
          style={{
            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <div className="navPopup__container">
            {sections.map((section) => (
              <a
                href={section}
                key={section}
                onClick={() => setActiveNav(section)}
                className={activeNav === section ? "active" : ""}
              >
                <Typography
                  style={{
                    fontSize: "1.5rem",
                  }}
                >
                  {section.substring(1).charAt(0).toUpperCase() +
                    section.substring(2)}
                </Typography>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
