import { NavLink } from "react-router-dom";

export default function MiniMenu() {
    return (
        <section class="miniMenu">
                <div class="column">
                    <h1>Inicio</h1>
                    <NavLink to="/#welcome">Código Aleatorio</NavLink>
                    <NavLink to="/#about">Acerca de</NavLink>
                    <NavLink to="/#contribute">Contribuir</NavLink>
                </div>
                <div class="column">
                    <h1>Códigos</h1>
                    <NavLink to="/collection#clothes">Ropa</NavLink>
                    <NavLink to="/collection#costumes">Disfrazes</NavLink>
                    <NavLink to="/collection#accesories">Accesorios</NavLink>
                    <NavLink to="/collection#transports">Transportes</NavLink>
                </div>
                <div class="column">
                    <h1>Extras</h1>
                    <NavLink to="/extras/music">Música</NavLink>
                    <NavLink to="/extras/events">Eventos</NavLink>
                    <NavLink to='/extras/youtubers'>Youtubers</NavLink>
                    <NavLink to="/extras/comunities">Comunidades</NavLink>
                    <NavLink to="/extras/ideas">Ideas</NavLink>
                </div>
        </section>
    )
}