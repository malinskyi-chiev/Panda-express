import { closeBasket } from './closeBasket';
import { loadDatabase } from '../database/loadDatabase';
import { renderBasketCard } from './renderBasketCard';
import { addProductToBasket } from './addProductToBasket';


const openBasket = evt => {
    evt.preventDefault();

    const contentWrap = document.querySelector('.basket__content-wrap');

    if ( evt.target.classList.contains('basket__btn') ) {
        contentWrap.style.display = 'block';
        document.addEventListener( 'keyup', closeBasket );

        loadDatabase( renderBasketCard, addProductToBasket );
    }
};

export { openBasket };
