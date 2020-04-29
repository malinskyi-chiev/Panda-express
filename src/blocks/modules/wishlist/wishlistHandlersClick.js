import { closeWishlist } from './closeWishlist';
import { openWishlist } from './openWishlist';
import { removeProductsFromWishlist } from './removeProductsFromWishlist';
import { setBasketCountFromProduct } from '../basket/setBasketCountFromProduct';


const wishlistHandlersClick = () => {
    const wishlistElem = document.querySelector('.wishlist');

    wishlistElem.addEventListener('click', evt => {
        closeWishlist( evt );
        openWishlist( evt );
        removeProductsFromWishlist( evt );

        setBasketCountFromProduct( evt, 'wishlist__btn-add-basket' );
    });
};

export { wishlistHandlersClick };