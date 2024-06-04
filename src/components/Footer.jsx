import Details from './footer/Details'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <p className="credits">Hecho con <i class="bx bx-heart"></i> por <a href="https://lusadev.vercel.app" target="_blank" rel="noopener noreferrer">Lusasaja23</a>.</p>
                <hr />
                <Details></Details>
            </footer>
        </>
    )
}