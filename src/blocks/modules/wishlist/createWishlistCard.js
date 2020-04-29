const wishlist = [];

const createWishlistCard = ( id, title, price, img ) => {
    let card = document.createElement('li');
    card.className = 'wishlist__item';
    card.setAttribute( 'data-product-id', id);
    card.innerHTML = `
        <img class="wishlist__img" src="../${img}" alt="" >

        <div class="wishlist__text">${title}</div>
        
        <div class="wishlist__trigger">
            <button class="wishlist__btn-add-basket" data-product-id="${id}">
                <svg class="basket-icon"><use xlink:href="../../../img/sprites/sprite.svg#basket-icon" /></svg>
            </button>

            <button class="wishlist__btn-delete" data-product-id="${id}">
                <svg class="delete-icon"><use xlink:href="../../../img/sprites/sprite.svg#delete-icon" /></svg>
            </button>
        </div>

        <div class="wishlist__price">${price} грн</div>
    `;

    return card; 
};

export { wishlist, createWishlistCard };
