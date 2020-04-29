const closeWishlist = evt => {
    evt.preventDefault();

    const contentWrap = document.querySelector('.wishlist__content-wrap');

    if (evt.target === contentWrap || evt.target.classList.contains('wishlist__btn-cancel') || evt.code === 'Escape') {
        contentWrap.style.display = '';
        document.removeEventListener('keyup', closeWishlist);
    }
};

export { closeWishlist };