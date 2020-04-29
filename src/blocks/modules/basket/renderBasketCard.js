import { createBasketCard } from './createBasketCard';

const renderBasketCard = products => {
    let basketList = document.querySelector('.basket__list');
    basketList.textContent = '';

    if (products.length) {

        products.forEach(({ id, title, price, imgMin }) => {
            basketList.append( createBasketCard(id, title, price, imgMin) )
        });

    } else {
        basketList.textContent = 'Ваша корзина пока пуста!';
    }
};

export { renderBasketCard };
