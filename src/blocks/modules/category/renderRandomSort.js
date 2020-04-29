import { loadDatabase } from '../database/loadDatabase';
import { renderCatalogCard } from '../catalog/renderCatalogCard';
import { randomSort } from './randomSort';

const renderRandomSort = () => {
    loadDatabase(renderCatalogCard, randomSort);
};

export { renderRandomSort };
