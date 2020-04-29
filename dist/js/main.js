/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/basket/addProductToBasket.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/basket/addProductToBasket.js ***!
  \*********************************************************/
/*! exports provided: addProductToBasket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductToBasket", function() { return addProductToBasket; });
/* harmony import */ var _calcTotalPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcTotalPrice */ "./src/blocks/modules/basket/calcTotalPrice.js");
/* harmony import */ var _createBasketCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBasketCard */ "./src/blocks/modules/basket/createBasketCard.js");



var addProductToBasket = function addProductToBasket(products) {
  var basketProducts = products.filter(function (product) {
    return _createBasketCard__WEBPACK_IMPORTED_MODULE_1__["productsBasket"].hasOwnProperty(product.id);
  });
  Object(_calcTotalPrice__WEBPACK_IMPORTED_MODULE_0__["calcTotalPrice"])(basketProducts);
  return basketProducts;
};



/***/ }),

/***/ "./src/blocks/modules/basket/basketHandlersClick.js":
/*!**********************************************************!*\
  !*** ./src/blocks/modules/basket/basketHandlersClick.js ***!
  \**********************************************************/
/*! exports provided: basketHandlersClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basketHandlersClick", function() { return basketHandlersClick; });
/* harmony import */ var _closeBasket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closeBasket */ "./src/blocks/modules/basket/closeBasket.js");
/* harmony import */ var _openBasket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openBasket */ "./src/blocks/modules/basket/openBasket.js");
/* harmony import */ var _removeProductFromBasket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeProductFromBasket */ "./src/blocks/modules/basket/removeProductFromBasket.js");
/* harmony import */ var _toggleWishlistFromBasketProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggleWishlistFromBasketProduct */ "./src/blocks/modules/basket/toggleWishlistFromBasketProduct.js");





var basketHandlersClick = function basketHandlersClick() {
  var basket = document.querySelector('.basket');
  basket.addEventListener('click', function (evt) {
    Object(_closeBasket__WEBPACK_IMPORTED_MODULE_0__["closeBasket"])(evt);
    Object(_openBasket__WEBPACK_IMPORTED_MODULE_1__["openBasket"])(evt);
    Object(_removeProductFromBasket__WEBPACK_IMPORTED_MODULE_2__["removeProductFromBasket"])(evt);
    Object(_toggleWishlistFromBasketProduct__WEBPACK_IMPORTED_MODULE_3__["toggleWishlistFromBasketProduct"])(evt);
  });
};



/***/ }),

/***/ "./src/blocks/modules/basket/calcTotalPrice.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/basket/calcTotalPrice.js ***!
  \*****************************************************/
/*! exports provided: calcTotalPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcTotalPrice", function() { return calcTotalPrice; });
/* harmony import */ var _createBasketCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBasketCard */ "./src/blocks/modules/basket/createBasketCard.js");


var calcTotalPrice = function calcTotalPrice(products) {
  var totalPrice = document.querySelector('.basket__total-price');
  var sum = products.reduce(function (accum, product) {
    return accum + product.price * _createBasketCard__WEBPACK_IMPORTED_MODULE_0__["productsBasket"][product.id];
  }, 0);
  totalPrice.textContent = sum.toFixed(2);
};



/***/ }),

/***/ "./src/blocks/modules/basket/closeBasket.js":
/*!**************************************************!*\
  !*** ./src/blocks/modules/basket/closeBasket.js ***!
  \**************************************************/
/*! exports provided: closeBasket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBasket", function() { return closeBasket; });
var closeBasket = function closeBasket(evt) {
  evt.preventDefault();
  var contentWrap = document.querySelector('.basket__content-wrap');

  if (evt.target === contentWrap || evt.target.classList.contains('basket__btn-cancel') || evt.code === 'Escape') {
    contentWrap.style.display = '';
    document.removeEventListener('keyup', closeBasket);
  }
};



/***/ }),

/***/ "./src/blocks/modules/basket/createBasketCard.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/basket/createBasketCard.js ***!
  \*******************************************************/
/*! exports provided: productsBasket, createBasketCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsBasket", function() { return productsBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBasketCard", function() { return createBasketCard; });
/* harmony import */ var _wishlist_createWishlistCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wishlist/createWishlistCard */ "./src/blocks/modules/wishlist/createWishlistCard.js");

var productsBasket = {};

