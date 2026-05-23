import "./Home.css"
import { useNavigate } from "react-router-dom"

export const Home = () => {

  const navigate = useNavigate()

  return (

    <div className="home-wrapper">

      {/* HERO */}

      <div className="hero">

        <div className="hero-content">

          <div className="hero-left">

            <span className="hero-tag">Smart Shopping Platform</span>

            <h1>
              Welcome to <br /> Product Hub 🛒
            </h1>

            <p>
              Discover trending products, best deals and a smooth shopping experience.
            </p>

            <div className="hero-buttons">

              <button className="shop-btn" onClick={() => navigate("/products")}>
                Start Shopping
              </button>

              <button
                className="learn-btn"
                onClick={() => navigate("/about")}
              >
                Explore More
              </button>

            </div>

          </div>

          <div className="hero-right">

            <img
              src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg"
              alt="shopping"
            />

          </div>

        </div>

      </div>

      {/* WHY CHOOSE US */}

      <h2 className="title">Why Choose Us?</h2>

      <div className="highlights">

        <div className="box">

          <div className="icon">🛍️</div>

          <h3>Wide Products</h3>

          <p>All categories available in one place.</p>

        </div>

        <div className="box">

          <div className="icon">⚡</div>

          <h3>Fast Experience</h3>

          <p>Quick loading and smooth UI flow.</p>

        </div>

        <div className="box">

          <div className="icon">🔒</div>

          <h3>Secure Login</h3>

          <p>Your data is always protected.</p>

        </div>

        <div className="box">

          <div className="icon">🛒</div>

          <h3>Smart Cart</h3>

          <p>Easy add & remove products anytime.</p>

        </div>

      </div>

      {/* TRENDING */}

      <h2 className="title">Trending Collections</h2>

      <div className="grid">

        <div className="image-card">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" />
        </div>

        <div className="image-card">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" />
        </div>

        <div className="image-card">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" />
        </div>

        <div className="image-card">
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" />
        </div>

      </div>

      {/* CTA */}

      <div className="cta">

        <h2>Ready to Explore?</h2>

        <p>Start shopping now and enjoy best deals.</p>

        <button onClick={() => navigate("/products")}>
          Go to Products
        </button>

      </div>

    </div>
  )
}