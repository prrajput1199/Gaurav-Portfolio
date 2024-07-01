import React from "react";
import IntroAnimation from "./IntroAnimation";
import { Github, Youtube, Linkedin } from "react-feather";

const Intro = () => (
  <div className="intro-wrapper">
    <div className="title-wrapper">
      <h1 className="title">Gaurav Kumar</h1>
      <h2 className="subtitle">Quant developer</h2>
    </div>
    <div className="social-wrapper">
      <a href="https://github.com/devedwin" target="_blank">
        <Github color="#EFEFEF" size="48" className="social-links" />
      </a>
      <a
        href="https://www.linkedin.com/in/simo-edwin-57a25714b/"
        target="_blank"
      >
        <Linkedin color="#EFEFEF" size="48" className="social-links" />
      </a>
    </div>
    <IntroAnimation />
  </div>
);

export default Intro;
