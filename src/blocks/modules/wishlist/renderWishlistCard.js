import { createWishlistCard } from './createWishlistCard';

const renderWishlistCard = products => {
    let wishlistList = document.querySelector('.wishlist__list');
    wishlistList.textContent = '';

    if (products.length) {
        products.forEach(( {id, title, price, img} ) => {
            wishlistList.append( createWishlistCard(id, title, price, img) );
        });
    } else {
        wishlistList.textContent = 'Ваш список еще пустой!';
    }
};

export { renderWishlistCard };