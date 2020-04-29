import { wishlist } from '../wishlist/createWishlistCard';

const productsBasket = {};

const createBasketCard = (id, title, price, img) => {
    let card = document.createElement('li');
    card.className = 'basket__item';
    card.setAttribute( 'data-product-id', id);
    card.innerHTML = `
            <img class="basket__img" src="../${img}" alt="" >
            
            <div class="basket__body">
                <a href="" class="basket__text">${title}</a>
                <div class="basket__price">${price} грн</div>
            </div>
    
            <div class="basket__trigger">
                <button class="basket__btn-add-wishlist ${wishlist.includes(id) ? 'active': ''}" data-product-id="${id}">
                    <svg class="wishlist-icon"><use xlink:href="../../../img/sprites/sprite.svg#wishlist-icon" /></svg>
                </button>
    
                <button class="basket__btn-delete" data-product-id="${id}">
                    <svg class="delete-icon"><use xlink:href="../../../img/sprites/sprite.svg#delete-icon" /></svg>
                </button>
            </div>
    `;

    return card;
};

export { productsBasket, createBasketCard };
