import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Projects = () => {
  const data = [
    {
      img: "https://source.unsplash.com/600x400/?medical",
      name: "Bristol Myers Squibb Project",
      description:
        "Bristol Myers Squibb (BMS) is a global biopharmaceutical company dedicated to innovative medicine development for unmet medical needs, specializing in areas such as oncology and cardiovascular health. Operating at the forefront of healthcare, BMS is committed to advancing science and improving patients' lives.",
      projectlink: "https://www.bms.com/",
      techStackUsed: [
        {
          name: "Node Js",
        },
        {
          name: "React",
        },
        {
          name: "Express",
        },
        {
          name: "Vue",
        },
      ],
    },
    {
      img: "https://source.unsplash.com/600x400/?aldi",
      name: "ALDI HOFER",
      description:
        "ALDI and HOFER have been adapting to the digital landscape, offering online platforms for customers to browse products, view promotions, and in some cases, place online orders for home delivery or pickup. The specifics of their e-commerce business may vary by country and region.",
      projectlink:
        "https://www.hofer.at/de/ueber-hofer/unternehmen/international.html",
      techStackUsed: [
        {
          name: "Node Js",
        },
        {
          name: "React",
        },
        {
          name: "Express",
        },
      ],
    },
    {
      img: "https://source.unsplash.com/600x400/?motorcycle",
      name: "HERO MOTOR",
      description:
        "Hero MotoCorp is a renowned Indian multinational motorcycle and scooter manufacturer, recognized as the world's largest two-wheeler manufacturer in terms of unit sales. With a legacy spanning decades, It is known for producing popular and reliable motorcycles, contributing significantly to the global motorcycling industry.",
      projectlink: "https://www.hofer.at/de/homepage.html",
      techStackUsed: [
        {
          name: "Node Js",
        },
        {
          name: "React",
        },
        {
          name: "Express",
        },
      ],
    },
    {
      img: "https://source.unsplash.com/600x400/?motorcycle",
      name: "HSBC",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      projectlink: "https://www.hofer.at/de/homepage.html",
      techStackUsed: [
        {
          name: "Node Js",
        },
        {
          name: "React",
        },
        {
          name: "Express",
        },
      ],
    },
    {
      img: "https://source.unsplash.com/600x400/?motorcycle",
      name: "HSBC",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      projectlink: "https://www.hofer.at/de/homepage.html",
      techStackUsed: [
        {
          name: "Node Js",
        },
        {
          name: "React",
        },
        {
          name: "Express",
        },
      ],
    },
    {
      img: "https://source.unsplash.com/600x400/?motorcycle",
      name: "HSBC",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      projectlink: "https://www.hofer.at/de/homepage.html",
      techStackUsed: [
        {
          name: "Node Js",
        },
        {
          name: "React",
        },
        {
          name: "Express",
        },
      ],
    },
  ];
  return (
    <div className="container">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
