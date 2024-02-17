import React from "react";
import ProjectList from "./ProjectList";
//import bms from "../../assets/images/work/bms.png";

const Projects = () => {
  //const imagePath = require(`../../assets/images/work`);
  const data = [
    {
      img: require(`../../assets/images/work/bms.png`),
      name: "Bristol Myers Squibb Project",
      description:
        "For the Bristol Myer project, I took charge of developing and implementing 15 custom React components. Through strategic integration of React Router, I enhanced the navigation user experience, ensuring smooth transitions and intuitive browsing across the platform. These tailored components were meticulously crafted to align with Bristol Myer's brand identity and functional requirements, ultimately enhancing overall usability and engagement for their audience.",
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
      ],
    },
    {
      img: require(`../../assets/images/work/AldiH.png`),
      name: "Aldi Hofer",
      description:
        "Contributed to the development of a high-performance e-commerce platform, achieving a notable 43% increase in user engagement and a 35% boost in satisfaction. Key contributions include optimizing the product data model, implementing seamless product filtering and pagination, and integrating Stripe for payment processing, resulting in increased successful checkouts and a 35% reduction in cart abandonment rates. Developed a custom API layer, JWT token management, and utilized Redux for state management, reducing load time by 47%. Tested API functionality using POSTMAN.",
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
    // {
    //   img: require(`../../assets/images/work/AldiH.png`),
    //   name: "HERO MOTOR",
    //   description:
    //     "Hero MotoCorp is a renowned Indian multinational motorcycle and scooter manufacturer, recognized as the world's largest two-wheeler manufacturer in terms of unit sales. With a legacy spanning decades, It is known for producing popular and reliable motorcycles, contributing significantly to the global motorcycling industry.",
    //   projectlink: "https://www.hofer.at/de/homepage.html",
    //   techStackUsed: [
    //     {
    //       name: "Node Js",
    //     },
    //     {
    //       name: "React",
    //     },
    //     {
    //       name: "Express",
    //     },
    //   ],
    // },
    // {
    //   img: require(`../../assets/images/work/hero.png`),
    //   name: "HSBC",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    //   projectlink: "https://www.hofer.at/de/homepage.html",
    //   techStackUsed: [
    //     {
    //       name: "Node Js",
    //     },
    //     {
    //       name: "React",
    //     },
    //     {
    //       name: "Express",
    //     },
    //   ],
    // },
    {
      img: require(`../../assets/images/work/HSBC.png`),
      name: "HSBC",
      description:
        "Led the design and implementation of the User Data Model for the HSBC project, streamlining data structures to optimize performance. Established and fine-tuned MongoDB connections, ensuring efficient data retrieval and storage. Engineered robust User Login/Registration Controllers, resulting in a notable 15% improvement in overall user experience. Implemented advanced password hashing techniques to bolster data security and proficiently managed JWT authentication for secure user authorization. Orchestrated the development of a cutting-edge Single Page Application (SPA) using React.js, delivering optimal performance and contributing to a significant 20% increase in user engagement.",
      projectlink: "https://www.us.hsbc.com/",
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
      img: require(`../../assets/images/work/symantec.png`),
      name: "Symantec",
      description:
        "For the Symantec project, developed custom components, templates, and workflows in AEM versions 6.2 through 6.5, enhancing the platform's functionality and user experience. Reduced development time by an impressive 20% through the implementation of efficient coding practices, while simultaneously improving the performance of AEM websites. Demonstrated agility in addressing critical support issues, achieving a remarkable performance rate of 97% in issue resolution.",
      projectlink: "https://sep.securitycloud.symantec.com/v2/landing",
      techStackUsed: [
        {
          name: "AEM",
        },
        {
          name: "Java",
        },
        {
          name: "Javascript",
        },
        {
          name: "HTML/ Sling",
        },
      ],
    },
  ];
  return (
    <div className="container" id="projects">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div key={index}>
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
