import React from "react";

export const Resume = () => {
  return (
    <div className="pages">
      <style>{`
       .pages {
          
          min-height: 120vh;
          padding: 2rem 0;
          display: flex;
          justify-content: center;
        }
      
    
        .resume-title {
          font-size: 28px;
          margin-bottom: 0.5rem;
          color:#00bfff;
        }

        .resume-name {
          font-size: 18px;
          margin-bottom: 1rem;
          color:White;
        }

        .resume-section {
        color:White;
          margin-bottom: 1.2rem;
        }

        .resume-section h5 {
          margin-bottom: 0.3rem;
          font-size: 16px;
          color:gray;
        }

        .resume-section p,
        .resume-section ul {
          margin: 0;
          padding: 0;
        }

        .resume-section ul {
          padding-left: 1.2rem;
          list-style-type: disc;
        }
      `}</style>

      <div className="content-container">
        <h2 className="resume-title">Resume</h2>
        <h4 className="resume-name">Adabrah Lincoln Sedem</h4>

        <section className="resume-section">
          <h5>Professional Summary</h5>
          <p>
            Motivated and self-driven aspiring software developer with strong foundational knowledge
            in web and mobile development. Passionate about tech, with one year of independent
            learning in HTML, CSS, JavaScript, and React Native.
          </p>
        </section>

        <section className="resume-section">
          <h5>Education</h5>
          <p>
            <strong>WASSCE Certificate</strong><br />
            [Your School Name], [Location] <br />
            Year Completed: [Insert Year]
          </p>
        </section>

        <section className="resume-section">
          <h5>Technical Skills</h5>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React Native (Beginner)</li>
            <li>VS Code, Git (basic), Web Browsers</li>
            <li>Online tools, video conferencing, basic computer skills</li>
          </ul>
        </section>

        <section className="resume-section">
          <h5>Self-Learning & Projects</h5>
          <p>
            Learned via YouTube, blogs, and tutorials. Built basic websites and practiced front-end
            logic with JavaScript and React Native for mobile apps.
          </p>
        </section>

        <section className="resume-section">
          <h5>Strengths</h5>
          <ul>
            <li>Quick learner & self-motivated</li>
            <li>Consistent and adaptable</li>
            <li>Strong communication skills</li>
            <li>Ready for remote/online environments</li>
          </ul>
        </section>

        <section className="resume-section">
          <h5>Career Objective</h5>
          <p>
            To become a well-rounded software developer, contribute to real-world projects,
            and continue growing with mentorship and hands-on experience.
          </p>
        </section>

         <section className="resume-section">
          <h5>Career Objective</h5>
          <p>
            To become a well-rounded software developer, contribute to real-world projects,
            and continue growing with mentorship and hands-on experience.
          </p>
        </section>
      </div>
    </div>
  );
};
