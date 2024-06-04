import Search from "./filters/Search"
import Filter from "./filters/Filter"
import Tags from "./filters/Tags"

export default function FilterOptions({prizes, searchTerm, handleSearchChange, categories, handleCategoryChange, tags, handleTagClick, activeTags, setFilter}) {
    return (
        <section className="filterContainer">
            <div className="group">
                <Search prizes={prizes} searchTerm={searchTerm} handleSearchChange={handleSearchChange} setFilter={setFilter}></Search>
                <Filter handleCategoryChange={handleCategoryChange} categories={categories}></Filter>
            </div>
            <Tags tags={tags} activeTags={activeTags} handleTagClick={handleTagClick}></Tags>
        </section>
    )
}