var createBasketCard = function createBasketCard(id, title, price, img) {
  var card = document.createElement('li');
  card.className = 'basket__item';
  card.setAttribute('data-product-id', id);
  card.innerHTML = "\n            <img class=\"basket__img\" src=\"../".concat(img, "\" alt=\"\" >\n            \n            <div class=\"basket__body\">\n                <a href=\"\" class=\"basket__text\">").concat(title, "</a>\n                <div class=\"basket__price\">").concat(price, " \u0433\u0440\u043D</div>\n            </div>\n    \n            <div class=\"basket__trigger\">\n                <button class=\"basket__btn-add-wishlist ").concat(_wishlist_createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].includes(id) ? 'active' : '', "\" data-product-id=\"").concat(id, "\">\n                    <svg class=\"wishlist-icon\"><use xlink:href=\"../../../img/sprites/sprite.svg#wishlist-icon\" /></svg>\n                </button>\n    \n                <button class=\"basket__btn-delete\" data-product-id=\"").concat(id, "\">\n                    <svg class=\"delete-icon\"><use xlink:href=\"../../../img/sprites/sprite.svg#delete-icon\" /></svg>\n                </button>\n            </div>\n    ");
  return card;
};



/***/ }),

/***/ "./src/blocks/modules/basket/openBasket.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/basket/openBasket.js ***!
  \*************************************************/
/*! exports provided: openBasket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openBasket", function() { return openBasket; });
/* harmony import */ var _closeBasket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closeBasket */ "./src/blocks/modules/basket/closeBasket.js");
/* harmony import */ var _database_loadDatabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/loadDatabase */ "./src/blocks/modules/database/loadDatabase.js");
/* harmony import */ var _renderBasketCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderBasketCard */ "./src/blocks/modules/basket/renderBasketCard.js");
/* harmony import */ var _addProductToBasket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addProductToBasket */ "./src/blocks/modules/basket/addProductToBasket.js");





var openBasket = function openBasket(evt) {
  evt.preventDefault();
  var contentWrap = document.querySelector('.basket__content-wrap');

  if (evt.target.classList.contains('basket__btn')) {
    contentWrap.style.display = 'block';
    document.addEventListener('keyup', _closeBasket__WEBPACK_IMPORTED_MODULE_0__["closeBasket"]);
    Object(_database_loadDatabase__WEBPACK_IMPORTED_MODULE_1__["loadDatabase"])(_renderBasketCard__WEBPACK_IMPORTED_MODULE_2__["renderBasketCard"], _addProductToBasket__WEBPACK_IMPORTED_MODULE_3__["addProductToBasket"]);
  }
};



/***/ }),

/***/ "./src/blocks/modules/basket/removeProductFromBasket.js":
/*!**************************************************************!*\
  !*** ./src/blocks/modules/basket/removeProductFromBasket.js ***!
  \**************************************************************/
/*! exports provided: removeProductFromBasket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProductFromBasket", function() { return removeProductFromBasket; });
/* harmony import */ var _database_loadDatabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../database/loadDatabase */ "./src/blocks/modules/database/loadDatabase.js");
/* harmony import */ var _renderBasketCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderBasketCard */ "./src/blocks/modules/basket/renderBasketCard.js");
/* harmony import */ var _addProductToBasket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProductToBasket */ "./src/blocks/modules/basket/addProductToBasket.js");
/* harmony import */ var _createBasketCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createBasketCard */ "./src/blocks/modules/basket/createBasketCard.js");





var removeProductFromBasket = function removeProductFromBasket(evt) {
  var counter = document.querySelector('.basket .counter');
  var productId = evt.target.dataset.productId;

  if (evt.target.classList.contains('basket__btn-delete')) {
    delete _createBasketCard__WEBPACK_IMPORTED_MODULE_3__["productsBasket"][productId];
    counter.textContent = Object.keys(_createBasketCard__WEBPACK_IMPORTED_MODULE_3__["productsBasket"]).length;
    Object(_database_loadDatabase__WEBPACK_IMPORTED_MODULE_0__["loadDatabase"])(_renderBasketCard__WEBPACK_IMPORTED_MODULE_1__["renderBasketCard"], _addProductToBasket__WEBPACK_IMPORTED_MODULE_2__["addProductToBasket"]);
  }
};



/***/ }),

/***/ "./src/blocks/modules/basket/renderBasketCard.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/basket/renderBasketCard.js ***!
  \*******************************************************/
/*! exports provided: renderBasketCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderBasketCard", function() { return renderBasketCard; });
/* harmony import */ var _createBasketCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBasketCard */ "./src/blocks/modules/basket/createBasketCard.js");


