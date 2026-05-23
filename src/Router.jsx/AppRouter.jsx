import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { About } from "../Pages/About"
import { Products } from "../Pages/Products"
import { UserForm } from "../Pages/UserForm"
import { Login } from "../Features/Authentication/Login"
import { Signup } from "../Features/Authentication/Signup"
import { Singleproduct } from "../Features/Productlist/Singleproduct"
import { Cart } from "../Pages/Cart"
import { Contact } from "../Pages/Contact"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path ="/contact" element={<Contact/>}/>
                <Route path="/cart" element={<Cart/>} />
                <Route path="/" element={<UserForm />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products/:id" element={<Singleproduct />} />
            </Routes>
        </>
    )
}