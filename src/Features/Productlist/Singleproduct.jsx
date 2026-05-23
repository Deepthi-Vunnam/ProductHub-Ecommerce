import axios from "axios";
import { useEffect, useState } from "react";
import './Singleproduct.css'
import {
    useParams,
    Link
} from "react-router-dom";

import {
    useDispatch,
    useSelector
} from "react-redux";

import {
    ADDCART,
    REMOVECART
} from "../../Redux/Cart/CartSlice";

export const Singleproduct = () => {

    let dispatch = useDispatch();

    let cartData = useSelector(
        state => state.cart
    );

    let { id } = useParams();

    let [singlepro, setSinglePro] = useState({});

    useEffect(() => {

        async function singleP() {

            let { data } = await axios.get(
                `https://dummyjson.com/products/${id}`
            );

            setSinglePro(data);
        }

        singleP();

    }, [id]);

    // Check product already exists in cart

    let existingProduct = cartData.find(
        item => item.id === singlepro.id
    );

    return (

        <div className="single-product-container">

            <div className="single-product-card">

                {/* Image */}

                <div className="single-product-image">

                    {
                        singlepro.thumbnail && (

                            <img
                                src={singlepro.thumbnail}
                                alt={singlepro.title}
                                className="single-product-image-img"
                            />

                        )
                    }

                </div>

                {/* Details */}

                <div className="single-product-details">

                    <h2 className="single-product-title">
                        {singlepro.title}
                    </h2>

                    <p className="single-product-description">
                        {singlepro.description}
                    </p>

                    <h4 className="single-product-price">
                        ₹ {singlepro.price}
                    </h4>

                    <div className="single-product-actions">

                        {
                            existingProduct ? (

                                <Link
                                    to="/cart"
                                    className="action-button primary-button"
                                >
                                    Go To Cart
                                </Link>

                            ) : (

                                <button
                                    className="action-button primary-button"
                                    onClick={() =>
                                        dispatch(
                                            ADDCART(singlepro)
                                        )
                                    }
                                >
                                    🛒 Add To Cart
                                </button>

                            )
                        }

                        <button
                            className="action-button secondary-button"
                            onClick={() =>
                                dispatch(
                                    REMOVECART(singlepro.id)
                                )
                            }
                        >
                            ❌ Remove
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};
