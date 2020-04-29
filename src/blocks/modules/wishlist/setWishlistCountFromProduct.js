import { wishlist } from './createWishlistCard';

const setWishlistCountFromProduct = evt => {
    const counter = document.querySelector('.wishlist .counter');
    const productId = evt.target.dataset.productId;

    if (evt.target.classList.contains('card__btn-add-wishlist')) {

        if (wishlist.includes(productId)) {
            wishlist.splice(wishlist.indexOf(productId), 1);
            evt.target.classList.remove('active');
        } else {
            wishlist.push(productId);
            evt.target.classList.add('active');
        }

        counter.textContent = wishlist.length;
    }
};

export { setWishlistCountFromProduct };