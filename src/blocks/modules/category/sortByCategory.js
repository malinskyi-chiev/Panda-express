import { loadDatabase } from '../database/loadDatabase';
import { renderCatalogCard } from '../catalog/renderCatalogCard';

const sortByCategory = evt => {
    evt.preventDefault();

    const dataCategory = evt.target.dataset.category;

    if ( evt.target.classList.contains('category__link') ) {
        loadDatabase(renderCatalogCard, products => products.filter( item => item.category.includes(dataCategory)) );
    }
};

export { sortByCategory };
