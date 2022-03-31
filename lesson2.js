<meta charset="utf-8">
<script type="text/javascript">

// 1) Почему код дает именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a; alert(c); //2 При префиксной форме инкрементирование производится сразу
d = b++; alert(d); // 1 При постфиксной форме сначала возвращается значение, а инкрементирование производится потом
c = (2+ ++a); alert(c); // 5 ++a = 3, поскольку в первом примере мы увеличили переменную а на 1. Соответственно 2 + 3 = 5
d = (2+ b++); alert(d); // 4 b++ = 2, поскольку во втором примере мы увеличили b на 1. Но в данном случае вернётся 2, а не 3, поскольку инкрементирование имеет постфиксную форму
alert(a); // 3 На 9 строчке мы инкрементировали переменную а и получили а = 3
alert(b); // 3 На 10 строчке мы инкрементировали переменную b (значение которой к тому моменту было 2). Поэтому в данном случае вернётся значение 3.

// // 2) Чему будет равен x?

var a = 2;
var x = 1 + (a *= 2);
alert(x);// Выведется значение x = 5, поскольку a *=2 это a * a, то есть 4, 4 + 1 = 5


// // 3) Объявить две целочисленные переменные — a и b и задать им произвольные начальные
// // значения. Затем написать скрипт, который работает по следующему принципу:
// // o если a и b положительные, вывести их разность;
// // o если а и b отрицательные, вывести их произведение;
// // o если а и b разных знаков, вывести их сумму;
// // Ноль можно считать положительным числом

var a = 5;
var b = 10;

if(a >=0 && b >=0){
	alert(a - b);
}
else if(a <0 && b <0){
	alert(a * b);
}
else{
	alert(a + b);
}

// // 4) Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch
// // организовать вывод чисел от a до 15.

let x = 1
switch(x) {
	case 0 : console.log(x); x++;
	case 1: console.log(x);x++;
	case 2: console.log(x);x++;
	case 3: console.log(x);x++;
	case 4: console.log(x);x++;
	case 5: console.log(x);x++;
	case 6: console.log(x);x++
	case 7: console.log(x);x++;
	case 8: console.log(x);x++;
	case 9: console.log(x);x++;
	case 10: console.log(x);x++;
	case 11: console.log(x);x++;
	case 12: console.log(x);x++;
	case 13: console.log(x);x++;
	case 14: console.log(x);x++;
	case 15: console.log(x);x++;
}

// //5) Реализовать четыре основные арифметические операции в виде функций с двумя
// //параметрами. Обязательно использовать оператор return.

function getSum(a, b) {
	return a + b;
}

function getSub(a, b) {
	return a - b;
}

function getMulti(a, b) {
	return a * b;
}

function getFrac(a, b) {
	return a / b;
}
 let a = 5;
 let b = 7

alert(getSum(a, b));
alert(getSub(a, b));
alert(getMulti(a, b));
alert(getFrac(a, b));

// // 6) Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// // где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
// // зависимости от переданного значения выполнить одну из арифметических операций
// // (использовать функции из пункта 5) и вернуть полученное значение (применить switch).

function mathOperation(a, b, operation) {
	switch(a, b, operation){
		case(operation="+"):return getSum(a, b);
		break;
		case(a, b, operation="-"): return getSub(a, b);
		break;
		case(a, b, operation="*"): return getMulti(a, b);
		break;
		case(a, b, operation="/"): return getFrac(a, b);
		break;

	}
}

alert(mathOperation(5, 9, "*"));

// //7) * Сравнить null и 0. Объяснить результат.

console.log(null == 0); //Результат False
console.log(typeof(null));//Object
console.log(typeof(0));//Number
//Оператор == использует так называемый абстрактный алгоритм сравнения для равенств (стандарт ECMA). Согласно этому алгоритму если тип (x) отличается от типа (y)
//то возвращается False
console.log(null > 0);//Результат False
//Согласно абстрактному алгоритму сравнений для начала нам нужно вызвать ToPrimitive. Для null и 0 никаких преобразований не применяется.
//Поэтому согласно следующему шагу мы должны преобразовать к типу Number, null будет преобразовано в +0, а 0 остаётся самим собой.. +0=0, поэтому результат False 
console.log(null < 0);
console.log(null >= 0);// Результат True
//Поскольку согласно алгоритму сравнения мы должны преобразовать к типу Number, null будет преобразовано в +0, а 0 остаётся самим собой.. +0=0
//Если null < 0 принимает значение False, то null >=0 принимает значение True. 
// Интересно проверить сравнение null  c другими числами
console.log(null < 2); //True. null преобразуется в 0, а 0 < 2
console.log(null == 2); //False Object не равен Number
console.log(null >= 2); // False. Поскольку null < 2 True


// //8) * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
// //power(val, pow), где val — заданное число, pow –— степень.

function power(val, pow) {

	if (pow==1) {
		return val;
	}
	else {
		return val * power(val, pow-1) 
	}
	
}

alert(power(2,3));

</script>

