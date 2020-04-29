import { closeWishlist } from './closeWishlist';
import { addProductToWishlist } from './addProductToWishlist';

const openWishlist = evt => {
    evt.preventDefault();

    const contentWrap = document.querySelector('.wishlist__content-wrap');

    if ( evt.target.classList.contains('wishlist__btn') ) {
        contentWrap.style.display = 'block';
        document.addEventListener( 'keyup', closeWishlist );
        addProductToWishlist();
    }
};

export { openWishlist };