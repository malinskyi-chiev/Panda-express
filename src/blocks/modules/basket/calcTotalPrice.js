import { productsBasket } from './createBasketCard';

const calcTotalPrice = products => {
    const totalPrice = document.querySelector( '.basket__total-price' );

    let sum = products.reduce(( accum, product ) => {
        return accum + product.price * productsBasket[product.id];
    }, 0);

    totalPrice.textContent = sum.toFixed(2);
}

export { calcTotalPrice };
