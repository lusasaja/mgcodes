import Header from "../components/Header"
import Footer from "../components/Footer"
import '../styles/coming.css'
import { NavLink } from "react-router-dom"

export default function NotFoundPage({darkMode, setDarkMode}) {
    return (
        <div className="bigContainer">
            <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
            <main of='coming' className={darkMode ? 'dark' : ''}>
                <section className="info">
                    <section className="alert">
                        <h1>Próximamente...</h1>
                        <small>Te topaste con una característica en desarrollo.</small>
                    </section>
                    <section className="nav">
                        <NavLink className={'return reset'} to={'/'}>Volver</NavLink>
                        <a className={'report'} href="https://discord.gg/QngRzVUk8z" target="_blank" rel="noopener noreferrer">Revisar</a>
                    </section>
                </section>
                <img src="/images/illustrations/coming.svg" width={'300px'} alt="No encontrado" />
            </main>
            <Footer></Footer>
        </div>
    )
}