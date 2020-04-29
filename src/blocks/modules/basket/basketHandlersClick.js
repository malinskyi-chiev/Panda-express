import { closeBasket } from './closeBasket';
import { openBasket } from './openBasket';
import { removeProductFromBasket } from './removeProductFromBasket';
import { toggleWishlistFromBasketProduct } from './toggleWishlistFromBasketProduct';



const basketHandlersClick = () => {
    const basket = document.querySelector('.basket');

    basket.addEventListener('click', evt => {
        closeBasket( evt );
        openBasket( evt );
        removeProductFromBasket( evt );
        toggleWishlistFromBasketProduct( evt )
    });
};

export { basketHandlersClick };
