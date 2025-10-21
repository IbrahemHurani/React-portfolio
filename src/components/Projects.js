import React from "react";
import "./Projects.css";
const PROJECTS=[
    {
        id:'project1',
        title:'Hells Paradise',
        desc:'3D-Game',
        cover:'End-image.jpeg',
        tags:["C#","Unity","OOP","algorthim","3D","UI/UX"],
        liveUrl:"https://ibrahem-hurani.itch.io/hells-paradise-3d",
        codeUrl:"https://github.com/CourseGamedeveloper/Hells-Paradise"

    },
    {
        id:'project2',
        title:'BOOK-NOW',
        desc:'App manage appointments',
        cover:'white-background.jpg',
        tags:["Java","Andriod","OOP","FireBase","SDK"],
        liveUrl:"https://github.com/yousefmasarwa97/Book_Now",
        codeUrl:"https://github.com/yousefmasarwa97/Book_Now"

    },
    {
        id:'project3',
        title:'Worst-Case Fair Division Algorithn Implementation & Web Platform',
        desc:'Algorithm',
        cover:'white-background.jpg',
        tags:["JavaScipts","Python-Flask","OOP","research","HTML","CSS"],
        liveUrl:"https://ibrahemhurani.csariel.xyz/",
        codeUrl:"https://github.com/IbrahemHurani/markakis_psomas_web"

    },
    {
        id:'project4',
        title:'Chat Room',
        desc:'Client-Server Chat Application',
        cover:'white-background.jpg',
        tags:["Python","TCP","UDP","OOP"],
        liveUrl:"https://www.youtube.com/watch?v=0onQCSt8kuE",
        codeUrl:"https://github.com/IbrahemHurani/Chat_ROOM"

    },
    
    

];
const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__header">
        <h3>My Work</h3>
        <p>A collection of projects I’ve worked on.</p>
      </div>

      <div className="projects__grid">
        {PROJECTS.map(p => (
          <article key={p.id} className="project-card">
            <img className="project-card__img" src={p.cover} alt={`${p.title} cover`} />
            <div className="project-card__overlay">
              <div className="project-card__text">
                <h4 className="project-card__title">{p.title}</h4>
                <p className="project-card__desc">{p.desc}</p>
                <ul className="project-card__tags">
                  {p.tags.map(t => <li key={t}>{t}</li>)}
                </ul>
              </div>
              <div className="project-card__actions">
                {p.liveUrl && (
                  <a className="btn btn--primary" href={p.liveUrl} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
                {p.codeUrl && (
                  <a className="btn" href={p.codeUrl} target="_blank" rel="noreferrer">
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Projects;