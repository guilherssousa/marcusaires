import { useRef, useEffect } from "preact/hooks";
import { gsap, Power3 } from "gsap";
import { CustomEase } from "gsap/CustomEase";

import projects from "./data/projects.json";

const ease = CustomEase.create("custom", "M0,0,C0.304,0.202,0.4,1,1,1");

export function App() {
  const videosRef = useRef(null);

  useEffect(() => {
    gsap.from(".videos", {
      duration: 1,
      scale: 1.5,
      ease: Power3.easeOut,
    });
    gsap.from(".website-title", {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: Power3.easeOut,
    });

    for (let i = 0; i < projects.length; i++) {
      gsap.from(`a.project[data-project="${i}"]`, {
        duration: i * 0.1,
        y: 100,
        scale: 1.15,
        opacity: 0,
        ease,
      });
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="menu">
        <p className="website-title">Marcus Aires </p>
      </div>

      <div className="videos" ref={videosRef}>
        {projects.map((project, index) => (
          <div className="project-wrapper" key={`project-${index}`}>
            <a
              href={project.link}
              className="project"
              style={{ backgroundImage: `url(${project.image})` }}
              rel="noreferrer"
              target="_blank"
              data-project={index}
            >
              <div className="project-name">{project.name}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
