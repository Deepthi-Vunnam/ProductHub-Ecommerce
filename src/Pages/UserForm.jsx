import { useState } from "react"
import { Signup } from "../Features/Authentication/Signup"
import { Login } from "../Features/Authentication/Login"
import "./UserForm.css"

export const UserForm = () => {

  let [page, setPage] = useState(true)

  return (
    <>
      <center>

        <div className="toggle-buttons">

          <button
            className={page ? "btn active-btn" : "btn"}
            onClick={() => setPage(true)} >
            SignUp
          </button>
          <button
            className={!page ? "btn active-btn" : "btn"}
            onClick={() => setPage(false)} >
            Login
          </button>
        </div>

      </center>

      {page ? <Signup /> : <Login />}

    </>
  )
}