import React, { useState } from "react";
import "./SkillStack.css";

const SkillStack = () => {
  const data = [
    {
      name: "Full Stack Developer",
    },
    {
      name: "Node js",
    },
    {
      name: "React js",
    },
    {
      name: "Vue js",
    },
    {
      name: "Express js",
    },
    {
      name: "Vue js",
    },
    {
      name: "Nuxt js",
    },
    {
      name: "Angular js",
    },
    {
      name: "Vanila js",
    },
    {
      name: "Node js",
    },
    {
      name: "Javascript",
    },
    {
      name: "Typescript",
    },
    {
      name: "Python",
    },
    {
      name: "Django",
    },
    {
      name: "UI/UX Design",
    },
  ];

  const colors = [
    "#F1C40F",
    "#4B088A",
    "#8181F7",
    "#FE2EF7",
    "#585858",
    "#800000",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#FF1042",
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(6);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container techstack-section" id="techstack">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
            <div
              className={
                index === 0
                  ? "tech-content-marked tech-content"
                  : "tech-content"
              }
            >
              <span
                className="tech-number"
                style={{ backgroundColor: colors[index] }}
              >
                {index + 1}
              </span>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <span className="load-more-tech-stack" onClick={loadMore}>
          Load More
        </span>
      )}
    </div>
  );
};

export default SkillStack;
