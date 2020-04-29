import { calcTotalPrice } from './calcTotalPrice';
import { productsBasket } from './createBasketCard';

const addProductToBasket = products => {
    const basketProducts = products.filter(product => productsBasket.hasOwnProperty(product.id));
    calcTotalPrice(basketProducts);

    return basketProducts;
};

export { addProductToBasket };
