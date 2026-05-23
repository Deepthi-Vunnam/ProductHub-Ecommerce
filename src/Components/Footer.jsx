import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">About</a></li>
        </ul>

        <p className="footer-text">
          © 2026 Product Hub | Fresh & Simple Shopping Experience
        </p>

      </div>

    </footer>
  );
};