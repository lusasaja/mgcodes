import Header from "../components/Header"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function ExtrasPage() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/coming")
    }, [navigate])

    return (
        <div className="bigContainer">
            <Header />
            <main>Extras</main>
            <Footer />
        </div>
    )
}