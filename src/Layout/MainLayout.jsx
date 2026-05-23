import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { AppRouter } from "../Router.jsx/AppRouter"
import { useLocation } from "react-router-dom"

export const MainLayout = () => {

    const location = useLocation()
    const hidecomp = ["/","/login","/signup"]
    const compview = hidecomp.includes(location.pathname)

    return (
        <>
            {!compview && <Header />}

            <main className="page-content">
                <AppRouter />
            </main>

            {!compview && <Footer />}
        </>
    )
}