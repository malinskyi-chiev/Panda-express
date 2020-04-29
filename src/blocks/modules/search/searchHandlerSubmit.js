import { searchProductsById } from './searchProductsById';


const searchHandlerSubmit = () => {
    const search = document.querySelector('.search');
 
    search.addEventListener('submit', searchProductsById );
}

export { searchHandlerSubmit };