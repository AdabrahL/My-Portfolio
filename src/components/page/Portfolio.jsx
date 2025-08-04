import React from "react";
import { Footer } from "../Footer/Footer";
export const Portfolio = () => {
  return (
    <>
    <div className="pages">
    <div className="content-container">
      <style>{`
        .portfolio-page {
          background: #1a1a1a;
          min-height: 100vh;
          padding: 2rem 1rem;
          color: #fff;
          font-family: 'Segoe UI', sans-serif;
        }

        .portfolio-title {
          text-align: center;
          font-size: 32px;
          color: #00bfff;
          margin-bottom: 2rem;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          background-color: #2a2a2a;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          transition: transform 0.2s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .project-title {
          font-size: 20px;
          color: #00bfff;
          margin-bottom: 0.5rem;
        }

        .project-desc {
          font-size: 14px;
          line-height: 1.4;
        }

        .project-link {
          margin-top: 0.8rem;
          display: inline-block;
          color: #00bfff;
          font-size: 14px;
          text-decoration: underline;
        }
      `}</style>

      <h2 className="portfolio-title">My Projects</h2>

      <div className="portfolio-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h3 className="project-title">Personal Portfolio Website</h3>
          <p className="project-desc">
            A responsive portfolio site built with React and SCSS to showcase my skills, resume, and
            contact information.
          </p>
          <a
            href="https://github.com/AdabrahL/My-Portfolio.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3 className="project-title">Fake-API Store</h3>
          <p className="project-desc">
            A simple task manager web app using HTML, CSS, and JavaScript. Users can add, delete, and
            mark tasks as complete.
          </p>
          <a
            href="https://github.com/AdabrahL/React-FakeAPI-Store.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3 className="project-title">Real Estate Website Clone</h3>
          <p className="project-desc">
            A mobile-first weather app using React Native and OpenWeatherMap API to display
            temperature, humidity, and city name.
          </p>
          <a
            href="https://github.com/AdabrahL/Estate-Masters-Web.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <h3 className="project-title">Receipt-Generator</h3>
          <p className="project-desc">
            A mobile-first weather app using React Native and OpenWeatherMap API to display
            temperature, humidity, and city name.
          </p>
          <a
            href="https://github.com/AdabrahL/Receipt-Generator.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};
