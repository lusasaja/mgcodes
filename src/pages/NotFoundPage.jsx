import Header from "../components/Header"
import Footer from "../components/Footer"
import { NavLink } from "react-router-dom"
import '../styles/notFound.css'

export default function NotFoundPage({darkMode, setDarkMode}) {
    return (
        <div className={`bigContainer ${darkMode ? 'dark' : ''}`}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
            <main of='notFound' className={darkMode ? 'dark' : ''}>
                <section className="info">
                    <section className="alert">
                        <h1>404 | Not Found</h1>
                        <small>Ala. Parece una dirección equivocada...</small>
                    </section>
                    <section className="nav">
                        <NavLink className={'return reset'} to={'/'}>Volver</NavLink>
                        <a className={'report'} href="https://discord.gg/QngRzVUk8z" target="_blank" rel="noopener noreferrer">Reportar</a>
                    </section>
                </section>
                <img src="/images/illustrations/not-found.svg" width={'300px'} alt="No encontrado" />
            </main>
            <Footer></Footer>
        </div>
    )
}