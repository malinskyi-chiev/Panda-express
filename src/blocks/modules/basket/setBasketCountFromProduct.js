import { productsBasket } from './createBasketCard';

const setBasketCountFromProduct = ( evt, btnAddBasket) => {
    const counter = document.querySelector('.basket .counter');
    const productId = evt.target.dataset.productId;

    if (evt.target.classList.contains( btnAddBasket )) {

        if (productsBasket[productId]) {
            productsBasket[productId] += 1; 
        } else {
            productsBasket[productId] = 1;
        }

        counter.textContent = Object.keys(productsBasket).length;
    }
};

export { setBasketCountFromProduct };