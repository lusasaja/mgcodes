export default function Gallery({ groupedPrizes, currentPage }) {
    return (
        <section className="gallery">
            <div className="container">
                {groupedPrizes[currentPage - 1]?.map((elemento, index) => (
                    <div key={index} className={`item ${elemento.allow === false ? 'red' : 'none'}`}>
                        <img src={elemento.image} alt="" loading='lazy'/>
                        <h1 className="code">{elemento.code}</h1>
                        <div className="status">
                            <span id="status-message">{elemento.allow ? 'Funciona' : 'No funciona'}</span>
                            <i id="status-icon" className={`bx ${elemento.allow ? 'bx-like' : 'bx-dislike'}`}></i>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}