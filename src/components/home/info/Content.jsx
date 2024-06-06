import { NavLink } from "react-router-dom";

export default function Content({showInfo}) {
    switch (showInfo) {
        case 'about':
            return (
                <section className="content">
                    <section>
                        <div className="container">
                            <h1>¿Qué es MGCODES?</h1>
                            <p>MGCodes es una web que busca recopilar todos los códigos de premios de Mundo Gaturro en un solo lugar. Nos encargamos de facilitarte la exhaustiva tarea de buscar y reclamar los tantos códigos que el juego tiene.</p>
                        </div>
                        <img src="/images/illustrations/our-solution.svg" alt="Nuestra Solución" />
                    </section>
                    <section>
                    <img src="/images/illustrations/people.svg" alt="Gente" />
                        <div className="container">
                            <h1>¿A quiénes esta dedicado MGCODES?</h1>
                            <p>MGCodes esta dedicada tanto a usuarios activos de Mundo Gaturro como a principiantes que buscan iniciarse en el juego. Nos aseguramos de ofrecer una experiencia evolvente en relación al juego, pero no ajena ante usuarios que nunca hayan jugado Mundo Gaturro.</p>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <h1>¿MGCODES es de código abierto?</h1>
                            <p>Sí, este proyectos es de código abierto. Nos encargamos de recibir con gusto sugerencias y colaboraciones de parte de los usuarios. Ya sea que quieras añadir o eliminar algo, o incluso arreglar bugs, MGCodes estara siempre abierto.</p>
                        </div>
                        <img src="/images/illustrations/opensource.svg" alt="Open Source" />
                    </section>
                </section>
            )
            break;

        case 'content':
            return (
                <section className="content">
                    <section>
                        <div className="container">
                            <h1>¿Cómo funciona MGCODES?</h1>
                            <p>MGCodes te brinda una <strong>amplia <NavLink to="/collection">galería</NavLink></strong> de colección donde podras encontrar <strong>todos los códigos del juego</strong> y, de pasada, conocer cuáles están en funcionamiento. <strong>¡No más intentos fallidos al reclamar!</strong></p>
                        </div>
                        <img src="/images/illustrations/collecting.svg" width={'400px'} alt="Galería de colección" />
                    </section>
                    <section>
                        <img src="/images/illustrations/goals.svg" width={'400px'} alt="Ventajas" />
                        <div className="container">
                            <h1>¿Qué más ofrece MGCodes?</h1>
                            <p>Además de compartir códigos de premios de Mundo Gaturro, también nos enfocamos en servirte de <strong>diversas temáticas relacionadas al juego</strong> y a su comunidad.</p>
                            <p><strong>Puede encontrar:</strong></p>
                            <ul>
                                <li><strong>Música</strong> que suena en el juego</li>
                                <li><strong>Eventos</strong> en Mundo Gaturro</li>
                                <li><strong>Youtubers</strong> dedicado a esta comunidad</li>
                                <li><strong>Comunidades</strong> de Mundo Gaturro en distintas redes sociales</li>
                                <li>Y <strong>muchas sorpresas más</strong> que se iran agregando</li>
                            </ul>
                        </div>
                    </section>
                </section>
            )
            break;

        case 'contribute':
            return (
                <section className="content" id="contribute">
                    <section>
                        <div className="container">
                            <h1>¿Cómo contribuir con MGCodes?</h1>
                            <p>Puedes ayudarnos reportando errores (bugs) que detectes en la web. También puedes sugerirnos algunos añadidos o correcciones a realizar en la funcionalidad o diseño de la página. Pero más importante, agradecemos que nos avises cuando un código, marcado como "Funciona", no permite reclamarse.</p>
                        </div>
                        <img src="/images/illustrations/feedback.svg" alt="Feedback" />
                    </section>
                    <section>
                        <img src="/images/illustrations/pull-request.svg" alt="Pull Request" />
                        <div className="container">
                            <h1>¿Dónde puedo contribuir con MGCodes?</h1>
                            <p>Puedes enviar cualquier sugerencia al servidor de Discord de Mundo Gaturro donde respondemos tus contribuciones. Además, puedes visitar el repositorio de esta web en GitHub para ver las actualizaciones y añadir nuevas funcionalidades. ¡No olvides enviar un pull request!</p>
                        </div>
                    </section>
                </section>
            )
            break;

        case 'contact': 
            return (
                <section className="content contact" id="contact">
                    <section>
                        <h1>Para contactar con MGCodes</h1>
                        <section className="social">
                            <i className="bx bxl-twitter"></i>
                            <i className="bx bxl-instagram"></i>
                            <i className="bx bxl-discord"></i>
                            <i className="bx bxl-facebook"></i>
                        </section>
                    </section>
                    <section>
                        <h1>Para contactar con Lusasaja23</h1>
                        <section className="social">
                            <i className="bx bxl-twitter"></i>
                            <i className="bx bxl-discord"></i>
                            <i className="bx bxl-gmail"></i>
                        </section>
                    </section>
                </section>
            )
            break;

        default:
            console.error('No se encontro contenido');
            break;
    }
}