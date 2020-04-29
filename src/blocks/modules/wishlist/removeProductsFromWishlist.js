import { wishlist } from './createWishlistCard';
import { addProductToWishlist } from './addProductToWishlist';



const removeProductsFromWishlist = evt => {
    const counter = document.querySelector('.wishlist .counter');
    const productId = evt.target.dataset.productId;

    if (evt.target.classList.contains('wishlist__btn-delete')) {
        
        if (wishlist.includes(productId)) {
            wishlist.splice(wishlist.indexOf(productId), 1);
        } 

        counter.textContent = wishlist.length;

        addProductToWishlist();
    }      
};

export { removeProductsFromWishlist };