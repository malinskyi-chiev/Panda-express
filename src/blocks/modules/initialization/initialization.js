'use strict';
import { renderRandomSort } from '../category/renderRandomSort';
import { renderSortByCategory } from '../category/renderSortByCategory';
import { catalogHandlersClick } from '../catalog/catalogHandlersClick';
import { basketHandlersClick } from '../basket/basketHandlersClick';
import { wishlistHandlersClick } from '../wishlist/wishlistHandlersClick';
import { searchHandlerSubmit } from '../search/searchHandlerSubmit';

renderRandomSort();
renderSortByCategory();

catalogHandlersClick();
basketHandlersClick();
wishlistHandlersClick();
searchHandlerSubmit();