var renderBasketCard = function renderBasketCard(products) {
  var basketList = document.querySelector('.basket__list');
  basketList.textContent = '';

  if (products.length) {
    products.forEach(function (_ref) {
      var id = _ref.id,
          title = _ref.title,
          price = _ref.price,
          imgMin = _ref.imgMin;
      basketList.append(Object(_createBasketCard__WEBPACK_IMPORTED_MODULE_0__["createBasketCard"])(id, title, price, imgMin));
    });
  } else {
    basketList.textContent = 'Ваша корзина пока пуста!';
  }
};



/***/ }),

/***/ "./src/blocks/modules/basket/setBasketCountFromProduct.js":
/*!****************************************************************!*\
  !*** ./src/blocks/modules/basket/setBasketCountFromProduct.js ***!
  \****************************************************************/
/*! exports provided: setBasketCountFromProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBasketCountFromProduct", function() { return setBasketCountFromProduct; });
/* harmony import */ var _createBasketCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBasketCard */ "./src/blocks/modules/basket/createBasketCard.js");


var setBasketCountFromProduct = function setBasketCountFromProduct(evt, btnAddBasket) {
  var counter = document.querySelector('.basket .counter');
  var productId = evt.target.dataset.productId;

  if (evt.target.classList.contains(btnAddBasket)) {
    if (_createBasketCard__WEBPACK_IMPORTED_MODULE_0__["productsBasket"][productId]) {
      _createBasketCard__WEBPACK_IMPORTED_MODULE_0__["productsBasket"][productId] += 1;
    } else {
      _createBasketCard__WEBPACK_IMPORTED_MODULE_0__["productsBasket"][productId] = 1;
    }

    counter.textContent = Object.keys(_createBasketCard__WEBPACK_IMPORTED_MODULE_0__["productsBasket"]).length;
  }
};



/***/ }),

/***/ "./src/blocks/modules/basket/toggleWishlistFromBasketProduct.js":
/*!**********************************************************************!*\
  !*** ./src/blocks/modules/basket/toggleWishlistFromBasketProduct.js ***!
  \**********************************************************************/
/*! exports provided: toggleWishlistFromBasketProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleWishlistFromBasketProduct", function() { return toggleWishlistFromBasketProduct; });
/* harmony import */ var _wishlist_createWishlistCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wishlist/createWishlistCard */ "./src/blocks/modules/wishlist/createWishlistCard.js");


var toggleWishlistFromBasketProduct = function toggleWishlistFromBasketProduct(evt) {
  var counter = document.querySelector('.wishlist .counter');
  var productId = evt.target.dataset.productId;

  if (evt.target.classList.contains('basket__btn-add-wishlist')) {
    if (_wishlist_createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].includes(productId)) {
      _wishlist_createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].splice(_wishlist_createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].indexOf(productId), 1);
      evt.target.classList.remove('active');
    } else {
      _wishlist_createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].push(productId);
      evt.target.classList.add('active');
    }

    counter.textContent = _wishlist_createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].length;
  }
};



/***/ }),

/***/ "./src/blocks/modules/catalog/catalogHandlersClick.js":
/*!************************************************************!*\
  !*** ./src/blocks/modules/catalog/catalogHandlersClick.js ***!
  \************************************************************/
/*! exports provided: catalogHandlersClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catalogHandlersClick", function() { return catalogHandlersClick; });
/* harmony import */ var _basket_setBasketCountFromProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basket/setBasketCountFromProduct */ "./src/blocks/modules/basket/setBasketCountFromProduct.js");
/* harmony import */ var _wishlist_setWishlistCountFromProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wishlist/setWishlistCountFromProduct */ "./src/blocks/modules/wishlist/setWishlistCountFromProduct.js");



var catalogHandlersClick = function catalogHandlersClick() {
  var catalog = document.querySelector('.catalog');
  catalog.addEventListener('click', function (evt) {
    Object(_basket_setBasketCountFromProduct__WEBPACK_IMPORTED_MODULE_0__["setBasketCountFromProduct"])(evt, 'card__btn-add-basket');
    Object(_wishlist_setWishlistCountFromProduct__WEBPACK_IMPORTED_MODULE_1__["setWishlistCountFromProduct"])(evt);
  });
};



/***/ }),

/***/ "./src/blocks/modules/catalog/createCatalogCard.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/catalog/createCatalogCard.js ***!
  \*********************************************************/
/*! exports provided: createCatalogCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCatalogCard", function() { return createCatalogCard; });
/* harmony import */ var _wishlist_createWishlistCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wishlist/createWishlistCard */ "./src/blocks/modules/wishlist/createWishlistCard.js");


