import { loadDatabase } from '../database/loadDatabase';
import { renderCatalogCard } from '../catalog/renderCatalogCard';

const searchProductsById = evt => {
    evt.preventDefault();

    const searchProducts = event.target.elements.searchProducts;
    const searchValue = searchProducts.value.trim();

    if ( searchValue !== 0) {
        let regexp = new RegExp(searchValue, 'i');

        loadDatabase(renderCatalogCard, products => products.filter( product => regexp.test( product.title )));
    } 

    searchProducts.value = '';
    
};

export { searchProductsById };
