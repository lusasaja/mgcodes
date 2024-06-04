export default function Tags({tags, activeTags, handleTagClick}) {
    const tagIcons = (tag) => {
        switch (tag) {
            case 'funciona':
                return 'bxs-like';
            case 'no funciona':
                return 'bxs-dislike';
            case 'verano':
                return 'bxs-sun';
            case 'invierno':
                return 'bx-wind';
            case 'navidad':
                return 'bxs-tree-alt';
            case 'halloween': 
                return 'bxs-angry';
            default:
                return '';
        }
    }

    return (
        <section class="tags">
            <h1>Incluye Tags:</h1>
            <div class="container">
                {tags.map(tag => (
                    <div
                        key={tag}
                        className={`tag ${activeTags.includes(tag) ? 'active' : ''}`}
                        onClick={() => handleTagClick(tag)}
                    >
                        <span>{tag} {}</span>
                        <i className={`bx ${activeTags.includes(tag) ? 'bx-check' : tagIcons(tag)}`}></i>
                    </div>
                ))}
            </div>                    
        </section>
    )
}