var createCatalogCard = function createCatalogCard(id, title, price, img) {
  var card = document.createElement('div');
  card.className = 'catalog__inner';
  card.innerHTML = "\n        <div class=\"card\" data-product-id=\"".concat(id, "\">\n            <div class=\"card__header\">\n                <img class=\"card__img\" src=\"../").concat(img, "\" alt=\"Some product\" >\n                <button class=\"card__btn-add-wishlist ").concat(_wishlist_createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].includes(id) ? 'active' : '', "\" data-product-id=\"").concat(id, "\">\n                    <svg class=\"wishlist-icon\"><use xlink:href=\"../../../img/sprites/sprite.svg#wishlist-icon\" /></svg>\n                </button>\n            </div>\n\n            <div class=\"card__body\">\n                <a href=\"\" class=\"card__text\">").concat(title, "</a>\n                <div class=\"card__price\">").concat(price, " \u0433\u0440\u043D</div>\n\n                <button class=\"card__btn-add-basket\" data-product-id=\"").concat(id, "\">\n                    \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \n                    <svg class=\"basket-icon\"><use xlink:href=\"../../../img/sprites/sprite.svg#basket-icon\" /></svg>\n                </button>\n            </div>\n        </div>\n    ");
  return card;
};



/***/ }),

/***/ "./src/blocks/modules/catalog/renderCatalogCard.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/catalog/renderCatalogCard.js ***!
  \*********************************************************/
/*! exports provided: renderCatalogCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCatalogCard", function() { return renderCatalogCard; });
/* harmony import */ var _createCatalogCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCatalogCard */ "./src/blocks/modules/catalog/createCatalogCard.js");


var renderCatalogCard = function renderCatalogCard(products) {
  var catalog = document.querySelector('.catalog');
  catalog.textContent = '';

  if (products.length) {
    products.forEach(function (_ref) {
      var id = _ref.id,
          title = _ref.title,
          price = _ref.price,
          img = _ref.img;
      catalog.append(Object(_createCatalogCard__WEBPACK_IMPORTED_MODULE_0__["createCatalogCard"])(id, title, price, img));
    });
  } else {
    catalog.textContent = 'Извините, мы не нашли товаров по вашему запросу!';
  }
};



/***/ }),

/***/ "./src/blocks/modules/category/randomSort.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/category/randomSort.js ***!
  \***************************************************/
/*! exports provided: randomSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomSort", function() { return randomSort; });
var randomSort = function randomSort(products) {
  return products.sort(function () {
    return Math.random() - 0.5;
  });
};



/***/ }),

/***/ "./src/blocks/modules/category/renderRandomSort.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/category/renderRandomSort.js ***!
  \*********************************************************/
/*! exports provided: renderRandomSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRandomSort", function() { return renderRandomSort; });
/* harmony import */ var _database_loadDatabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../database/loadDatabase */ "./src/blocks/modules/database/loadDatabase.js");
/* harmony import */ var _catalog_renderCatalogCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catalog/renderCatalogCard */ "./src/blocks/modules/catalog/renderCatalogCard.js");
/* harmony import */ var _randomSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./randomSort */ "./src/blocks/modules/category/randomSort.js");




var renderRandomSort = function renderRandomSort() {
  Object(_database_loadDatabase__WEBPACK_IMPORTED_MODULE_0__["loadDatabase"])(_catalog_renderCatalogCard__WEBPACK_IMPORTED_MODULE_1__["renderCatalogCard"], _randomSort__WEBPACK_IMPORTED_MODULE_2__["randomSort"]);
};



/***/ }),

/***/ "./src/blocks/modules/category/renderSortByCategory.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/category/renderSortByCategory.js ***!
  \*************************************************************/
/*! exports provided: renderSortByCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSortByCategory", function() { return renderSortByCategory; });
/* harmony import */ var _sortByCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortByCategory */ "./src/blocks/modules/category/sortByCategory.js");


var renderSortByCategory = function renderSortByCategory() {
  var category = document.querySelector('.category');
  category.addEventListener('click', _sortByCategory__WEBPACK_IMPORTED_MODULE_0__["sortByCategory"]);
};



/***/ }),

/***/ "./src/blocks/modules/category/sortByCategory.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/category/sortByCategory.js ***!
  \*******************************************************/
/*! exports provided: sortByCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByCategory", function() { return sortByCategory; });
/* harmony import */ var _database_loadDatabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../database/loadDatabase */ "./src/blocks/modules/database/loadDatabase.js");
/* harmony import */ var _catalog_renderCatalogCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catalog/renderCatalogCard */ "./src/blocks/modules/catalog/renderCatalogCard.js");



