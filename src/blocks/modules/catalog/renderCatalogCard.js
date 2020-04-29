import { createCatalogCard } from './createCatalogCard';

const renderCatalogCard = products => {
    let catalog = document.querySelector('.catalog');
    catalog.textContent = '';

    if (products.length) {
        products.forEach(( {id, title, price, img} ) => {
            catalog.append( createCatalogCard(id, title, price, img) );
        });
    } else {
        catalog.textContent = 'Извините, мы не нашли товаров по вашему запросу!';
    }
};

export { renderCatalogCard };
