import { loadDatabase } from '../database/loadDatabase';
import { renderWishlistCard } from './renderWishlistCard';
import { wishlist } from './createWishlistCard';

const addProductToWishlist = () => {
    loadDatabase( renderWishlistCard, products => products.filter( product => wishlist.includes(product.id) ));
};

export { addProductToWishlist };