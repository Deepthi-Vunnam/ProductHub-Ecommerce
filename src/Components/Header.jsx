// Header.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

export const Header = ({
  search,
  setSearch,
  setCategory,
  setPage
}) => {

  let [wishlist, setWishlist] = useState([]);

  let [wishlistOpen, setWishlistOpen] =
    useState(false);

  let cartData = useSelector(
    (state) => state.cart
  );

  /* LOAD WISHLIST */

  useEffect(() => {

    const loadWishlist = () => {

      let items = JSON.parse(
        localStorage.getItem(
          "wishlistItems"
        ) || "[]"
      );

      setWishlist(items);
    };

    loadWishlist();

    window.addEventListener(
      "wishlistUpdated",
      loadWishlist
    );

    return () =>
      window.removeEventListener(
        "wishlistUpdated",
        loadWishlist
      );

  }, []);

  return (

    <nav className="navbar navbar-expand-lg custom-navbar">

      <div className="container-fluid">

        {/* LEFT */}

        <div className="left-navbar">

          {/* LOGO */}

          <Link
            className="navbar-brand brand-logo"
            to="/home"
          >

            🛍 Product Hub

          </Link>

          {/* NAV LINKS */}

          <ul className="navbar-nav nav-center">

            <li className="nav-item">

              <Link
                className="nav-link nav-custom-link"
                to="/home"
              >
                Home
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link nav-custom-link"
                to="/about"
              >
                About
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link nav-custom-link"
                to="/products"
              >
                Products
              </Link>

            </li>
            <li className="nav-item">

              <Link
                className="nav-link nav-custom-link"
                to="/contact"
              >
                Contact
              </Link>

            </li>
            <li className="nav-item">

              <Link
                className="nav-link nav-custom-link"
                to="/"
              >
                User Form
              </Link>

            </li>

          </ul>

        </div>

        {/* SEARCH */}



        {/* RIGHT */}

        <div className="nav-actions">

          {/* WISHLIST */}

          <div className="wishlist-wrapper">

            <button
              className="wishlist-btn"
              onClick={() =>
                setWishlistOpen(!wishlistOpen)
              }
            >

              ❤️

              <span>
                {wishlist.length}
              </span>

            </button>

            {
              wishlistOpen && (

                <div className="wishlist-dropdown">

                  <h6>
                    My Wishlist
                  </h6>

                  {
                    wishlist.length === 0 ? (

                      <p className="wishlist-empty">
                        No wishlist items
                      </p>

                    ) : (

                      wishlist.map((item) => (

                        <div
                          className="wishlist-item"
                          key={item.id}
                        >

                          <img
                            src={item.thumbnail}
                            alt={item.title}
                          />

                          <div className="wishlist-details">

                            <p>
                              {item.title}
                            </p>

                            <span>
                              ₹{item.price}
                            </span>

                          </div>

                        </div>

                      ))

                    )
                  }

                </div>

              )
            }

          </div>

          {/* CART */}

          <Link
            className="cart-btn"
            to="/cart"
          >

            🛒

            <span>
              {cartData.length}
            </span>

          </Link>

        </div>

      </div>

    </nav>

  );
};