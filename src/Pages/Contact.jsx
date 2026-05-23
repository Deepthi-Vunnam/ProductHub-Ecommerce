// Contact.jsx

import "./Contact.css";

export const Contact = () => {

  return (

    <div className="contact-page">

      {/* LEFT */}

      <div className="contact-left">

        <span className="contact-tag">
          CONTACT US
        </span>

        <h1>
          Let's Build Something Amazing Together 🚀
        </h1>

        <p>
          Have questions, ideas, or feedback?
          We'd love to hear from you.
          Feel free to reach out anytime.
        </p>

        <div className="contact-info">

          <div className="info-box">

            <span>📧</span>

            <div>
              <h5>Email</h5>
              <p>support@producthub.com</p>
            </div>

          </div>

          <div className="info-box">

            <span>📞</span>

            <div>
              <h5>Phone</h5>
              <p>+91 9000000000</p>
            </div>

          </div>

          <div className="info-box">

            <span>📍</span>

            <div>
              <h5>Location</h5>
              <p>Hyderabad, India</p>
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="contact-right">

        <form className="contact-form">

          <h2>Send Message</h2>

          <input
            type="text"
            placeholder="Enter your name"
          />

          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="5"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>

  );
};