var sortByCategory = function sortByCategory(evt) {
  evt.preventDefault();
  var dataCategory = evt.target.dataset.category;

  if (evt.target.classList.contains('category__link')) {
    Object(_database_loadDatabase__WEBPACK_IMPORTED_MODULE_0__["loadDatabase"])(_catalog_renderCatalogCard__WEBPACK_IMPORTED_MODULE_1__["renderCatalogCard"], function (products) {
      return products.filter(function (item) {
        return item.category.includes(dataCategory);
      });
    });
  }
};



/***/ }),

/***/ "./src/blocks/modules/database/loadDatabase.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/database/loadDatabase.js ***!
  \*****************************************************/
/*! exports provided: loadDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDatabase", function() { return loadDatabase; });
var loadDatabase = function loadDatabase(handler, filter) {
  fetch('../../../db/db.json').then(function (response) {
    return response.json();
  }).then(filter).then(handler);
};



/***/ }),

/***/ "./src/blocks/modules/initialization/initialization.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/initialization/initialization.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_renderRandomSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../category/renderRandomSort */ "./src/blocks/modules/category/renderRandomSort.js");
/* harmony import */ var _category_renderSortByCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category/renderSortByCategory */ "./src/blocks/modules/category/renderSortByCategory.js");
/* harmony import */ var _catalog_catalogHandlersClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../catalog/catalogHandlersClick */ "./src/blocks/modules/catalog/catalogHandlersClick.js");
/* harmony import */ var _basket_basketHandlersClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basket/basketHandlersClick */ "./src/blocks/modules/basket/basketHandlersClick.js");
/* harmony import */ var _wishlist_wishlistHandlersClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wishlist/wishlistHandlersClick */ "./src/blocks/modules/wishlist/wishlistHandlersClick.js");
/* harmony import */ var _search_searchHandlerSubmit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/searchHandlerSubmit */ "./src/blocks/modules/search/searchHandlerSubmit.js");








Object(_category_renderRandomSort__WEBPACK_IMPORTED_MODULE_0__["renderRandomSort"])();
Object(_category_renderSortByCategory__WEBPACK_IMPORTED_MODULE_1__["renderSortByCategory"])();
Object(_catalog_catalogHandlersClick__WEBPACK_IMPORTED_MODULE_2__["catalogHandlersClick"])();
Object(_basket_basketHandlersClick__WEBPACK_IMPORTED_MODULE_3__["basketHandlersClick"])();
Object(_wishlist_wishlistHandlersClick__WEBPACK_IMPORTED_MODULE_4__["wishlistHandlersClick"])();
Object(_search_searchHandlerSubmit__WEBPACK_IMPORTED_MODULE_5__["searchHandlerSubmit"])();

/***/ }),

/***/ "./src/blocks/modules/search/searchHandlerSubmit.js":
/*!**********************************************************!*\
  !*** ./src/blocks/modules/search/searchHandlerSubmit.js ***!
  \**********************************************************/
/*! exports provided: searchHandlerSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchHandlerSubmit", function() { return searchHandlerSubmit; });
/* harmony import */ var _searchProductsById__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchProductsById */ "./src/blocks/modules/search/searchProductsById.js");


var searchHandlerSubmit = function searchHandlerSubmit() {
  var search = document.querySelector('.search');
  search.addEventListener('submit', _searchProductsById__WEBPACK_IMPORTED_MODULE_0__["searchProductsById"]);
};



/***/ }),

/***/ "./src/blocks/modules/search/searchProductsById.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/search/searchProductsById.js ***!
  \*********************************************************/
/*! exports provided: searchProductsById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProductsById", function() { return searchProductsById; });
/* harmony import */ var _database_loadDatabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../database/loadDatabase */ "./src/blocks/modules/database/loadDatabase.js");
/* harmony import */ var _catalog_renderCatalogCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catalog/renderCatalogCard */ "./src/blocks/modules/catalog/renderCatalogCard.js");



var searchProductsById = function searchProductsById(evt) {
  evt.preventDefault();
  var searchProducts = event.target.elements.searchProducts;
  var searchValue = searchProducts.value.trim();

  if (searchValue !== 0) {
    var regexp = new RegExp(searchValue, 'i');
    Object(_database_loadDatabase__WEBPACK_IMPORTED_MODULE_0__["loadDatabase"])(_catalog_renderCatalogCard__WEBPACK_IMPORTED_MODULE_1__["renderCatalogCard"], function (products) {
      return products.filter(function (product) {
        return regexp.test(product.title);
      });
    });
  }

  searchProducts.value = '';
};



/***/ }),

/***/ "./src/blocks/modules/wishlist/addProductToWishlist.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/wishlist/addProductToWishlist.js ***!
  \*************************************************************/
