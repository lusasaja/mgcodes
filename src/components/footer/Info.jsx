import { NavLink } from "react-router-dom"

export default function Info() {
    return (
        <section class="info">
            <a href="/mg_logo.png" target="_blank"><img src="/mg_logo.png" alt="Logo de Mundo Gaturro" width="250px" loading="lazy"/></a>
            <section class="text">
                <p>Visita <a href="https://www.mundogaturro.com/" target="_blank" rel="noopener noreferrer">Mundo Gaturro</a> y <a href="https://login.mundogaturro.com/" target="_blank" rel="noopener noreferrer">juega</a> para reclamar tus códigos.</p>
                <p>Descubre todos los <NavLink to='/collection'>códigos</NavLink> que recopilamos.</p>
                <p>Explora contenido <NavLink to='/extras'>extra</NavLink> sobre <a href="https://mundogaturro.com/" target="_blank" rel="noopener noreferrer">Mundo Gaturro</a></p>
            </section>
        </section>
    )
}