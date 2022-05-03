const productsToBasket = {
    productList: [{
            product_name: "Платье",
            price: 4200,
        },
        {
            product_name: "Штаны",
            price: 5600,
        },
        {
            product_name: "Юбка",
            price: 4200,
        },
        {
            product_name: "Шорты",
            price: 1500,
        }
    ],

    init() {
        this.createBasket();
        this.renderCatalog();
    },
    countBasketPrice() {
        let i = 0;
        let sum = 0;

        while (i <= this.productList.length) {
            for (let x = 0; x < this.productList.length; x++) {
                i++;
                sum += this.productList[x]['price']
            }
            if (i == this.productList.length) break;

        }

        return sum;
    },

    clearBasket() {
        this.productList = [];
        return this.productList
    },
    createBasket() {
        const basketDiv = document.querySelector('.basket-div');
        basketDiv.innerHTML = "<p></p>";
        const basketP = document.querySelector('p');
        basketP.className = "basket-p";

        if (this.productList.length == 0) {
            basketP.textContent = 'Ваша корзина пуста'
        } else {
            basketP.textContent = `В вашей корзине: ${this.productList.length} товаров.Общая стоимость: 
         ${this.countBasketPrice()} рублей`;
        }
    },

    renderCatalog() {
        const catalog = document.querySelector('.basket-div');
        this.productList.forEach(item => {
            catalog.insertAdjacentHTML('beforebegin', this.renderCatalogItem(item));
        });
    },
    renderCatalogItem(item) {
        return `<div>
            <h3>${item.product_name}</h3>
            <p>${item.price}</p>
            </div>`
    }
};
productsToBasket.init();