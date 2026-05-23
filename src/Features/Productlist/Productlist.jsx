import axios from "axios";
import { useEffect, useState } from "react";
import "./Productlist.css";
import { Link } from "react-router-dom";

const Productlist = () => {
    let [categorylist, setCategorylist] = useState([]);
    let [products, setProducts] = useState([]);
    let [category, setCategory] = useState("");
    let [search, setSearch] = useState("");
    let [page, setPage] = useState(1);
    let [btns, setBtns] = useState(0);
    let [wishlistIds, setWishlistIds] = useState(() => {
        let saved = window.localStorage.getItem("wishlistItems");
        return saved ? JSON.parse(saved).map((item) => item.id) : [];
    });
    let [productRatings, setProductRatings] = useState(() => {
        return JSON.parse(window.localStorage.getItem("productRatings") || "{}") || {};
    });
    let perpage = 10;

    const addToWishlist = (product) => {
        let existing = JSON.parse(window.localStorage.getItem("wishlistItems") || "[]");
        let already = existing.find((item) => item.id === product.id);
        let updated = already
            ? existing.filter((item) => item.id !== product.id)
            : [
                  ...existing,
                  {
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      thumbnail: product.thumbnail,
                  },
              ];

        window.localStorage.setItem("wishlistItems", JSON.stringify(updated));
        setWishlistIds(updated.map((item) => item.id));
        window.dispatchEvent(new Event("wishlistUpdated"));
    };

    const updateProductRating = (productId, rating) => {
        let savedRatings = JSON.parse(window.localStorage.getItem("productRatings") || "{}") || {};
        let updatedRatings = {
            ...savedRatings,
            [productId]: rating,
        };
        window.localStorage.setItem("productRatings", JSON.stringify(updatedRatings));
        setProductRatings(updatedRatings);
    };

    useEffect(() => {
        async function datacategories() {
            let { data } = await axios.get(
                "https://dummyjson.com/products/category-list"
            );
            setCategorylist(data);
        }
        datacategories();
    }, []);

    useEffect(() => {
        async function threeapi() {
            let api;

            if (category) {
                api = `https://dummyjson.com/products/category/${category}`;
            } else if (search) {
                api = `https://dummyjson.com/products/search?q=${search}`;
            } else {
                api = `https://dummyjson.com/products`;
            }

            let { data } = await axios.get(api);

            let allproducts = data.products || [];
            setBtns(allproducts.length);

            let pagination = allproducts.slice(
                (page - 1) * perpage,
                page * perpage
            );

            setProducts(pagination);
        }

        threeapi();
    }, [category, search, page]);

    let viewButtons = Math.ceil(btns / perpage);

    return (
        <>
            {/* FILTER BAR */}
            <div className="filter-bar">

                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search items..."
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCategory("");
                            setPage(1);
                        }}
                    />
                </div>

                <select
                    className="category-select"
                    onChange={(e) => {
                        setCategory(e.target.value);
                        setSearch("");
                        setPage(1);
                    }}
                >
                    <option value="">ALL CATEGORIES</option>
                    {categorylist.map((item, i) => (
                        <option value={item} key={i}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>

            {/* PRODUCTS */}
            <div className="product-container">
                {products.map((item) => (
                    <div key={item.id} className="product-card">
                        <div className="product-card-header">
                            <span className="product-brand">{item.brand}</span>
                            <button
                                type="button"
                                className={`wishlist-icon ${wishlistIds.includes(item.id) ? "active" : ""}`}
                                onClick={() => addToWishlist(item)}
                                aria-label={wishlistIds.includes(item.id) ? "Remove from wishlist" : "Add to wishlist"}
                            >
                                {wishlistIds.includes(item.id) ? "♥" : "♡"}
                            </button>
                        </div>

                        <Link
                            to={`/products/${item.id}`}
                            className="product-image-link"
                        >
                            <img src={item.thumbnail} alt={item.title} />
                        </Link>

                        <div className="product-card-content">
                            <Link to={`/products/${item.id}`} className="product-info-link">
                                <h3 className="product-title">{item.title}</h3>
                                <p className="product-desc">{item.description}</p>
                            </Link>

                            <div className="product-card-footer">
                                <span className="product-price">₹{item.price}</span>
                                <span className="product-rating">{item.rating?.toFixed(1)} ★</span>
                            </div>

                            <div className="product-rating-input">
                                <span className="rating-label">Your rating:</span>
                                <div className="stars-row">
                                    {Array.from({ length: 5 }, (_, index) => {
                                        let value = index + 1;
                                        let userRating = productRatings[item.id] || 0;
                                        return (
                                            <button
                                                key={value}
                                                type="button"
                                                className={`star-button ${userRating >= value ? "filled" : ""}`}
                                                onClick={() => updateProductRating(item.id, value)}
                                                aria-label={`Give ${value} star${value > 1 ? "s" : ""}`}
                                            >
                                                ★
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* PAGINATION */}
            <div className="pagination">
                {viewButtons > 0 &&
                    Array.from({ length: viewButtons }, (_, i) => i + 1).map(
                        (btn) => (
                            <button
                                key={btn}
                                onClick={() => setPage(btn)}
                                className={page === btn ? "active" : ""}
                            >
                                {btn}
                            </button>
                        )
                    )}
            </div>
        </>
    );
};

export default Productlist;