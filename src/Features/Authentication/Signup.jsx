// Signup.jsx

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Signup.css"

export const Signup = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    })

    // PATTERNS

    let usernameP =
        /^[A-Z]{1}[a-z]{5,} [a-z]{5,}$/

    let passwordP =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^*]).{8,}$/

    let emailP =
        /^[A-Za-z0-9]+@[A-Za-z]{5}\.[a-z]{2,}$/

    let mobileP =
        /^[6-9][0-9]{9}$/

    // HANDLE CHANGE

    function handleChange(e) {

        let { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // VALIDATION

    function validation(e) {

        e.preventDefault()

        let isValid = true

        let newErrors = {
            name: "",
            email: "",
            password: "",
            mobile: ""
        }

        // NAME

        if (!usernameP.test(formData.name)) {

            newErrors.name =
                "Please Enter Valid Username"

            isValid = false
        }

        // PASSWORD

        if (!passwordP.test(formData.password)) {

            newErrors.password =
                "Please Enter Valid Password"

            isValid = false
        }

        // EMAIL

        if (!emailP.test(formData.email)) {

            newErrors.email =
                "Please Enter Valid Email"

            isValid = false
        }

        // MOBILE

        if (!mobileP.test(formData.mobile)) {

            newErrors.mobile =
                "Please Enter Valid Mobile Number"

            isValid = false
        }

        setErrors(newErrors)

        // SUCCESS

        if (isValid) {

            localStorage.setItem(
                "userData",
                JSON.stringify(formData)
            )

            alert("Successfully Signup")

            navigate("/login")
        }
    }

    return (

        <div className="signup-page">

            <div className="signup-card">

                <div className="auth-header">

                    <div className="auth-icon">
                        <i className="fa-solid fa-user-plus"></i>
                    </div>

                    <h2 className="form-title">
                        Create Account
                    </h2>

                    <p className="form-subtitle">
                        Register and continue shopping
                    </p>

                </div>

                <form onSubmit={validation}>

                    {/* NAME */}

                    <div className="input-group">

                        <div className={`input-box ${errors.name ? "error-border" : ""}`}>

                            <i className="fa-solid fa-user"></i>

                            <input
                                type="text"
                                placeholder="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="custom-input"
                            />

                        </div>

                        <p className="error-text">
                            {errors.name}
                        </p>

                    </div>

                    {/* EMAIL */}

                    <div className="input-group">

                        <div className={`input-box ${errors.email ? "error-border" : ""}`}>

                            <i className="fa-solid fa-envelope"></i>

                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="custom-input"
                            />

                        </div>

                        <p className="error-text">
                            {errors.email}
                        </p>

                    </div>

                    {/* PASSWORD */}

                    <div className="input-group">

                        <div className={`input-box ${errors.password ? "error-border" : ""}`}>

                            <i className="fa-solid fa-lock"></i>

                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="custom-input"
                            />

                        </div>

                        <p className="error-text">
                            {errors.password}
                        </p>

                    </div>

                    {/* MOBILE */}

                    <div className="input-group">

                        <div className={`input-box ${errors.mobile ? "error-border" : ""}`}>

                            <i className="fa-solid fa-phone"></i>

                            <input
                                type="text"
                                placeholder="Mobile Number"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="custom-input"
                            />

                        </div>

                        <p className="error-text">
                            {errors.mobile}
                        </p>

                    </div>

                    <button className="submit-btn">
                        SIGN UP
                    </button>

                </form>

                <p className="switch-text">

                    Already have account ?

                    <span
                        className="switch-link"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </span>

                </p>

            </div>

        </div>
    )
}