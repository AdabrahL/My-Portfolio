import React from "react";

export const Contact = () => {
  return (
    <div className="pages">
      <style>{`
        .pages {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 2rem;
          background-color: #0f172a;
          min-height: 100vh;
          box-sizing: border-box;
        }

        .content-container {
          background-color: #1e293b;
          color: #f8fafc;
          padding: 2rem;
          border-radius: 10px;
          max-width: 800px;
          width: 100%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .contact-title {
          font-size: 24px;
          margin-bottom: 1.5rem;
          color: #fbbf24;
        }

        .contact-info {
          margin-bottom: 1.5rem;
        }

        .contact-info h4 {
          margin-bottom: 0.5rem;
          font-size: 16px;
          color: #38bdf8;
        }

        .contact-info p {
          margin: 0;
          font-size: 14px;
          color: #cbd5e1;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-form input,
        .contact-form textarea {
          background-color: #0f172a;
          border: 1px solid #334155;
          border-radius: 6px;
          padding: 0.75rem;
          color: #f8fafc;
          font-size: 14px;
        }

        .contact-form button {
          background-color: #38bdf8;
          color: #0f172a;
          padding: 0.75rem;
          font-weight: bold;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .contact-form button:hover {
          background-color: #0ea5e9;
        }
      `}</style>

      <div className="content-container">
        <h2 className="contact-title">Get In Touch</h2>

        <div className="contact-info">
          <h4>Name:</h4>
          <p>Sedem Adabrah Lincoln</p>

          <h4>Email:</h4>
          <p>lincolnadabrah@gmail.com</p>

          <h4>Phone:</h4>
          <p>0205521660</p>

          <h4>Address:</h4>
          <p>Click Here to View Map</p>
        </div>

        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea rows="5" name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
