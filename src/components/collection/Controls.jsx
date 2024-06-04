export default function Controls({currentPage, fillGallery, groupedPrizes, totalPages}) {
    const generatePageNumbers = () => {
        const pages = [];
        const start = Math.max(1, currentPage - 1);
        const end = Math.min(totalPages, start + 2);
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            fillGallery(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            fillGallery(currentPage + 1);
        }
    };

    const handleStart = () => {
        fillGallery(1);
    };

    const handleEnd = () => {
        fillGallery(totalPages);
    };

    const handlePageClick = (page) => {
        fillGallery(page);
    };

    return (
        <section class="controls">
            <button id="start" onClick={handleStart}>Inicio</button>
            <button id="prev" onClick={handlePrev}><i class="bx bx-left-arrow"></i></button>
            <section class="numberButtons">
                {generatePageNumbers().map(page => (
                    <button key={page} onClick={() => handlePageClick(page)} className='numberButton'>
                        {page}
                    </button>
                ))}
            </section>
            <button id="next" onClick={handleNext}><i class="bx bx-right-arrow"></i></button>
            <button id="end" onClick={handleEnd}>Final</button>
        </section>
    ) 
}