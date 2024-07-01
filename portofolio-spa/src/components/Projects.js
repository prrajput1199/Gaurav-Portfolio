import React from "react";
import ProjectBox from "./ProjectBox";
import swirl from "../img/swirl-website.jpg";
import tap from "../img/tap-music.jpg";
import weather from "../img/weather-app.jpg";
import ProjectAnimation from "./ProjectAnimation";

const Projects = () => (
  <div className="project-wrapper">
    <div className="project-title">
      <p className="p-title"> Projects </p>
    </div>
    <div className="project-list">
      <ProjectBox
        visit="https://devedwin.github.io/Swirl-Website/"
        title="Financial Market analysis Using SMA strategy"
        image={swirl}
        text="Developed and implemented a simple Moving Average Strategy to analyze and visualize financial market "
      />
      <ProjectBox
        visit="https://devedwin.github.io/tap-music/"
        title="Financial Market Analysis Using MACD Long-short Strategy"
        image={tap}
        text="Conducted backtesting and optimization of MACD parameters!"
      />
      <ProjectBox
        visit="https://devedwin.github.io/weather-app/"
        title="Portfolio Optimization Analysis using Monte carlo Simulation"
        image={weather}
        text="Utilized historical data from Yahoo Finance to assess portfolio perfomance"
      />
    </div>
    <ProjectAnimation/>
  </div>
);

export default Projects;
