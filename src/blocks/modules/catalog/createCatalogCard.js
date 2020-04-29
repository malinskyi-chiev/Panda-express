import { wishlist } from '../wishlist/createWishlistCard';

const createCatalogCard = ( id, title, price, img ) => {
    let card = document.createElement('div');
    card.className = 'catalog__inner';
    card.innerHTML = `
        <div class="card" data-product-id="${id}">
            <div class="card__header">
                <img class="card__img" src="../${img}" alt="Some product" >
                <button class="card__btn-add-wishlist ${wishlist.includes(id) ? 'active': ''}" data-product-id="${id}">
                    <svg class="wishlist-icon"><use xlink:href="../../../img/sprites/sprite.svg#wishlist-icon" /></svg>
                </button>
            </div>

            <div class="card__body">
                <a href="" class="card__text">${title}</a>
                <div class="card__price">${price} грн</div>

                <button class="card__btn-add-basket" data-product-id="${id}">
                    Добавить в 
                    <svg class="basket-icon"><use xlink:href="../../../img/sprites/sprite.svg#basket-icon" /></svg>
                </button>
            </div>
        </div>
    `;

    return card;
};

export { createCatalogCard };

