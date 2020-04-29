import { sortByCategory } from './sortByCategory';

const renderSortByCategory = () => {
    const category = document.querySelector('.category');

    category.addEventListener('click', sortByCategory);
};

export { renderSortByCategory };