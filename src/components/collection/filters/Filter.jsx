export default function Filter({handleCategoryChange, categories}) {
    return (
        <section class="filter">
            <h1>Fíltralo:</h1>
            <select id="filterGallery" onChange={(event) => {handleCategoryChange(event)}}>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </section>
    )
}