import { setBasketCountFromProduct } from '../basket/setBasketCountFromProduct';
import { setWishlistCountFromProduct } from '../wishlist/setWishlistCountFromProduct';

const catalogHandlersClick = () => {
    const catalog = document.querySelector('.catalog');

    catalog.addEventListener('click', function( evt ) {
        setBasketCountFromProduct( evt, 'card__btn-add-basket' );
        setWishlistCountFromProduct( evt );
    });
};

export { catalogHandlersClick };