/*! exports provided: addProductToWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductToWishlist", function() { return addProductToWishlist; });
/* harmony import */ var _database_loadDatabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../database/loadDatabase */ "./src/blocks/modules/database/loadDatabase.js");
/* harmony import */ var _renderWishlistCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderWishlistCard */ "./src/blocks/modules/wishlist/renderWishlistCard.js");
/* harmony import */ var _createWishlistCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createWishlistCard */ "./src/blocks/modules/wishlist/createWishlistCard.js");




var addProductToWishlist = function addProductToWishlist() {
  Object(_database_loadDatabase__WEBPACK_IMPORTED_MODULE_0__["loadDatabase"])(_renderWishlistCard__WEBPACK_IMPORTED_MODULE_1__["renderWishlistCard"], function (products) {
    return products.filter(function (product) {
      return _createWishlistCard__WEBPACK_IMPORTED_MODULE_2__["wishlist"].includes(product.id);
    });
  });
};



/***/ }),

/***/ "./src/blocks/modules/wishlist/closeWishlist.js":
/*!******************************************************!*\
  !*** ./src/blocks/modules/wishlist/closeWishlist.js ***!
  \******************************************************/
/*! exports provided: closeWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeWishlist", function() { return closeWishlist; });
var closeWishlist = function closeWishlist(evt) {
  evt.preventDefault();
  var contentWrap = document.querySelector('.wishlist__content-wrap');

  if (evt.target === contentWrap || evt.target.classList.contains('wishlist__btn-cancel') || evt.code === 'Escape') {
    contentWrap.style.display = '';
    document.removeEventListener('keyup', closeWishlist);
  }
};



/***/ }),

/***/ "./src/blocks/modules/wishlist/createWishlistCard.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/wishlist/createWishlistCard.js ***!
  \***********************************************************/
/*! exports provided: wishlist, createWishlistCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlist", function() { return wishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWishlistCard", function() { return createWishlistCard; });
var wishlist = [];

var createWishlistCard = function createWishlistCard(id, title, price, img) {
  var card = document.createElement('li');
  card.className = 'wishlist__item';
  card.setAttribute('data-product-id', id);
  card.innerHTML = "\n        <img class=\"wishlist__img\" src=\"../".concat(img, "\" alt=\"\" >\n\n        <div class=\"wishlist__text\">").concat(title, "</div>\n        \n        <div class=\"wishlist__trigger\">\n            <button class=\"wishlist__btn-add-basket\" data-product-id=\"").concat(id, "\">\n                <svg class=\"basket-icon\"><use xlink:href=\"../../../img/sprites/sprite.svg#basket-icon\" /></svg>\n            </button>\n\n            <button class=\"wishlist__btn-delete\" data-product-id=\"").concat(id, "\">\n                <svg class=\"delete-icon\"><use xlink:href=\"../../../img/sprites/sprite.svg#delete-icon\" /></svg>\n            </button>\n        </div>\n\n        <div class=\"wishlist__price\">").concat(price, " \u0433\u0440\u043D</div>\n    ");
  return card;
};



/***/ }),

/***/ "./src/blocks/modules/wishlist/openWishlist.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/wishlist/openWishlist.js ***!
  \*****************************************************/
/*! exports provided: openWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openWishlist", function() { return openWishlist; });
/* harmony import */ var _closeWishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closeWishlist */ "./src/blocks/modules/wishlist/closeWishlist.js");
/* harmony import */ var _addProductToWishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProductToWishlist */ "./src/blocks/modules/wishlist/addProductToWishlist.js");



var openWishlist = function openWishlist(evt) {
  evt.preventDefault();
  var contentWrap = document.querySelector('.wishlist__content-wrap');

  if (evt.target.classList.contains('wishlist__btn')) {
    contentWrap.style.display = 'block';
    document.addEventListener('keyup', _closeWishlist__WEBPACK_IMPORTED_MODULE_0__["closeWishlist"]);
    Object(_addProductToWishlist__WEBPACK_IMPORTED_MODULE_1__["addProductToWishlist"])();
  }
};



/***/ }),

/***/ "./src/blocks/modules/wishlist/removeProductsFromWishlist.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/modules/wishlist/removeProductsFromWishlist.js ***!
  \*******************************************************************/
/*! exports provided: removeProductsFromWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProductsFromWishlist", function() { return removeProductsFromWishlist; });
/* harmony import */ var _createWishlistCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWishlistCard */ "./src/blocks/modules/wishlist/createWishlistCard.js");
/* harmony import */ var _addProductToWishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProductToWishlist */ "./src/blocks/modules/wishlist/addProductToWishlist.js");



