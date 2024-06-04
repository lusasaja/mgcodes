import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/collection.css'
import FilterOptions from '../components/collection/FilterOptions'
import Gallery from '../components/collection/Gallery'
import Controls from '../components/collection/Controls'
import GalleryInfo from '../components/collection/GalleryInfo'
import {prizes} from '../data/prizes'

export default function CollectionPage() {
    // FILL CONFIGS
    const [currentPage, setCurrentPage] = useState(1);
    const [groupedPrizes, setGroupedPrizes] = useState([]);

    useEffect(() => {
        const grupos = dividirEnGruposAleatorios([...prizes], 16);
        setGroupedPrizes(grupos);
    }, []);

    const totalPages = groupedPrizes.length;

    const fillGallery = (pagina) => {
        setCurrentPage(pagina);
    };

    // FILTER 
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('todos');
    const [activeTags, setActiveTags] = useState([]);

    const handleFilter = (filteredPrizes) => {
        if (filteredPrizes.length === 0) {
            alert('Ala, no se encontraron resultados.')
        } else {
            const grupos = dividirEnGruposAleatorios(filteredPrizes, 16);
            setGroupedPrizes(grupos);
            setCurrentPage(1);
        }
    };

    const setFilter = () => {
        const filteredPrizes = prizes.filter(prize => {
            const matchesSearchTerm = prize.name.toLowerCase().includes(searchTerm) ||
                prize.title.toLowerCase().includes(searchTerm) ||
                prize.tags.some(tag => tag.toLowerCase().includes(searchTerm));

            const matchesCategory = selectedCategory === 'todos' || 
                prize.tags.some(tag => tag.toLowerCase() === selectedCategory);

            const matchesTags = activeTags.every(tag => {
                if (tag === 'funciona') return prize.allow === true;
                if (tag === 'no funciona') return prize.allow === false;
                return prize.tags.includes(tag);
            });

            return matchesSearchTerm && matchesCategory && matchesTags;
        });

        handleFilter(filteredPrizes);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.trim().toLowerCase());
        if (event.target.value.trim() === '') {
            setFilter();
        }
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value.trim().toLowerCase());
    };

    const handleTagClick = (tag) => {
        setActiveTags(prevTags => {
            const newTags = prevTags.includes(tag)
                ? prevTags.filter(t => t !== tag)
                : [...prevTags, tag];
            return newTags;
        });
    };

    useEffect(() => {
        setFilter();
    }, [selectedCategory, activeTags]);

    const categories = ['todos', 'cabeza', 'ropa', 'accesorios', 'zapatos', 'transportes', 'muebles'];
    const tags = ['funciona', 'no funciona', 'verano', 'invierno', 'navidad', 'halloween'];

    return (
        <>
            <Header></Header>
            <main>
                <FilterOptions prizes={prizes} searchTerm={searchTerm} handleSearchChange={handleSearchChange} categories={categories} selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} tags={tags} handleTagClick={handleTagClick} setFilter={setFilter} activeTags={activeTags}></FilterOptions>
                <Gallery groupedPrizes={groupedPrizes} currentPage={currentPage}></Gallery>
                <Controls currentPage={currentPage} fillGallery={fillGallery} groupedPrizes={groupedPrizes} totalPages={totalPages}></Controls>
                <GalleryInfo totalPages={totalPages} currentPage={currentPage}></GalleryInfo>
            </main>
            <Footer></Footer>
        </>
    )

    function dividirEnGruposAleatorios(array, tamanoGrupo) {
        const grupos = [];
        while (array.length > 0) {
            const grupo = [];
            for (let i = 0; i < tamanoGrupo && array.length > 0; i++) {
                const indice = Math.floor(Math.random() * array.length);
                grupo.push(array.splice(indice, 1)[0]);
            }
            grupos.push(grupo);
        }
        return grupos;
    }
}