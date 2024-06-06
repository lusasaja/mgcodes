import { NavLink, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export default function MiniMenu({setShowInfo}) {
    const location = useLocation();
    
    return (
        <section class="miniMenu">
                <div class="column">
                    <h1>Inicio</h1>
                    <NavHashLink to="/#welcome">Código Aleatorio</NavHashLink>
                    <NavHashLink to="/#info">Acerca de</NavHashLink>
                    <NavHashLink to="/#server">Discord</NavHashLink>
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