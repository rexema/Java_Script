'use strict';
const catalog = {

    catalogDivClass: null,
    catalogDiv: null,
    cart: null,
    list: [{
            id_product: 123,
            product_name: 'Платье чёрное',
            price: 5400,
            product_image: 'images/dress_small.jpg'
        },
        {
            id_product: 456,
            product_name: 'Платье белое',
            price: 3500,
            product_image: 'images/dress2_small.jpg'
        },
        {
            id_product: 345,
            product_name: 'Платье в цветочек',
            price: 4200,
            product_image: 'images/dress3_small.jpg'
        },

    ],
    //инициализация каталога
    init(catalogDivClass, cart) {
        this.catalogDiv = document.querySelector(`.${catalogDivClass}`);
        this.cart = cart;
        this.render();
        this.addEventHandlers();

    },

    //запуск каталога
    render() {
        if (this.getCatalogLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },
    //обработчик событий
    addEventHandlers() {
        this.catalogDiv.addEventListener('click', event => this.addToCart(event));

    },

    //метод добавления в корзину

    addToCart(event) {
        if (!event.target.classList.contains("product__add-to-cart")) return;
        const id_product = +event.target.dataset.id_product;
        const productToAdd = this.list.find((product) => product.id_product === id_product);
        this.cart.addToCart(productToAdd);
    },

    getCatalogLength() {
        return this.list.length;
    },

    //получение кол-ва товаров в каталоге

    //рендер списка товаров
    renderCatalogList() {
        this.catalogDiv.innerHTML = " ";
        this.list.forEach(item => {
            this.catalogDiv.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    //вывод отдельного товара
    renderCatalogItem(item) {
        return `<div class="product">
        <h3>${item.product_name}</h3>
        <img src="${item.product_image}">
        <p>${item.price}</p>
        <button class="product__add-to-cart" data-id_product="${item.id_product}">В корзину</button
        </div>`
    },


    //вывод пустого каталога
    renderEmptyCatalog() {
        this.catalogDiv.innerHTML = " ";
        this.catalogDiv.textContent = 'Каталог товаров пуст.';
    },
};

//Объект корзины

const cart = {
    cartDiv: null,
    clearCartBtn: null,
    products: [{
        id_product: 123,
        product_name: "Платье чёрное",
        price: 4200,
        quantity: 2,
    }, ],
    //инициализация корзины

    init(cartDivClass, clearCartBtn) {
        this.cartDiv = document.querySelector(`.${cartDivClass}`);
        this.clearCartBtn = document.querySelector(`.${clearCartBtn}`);

        this.addEventHandlers();
        this.render();
        this.addEventTocountCart();
    },

    //обработчик событий
    addEventHandlers() {
        this.clearCartBtn.addEventListener('click', this.dropCart.bind(this));
    },

    dropCart() {
        this.products = [];
        this.render();
    },

    //запуск корзины
    render() {
        if (this.getCartProductsLength() > 0) {
            this.renderCart();
        } else {
            this.renderEmptyCart();
        }
    },

    addToCart(product) {
        if (product) {
            const findInCart = this.products.find((item) => product.id_product === item.id_product);
            if (findInCart) {
                findInCart.quantity++;
            } else {
                this.products.push({ ...product, quantity: 1 });
            }
            this.render();
        } else {
            alert("Error");
        }

    },
    //получение кол-ва товаров в корзине

    getCartProductsLength() {
        return this.products.length;
    },
    //запуск пустой корзины
    renderEmptyCart() {
        this.cartDiv.innerHTML = " ";
        this.cartDiv.textContent = "Корзина пуста";

    },
    //запуск списка товаров в корзине
    renderCart() {
        this.cartDiv.innerHTML = " ";
        this.products.forEach(item => {
            this.cartDiv.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    //рендер отдельного товара в корзине

    renderCartItem(item) {
        return `<div>
            <h3>${item.product_name}</h3>
            <p>${item.price}</p>
            <p>${item.quantity}</p>
            </div>`;

    },

    addEventTocountCart() {
        const countBtn = document.querySelector(".count-cart");
        countBtn.addEventListener('click', this.showSum);
    },


};

catalog.init('catalog', cart);
cart.init('cart', 'clr-cart');