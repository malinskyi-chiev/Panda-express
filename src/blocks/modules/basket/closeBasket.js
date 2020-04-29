const closeBasket = evt => {
    evt.preventDefault();

    const contentWrap = document.querySelector('.basket__content-wrap');

    if (evt.target === contentWrap || evt.target.classList.contains('basket__btn-cancel') || evt.code === 'Escape') {
        contentWrap.style.display = '';
        document.removeEventListener('keyup', closeBasket);
    }
};

export { closeBasket };
