import { loadDatabase } from '../database/loadDatabase';
import { renderBasketCard } from './renderBasketCard';
import { addProductToBasket } from './addProductToBasket';
import { productsBasket } from './createBasketCard';

const removeProductFromBasket = evt => {
    const counter = document.querySelector('.basket .counter');
    const productId = evt.target.dataset.productId;

    if ( evt.target.classList.contains('basket__btn-delete') ) {
        delete productsBasket[productId];

        counter.textContent = Object.keys(productsBasket).length;

        loadDatabase( renderBasketCard, addProductToBasket );
    }      
};

export { removeProductFromBasket };
