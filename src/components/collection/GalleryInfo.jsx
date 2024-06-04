export default function GalleryInfo({totalPages, currentPage}) {
    return (
        <section class="gallery-info">
            <p>Estas en la página <span id="currentPage">{currentPage}</span> de <span id="totalPages">{totalPages}</span></p>
        </section>
    )
}