var removeProductsFromWishlist = function removeProductsFromWishlist(evt) {
  var counter = document.querySelector('.wishlist .counter');
  var productId = evt.target.dataset.productId;

  if (evt.target.classList.contains('wishlist__btn-delete')) {
    if (_createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].includes(productId)) {
      _createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].splice(_createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].indexOf(productId), 1);
    }

    counter.textContent = _createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].length;
    Object(_addProductToWishlist__WEBPACK_IMPORTED_MODULE_1__["addProductToWishlist"])();
  }
};



/***/ }),

/***/ "./src/blocks/modules/wishlist/renderWishlistCard.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/wishlist/renderWishlistCard.js ***!
  \***********************************************************/
/*! exports provided: renderWishlistCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderWishlistCard", function() { return renderWishlistCard; });
/* harmony import */ var _createWishlistCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWishlistCard */ "./src/blocks/modules/wishlist/createWishlistCard.js");


var renderWishlistCard = function renderWishlistCard(products) {
  var wishlistList = document.querySelector('.wishlist__list');
  wishlistList.textContent = '';

  if (products.length) {
    products.forEach(function (_ref) {
      var id = _ref.id,
          title = _ref.title,
          price = _ref.price,
          img = _ref.img;
      wishlistList.append(Object(_createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["createWishlistCard"])(id, title, price, img));
    });
  } else {
    wishlistList.textContent = 'Ваш список еще пустой!';
  }
};



/***/ }),

/***/ "./src/blocks/modules/wishlist/setWishlistCountFromProduct.js":
/*!********************************************************************!*\
  !*** ./src/blocks/modules/wishlist/setWishlistCountFromProduct.js ***!
  \********************************************************************/
/*! exports provided: setWishlistCountFromProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWishlistCountFromProduct", function() { return setWishlistCountFromProduct; });
/* harmony import */ var _createWishlistCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWishlistCard */ "./src/blocks/modules/wishlist/createWishlistCard.js");


var setWishlistCountFromProduct = function setWishlistCountFromProduct(evt) {
  var counter = document.querySelector('.wishlist .counter');
  var productId = evt.target.dataset.productId;

  if (evt.target.classList.contains('card__btn-add-wishlist')) {
    if (_createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].includes(productId)) {
      _createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].splice(_createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].indexOf(productId), 1);
      evt.target.classList.remove('active');
    } else {
      _createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].push(productId);
      evt.target.classList.add('active');
    }

    counter.textContent = _createWishlistCard__WEBPACK_IMPORTED_MODULE_0__["wishlist"].length;
  }
};



/***/ }),

/***/ "./src/blocks/modules/wishlist/wishlistHandlersClick.js":
/*!**************************************************************!*\
  !*** ./src/blocks/modules/wishlist/wishlistHandlersClick.js ***!
  \**************************************************************/
/*! exports provided: wishlistHandlersClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistHandlersClick", function() { return wishlistHandlersClick; });
/* harmony import */ var _closeWishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closeWishlist */ "./src/blocks/modules/wishlist/closeWishlist.js");
/* harmony import */ var _openWishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openWishlist */ "./src/blocks/modules/wishlist/openWishlist.js");
/* harmony import */ var _removeProductsFromWishlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeProductsFromWishlist */ "./src/blocks/modules/wishlist/removeProductsFromWishlist.js");
/* harmony import */ var _basket_setBasketCountFromProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basket/setBasketCountFromProduct */ "./src/blocks/modules/basket/setBasketCountFromProduct.js");





