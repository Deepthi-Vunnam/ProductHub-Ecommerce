// Login.jsx

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Signup.css"

export const Login = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const [loginError, setLoginError] = useState("")

    // PATTERNS

    let passwordP =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^*]).{8,}$/

    let emailP =
        /^[A-Za-z0-9]+@[A-Za-z]{5}\.[a-z]{2,}$/

    // HANDLE CHANGE

    function handleChange(e) {

        let { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // LOGIN VALIDATION

    function validation(e) {

        e.preventDefault()

        let isValid = true

        let newErrors = {
            email: "",
            password: ""
        }

        // EMAIL

        if (!emailP.test(formData.email)) {

            newErrors.email =
                "Please Enter Valid Email"

            isValid = false
        }

        // PASSWORD

        if (!passwordP.test(formData.password)) {

            newErrors.password =
                "Password must be 8+ chars with A-Z, a-z, 0-9, symbol"
            isValid = false
        }

        setErrors(newErrors)

        // LOCAL STORAGE DATA

        let storedData =
            JSON.parse(localStorage.getItem("userData"))

        // LOGIN CHECK

        if (isValid) {

            if (
                storedData &&
                formData.email === storedData.email &&
                formData.password === storedData.password
            ) {

                alert("Successfully Login")

                navigate("/home")
            }

            else {

                setLoginError(
                    "Incorrect Email or Password"
                )
            }
        }
    }

    return (

        <div className="signup-page">

            <div className="signup-card">

                <div className="auth-header">

                    <div className="auth-icon">
                        <i className="fa-solid fa-user"></i>
                    </div>

                    <h2 className="form-title">
                        Login
                    </h2>

                    <p className="form-subtitle">
                        Welcome Back
                    </p>

                </div>

                <form onSubmit={validation}>

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

                    <div className="form-note">

                        <label className="remember-label">

                            <input type="checkbox" />

                            Remember me

                        </label>

                        <span className="forgot-link">
                            Forgot Password?
                        </span>

                    </div>

                    <p className="login-error">
                        {loginError}
                    </p>

                    <button className="submit-btn">
                        LOGIN
                    </button>

                </form>

                <p className="switch-text">

                    Don’t have account ?

                    <span
                        className="switch-link"
                        onClick={() => navigate("/signup")}
                    >
                        Register
                    </span>

                </p>

            </div>

        </div>
    )
}