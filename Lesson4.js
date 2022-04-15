// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих 
// свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.


function getNumber(num) {
    let numStr = String(num);
    let numArr = Array.from(numStr);
    let numObj = {
        единицы: 0,
        десятки: 0,
        сотни: 0
    };
    if (numArr.length == 1) {
        numObj.единицы = numArr[0]
        console.log(numObj)
    } else if (numArr.length == 2) {
        numObj.единицы = numArr[1],
            numObj.десятки = numArr[0],
            console.log(numObj)
    } else if (num > 999) {
        console.log("Число превышает 999 ", numObj)
    } else {
        numObj.единицы = numArr[2],
            numObj.десятки = numArr[1],
            numObj.сотни = numArr[0],
            console.log(numObj)

    }

}

getNumber(1000)

// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

const basket = {
    productList: [
        ["Платье", 2300],
        ["Юбка", 5600],
        ["Пуловер", 7800],
        ["Штаны", 23000]
    ],

    countBasketPrice: function() {

        let i = 0;
        let sum = 0;
        while (i <= this.productList.length) {
            for (let x = 0; x < this.productList.length; x++) {
                i++;
                sum += this.productList[x][1]

            }
            if (i == this.productList.length) break;

        }
        result = "Общая сумма товаров составляет: "
        return result + sum;
    },

    clearBasket: function() {
        this.productList = [];
        return this.productList
    }
};

console.log(basket.countBasketPrice());
console.log(basket.clearBasket());