var wishlistHandlersClick = function wishlistHandlersClick() {
  var wishlistElem = document.querySelector('.wishlist');
  wishlistElem.addEventListener('click', function (evt) {
    Object(_closeWishlist__WEBPACK_IMPORTED_MODULE_0__["closeWishlist"])(evt);
    Object(_openWishlist__WEBPACK_IMPORTED_MODULE_1__["openWishlist"])(evt);
    Object(_removeProductsFromWishlist__WEBPACK_IMPORTED_MODULE_2__["removeProductsFromWishlist"])(evt);
    Object(_basket_setBasketCountFromProduct__WEBPACK_IMPORTED_MODULE_3__["setBasketCountFromProduct"])(evt, 'wishlist__btn-add-basket');
  });
};



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_database_loadDatabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/database/loadDatabase */ "./src/blocks/modules/database/loadDatabase.js");
/* harmony import */ var _modules_catalog_createCatalogCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/catalog/createCatalogCard */ "./src/blocks/modules/catalog/createCatalogCard.js");
/* harmony import */ var _modules_catalog_renderCatalogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/catalog/renderCatalogCard */ "./src/blocks/modules/catalog/renderCatalogCard.js");
/* harmony import */ var _modules_catalog_catalogHandlersClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/catalog/catalogHandlersClick */ "./src/blocks/modules/catalog/catalogHandlersClick.js");
/* harmony import */ var _modules_basket_basketHandlersClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/basket/basketHandlersClick */ "./src/blocks/modules/basket/basketHandlersClick.js");
/* harmony import */ var _modules_basket_calcTotalPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/basket/calcTotalPrice */ "./src/blocks/modules/basket/calcTotalPrice.js");
/* harmony import */ var _modules_basket_openBasket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/basket/openBasket */ "./src/blocks/modules/basket/openBasket.js");
/* harmony import */ var _modules_basket_closeBasket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/basket/closeBasket */ "./src/blocks/modules/basket/closeBasket.js");
/* harmony import */ var _modules_basket_createBasketCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/basket/createBasketCard */ "./src/blocks/modules/basket/createBasketCard.js");
/* harmony import */ var _modules_basket_renderBasketCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/basket/renderBasketCard */ "./src/blocks/modules/basket/renderBasketCard.js");
/* harmony import */ var _modules_basket_addProductToBasket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/basket/addProductToBasket */ "./src/blocks/modules/basket/addProductToBasket.js");
/* harmony import */ var _modules_basket_removeProductFromBasket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/basket/removeProductFromBasket */ "./src/blocks/modules/basket/removeProductFromBasket.js");
/* harmony import */ var _modules_basket_setBasketCountFromProduct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/basket/setBasketCountFromProduct */ "./src/blocks/modules/basket/setBasketCountFromProduct.js");
/* harmony import */ var _modules_basket_toggleWishlistFromBasketProduct__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/basket/toggleWishlistFromBasketProduct */ "./src/blocks/modules/basket/toggleWishlistFromBasketProduct.js");
/* harmony import */ var _modules_category_randomSort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/category/randomSort */ "./src/blocks/modules/category/randomSort.js");
/* harmony import */ var _modules_category_renderRandomSort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/category/renderRandomSort */ "./src/blocks/modules/category/renderRandomSort.js");
/* harmony import */ var _modules_category_renderSortByCategory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/category/renderSortByCategory */ "./src/blocks/modules/category/renderSortByCategory.js");
/* harmony import */ var _modules_category_sortByCategory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/category/sortByCategory */ "./src/blocks/modules/category/sortByCategory.js");
/* harmony import */ var _modules_search_searchHandlerSubmit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/search/searchHandlerSubmit */ "./src/blocks/modules/search/searchHandlerSubmit.js");
/* harmony import */ var _modules_search_searchProductsById__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/search/searchProductsById */ "./src/blocks/modules/search/searchProductsById.js");
/* harmony import */ var _modules_wishlist_addProductToWishlist__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! %modules%/wishlist/addProductToWishlist */ "./src/blocks/modules/wishlist/addProductToWishlist.js");
/* harmony import */ var _modules_wishlist_closeWishlist__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! %modules%/wishlist/closeWishlist */ "./src/blocks/modules/wishlist/closeWishlist.js");
/* harmony import */ var _modules_wishlist_createWishlistCard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! %modules%/wishlist/createWishlistCard */ "./src/blocks/modules/wishlist/createWishlistCard.js");
/* harmony import */ var _modules_wishlist_openWishlist__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! %modules%/wishlist/openWishlist */ "./src/blocks/modules/wishlist/openWishlist.js");
/* harmony import */ var _modules_wishlist_removeProductsFromWishlist__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! %modules%/wishlist/removeProductsFromWishlist */ "./src/blocks/modules/wishlist/removeProductsFromWishlist.js");
/* harmony import */ var _modules_wishlist_renderWishlistCard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! %modules%/wishlist/renderWishlistCard */ "./src/blocks/modules/wishlist/renderWishlistCard.js");
/* harmony import */ var _modules_wishlist_setWishlistCountFromProduct__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! %modules%/wishlist/setWishlistCountFromProduct */ "./src/blocks/modules/wishlist/setWishlistCountFromProduct.js");
/* harmony import */ var _modules_wishlist_wishlistHandlersClick__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! %modules%/wishlist/wishlistHandlersClick */ "./src/blocks/modules/wishlist/wishlistHandlersClick.js");
/* harmony import */ var _modules_initialization_initialization__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! %modules%/initialization/initialization */ "./src/blocks/modules/initialization/initialization.js");






























/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map