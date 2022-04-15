
//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
const seive = [];
const primes = [];
let num = 100;
let i = 1;
while (i <= num) {
    i++;
    if (!seive[i]) {
        primes.push(i);
        for (let j = i * i; j <= num; j += i) {
            seive[j] = j;
        }
    }
    if (i == 100) break;
}
console.log(primes);

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var products = [
    ["Платье", 2300],
    ["Юбка", 5600],
    ["Пуловер", 7800],
    ["Штаны", 23000]
]

function countBasketPrice(args) {
    let i = 0;
    let sum = 0;
    while (i <= args.length) {
        for (let x = 0; x < products.length; x++) {
            if (products[x][0] == args[i]) {
                i++;
                sum += products[x][1]

            }
        }
        if (i == args.length) break;

    }
    result = "Общая сумма товаров составляет: "
    return result + sum;

}

console.log(countBasketPrice(["Платье", "Юбка", "Пуловер", "Штаны"]));

// 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//for(…){// здесь пусто}

for (var i = 0; i <= 9; console.log(i++)) {}

// 4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

let i = 0;
let n = 1;
while (i < 20) {
    console.log('x'.repeat(n))
    console.log('\n')
    n++
    i++
}
