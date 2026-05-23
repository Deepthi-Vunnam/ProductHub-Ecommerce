import "./About.css";

export const About = () => {
  return (
    <div className="about-container">

      <div className="about-card">

        {/* HERO */}
        <div className="about-hero">
          <img
            src="https://d2908q01vomqb2.cloudfront.net/c5b76da3e608d34edb07244cd9b875ee86906328/2021/05/10/eCommerce.jpeg"
            alt="ecommerce"
          />

          <h1>About Our E-Commerce Platform</h1>
          <p className="subtitle">
            Fast • Secure • Modern Shopping Experience
          </p>
        </div>

        {/* DESCRIPTION */}
        <div className="section">
          <p>
            This E-Commerce platform is built using React, Redux Toolkit,
            Axios and modern frontend tools to provide smooth shopping experience.
          </p>

          <p>
            Users can explore products, search items, filter categories,
            manage cart and see real-time price updates.
          </p>
        </div>

        {/* FEATURE IMAGES SECTION */}
        <h2>🛍️ Platform Highlights</h2>

        <div className="image-grid">

          <img src="https://d2908q01vomqb2.cloudfront.net/c5b76da3e608d34edb07244cd9b875ee86906328/2021/05/10/eCommerce.jpeg" />
          <img src="https://uaewebsitedevelopment.com/wp-content/uploads/2022/08/UI-and-UX.jpg" />
          <img src="https://slidebazaar.com/wp-content/uploads/2022/10/ecommerce-powerpoint-template.jpg" />
          <img src="https://t4.ftcdn.net/jpg/06/22/39/91/360_F_622399137_jlEDsEN0pUMZA6jMKShRoq2po69QBQXj.jpg" />

        </div>

        {/* FEATURES */}
        <h2>⭐ Key Features</h2>

        <div className="features">

          <div className="box">🛒 Smart Product Listing</div>
          <div className="box">🔎 Powerful Search</div>
          <div className="box">🎯 Category Filtering</div>
          <div className="box">➕➖ Cart Quantity Control</div>
          <div className="box">💰 Live Price Calculation</div>
          <div className="box">💾 Local Storage Support</div>
          <div className="box">⚡ Fast Performance</div>
          <div className="box">📱 Mobile Friendly UI</div>

        </div>

      </div>
    </div>
  );
};