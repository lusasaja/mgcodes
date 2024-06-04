export default function Search({prizes, searchTerm, handleSearchChange, setFilter}) {
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    const randomPrizeName = randomPrize.title;

    return (
        <search>
            <h1>Busca algo:</h1>
                <div class="search">
                    <input type="text" id="searchPrizesInput" placeholder={randomPrizeName} onChange={handleSearchChange} onKeyPress={(event) => event.key === 'Enter' && setFilter()}/>
                    <button id="searchPrizesBtn" onClick={setFilter}><i class="bx bx-search"></i></button>
                </div>
        </search>
    )
}