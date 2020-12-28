// // Задача № 1
// let max = function(numberOne, numberTwo) {
// 	if (numberOne > numberTwo) return numberOne;
// 	else return numberTwo;
// };
// console.log(max(21,22));



// // Задача № 2
// let min = function (...rest) {
// 	let min = rest[0];
// 	for (let i = 0; i < rest.length; i++) {
// 		// if (rest[i] < min) {
// 		if (min > rest[i]) {
// 			min = rest[i];
// 		}
// 	}
// 	return min;
// };
// console.log(min(10, 20, -1, -50, 100, -100, 0));


// // Задача № 3
// let arr = [
// 	{
// 		firstName: "Имя 1",
// 		lastName: "Фамилия 1",
// 		age: 14,
// 	},
// 	{
// 		firstName: "Имя 2",
// 		lastName: "Фамилия 2",
// 		age: 15,
// 	},
// 	{
// 		firstName: "Имя 3",
// 		lastName: "Фамилия 3",
// 		age: 16,
// 	},
// 	{
// 		firstName: "Имя 4",
// 		lastName: "Фамилия 4",
// 		age: 17,
// 	},
// 	{
// 		firstName: "Имя 5",
// 		lastName: "Фамилия 5",
// 		age: 18,
// 	},
// 	{
// 		firstName: "Имя 6",
// 		lastName: "Фамилия 6",
// 		age: 19,
// 	},
// 	{
// 		firstName: "Имя 7",
// 		lastName: "Фамилия 7",
// 		age: 20,
// 	},
// 	{
// 		firstName: "Имя 8",
// 		lastName: "Фамилия 8",
// 		age: 21,
// 	},
// 	{
// 		firstName: "Имя 9",
// 		lastName: "Фамилия 9",
// 		age: 22,
// 	},
// 	{
// 		firstName: "Имя 10",
// 		lastName: "Фамилия 10",
// 		age: 23,
// 	},
// ];
// arr = arr.filter(function (element) {
// 	return element.age >= 18;
// });
// arr = arr.map(function (element) {
// 	const obj = {
// 		...element,
// 		fullName: element.firstName + " " + element.lastName,
// 	};
// 	return obj;
// });
// arr = arr.map(function (element) {
// 	return element.fullName;
// });
// console.log(arr);



// // Задача № 4
// let arr = [1,2,3,4,5,6];
// let deleteFirst = function (arg) {
// 	let b = [];
//     for (let i = 1; i < arg.length; i++) {
// 		 b[i-1] = arg[i];
//     }
// 	arr = b;
// };
// deleteFirst(arr);
// console.log(arr);


// // Задача № 5
// let arr = [1, 2, 3, 4, 5, 6];
// let addToEnd = function (arg, ...rest) {
// 	for (let i = 0; i < rest.length; i++) {
// 		arg[arg.length] = rest[i];
// 	}
// 	console.log(arr);
// };
// addToEnd(arr, 1, 2, 3, 4, 5, 6);


// // Задача № 6
// let obj = {
// 	firstName: "Dima",
// 	age: 29,
// };

// let addToObject = function (target, ...source) {
// 	for (let key in source) {
// 		for (let value in source[key]) {
// 			target[value] = source[key][value];
// 		}
// 	}
// 	return target;
// };

// addToObject(obj, {
// 	firstName: "Vadim"
// }, {
// 	age: "30"
// }, {
// 	lastName: "Doe"
// });
// console.log(obj);


// // Задача № 7
// let setComment = function (date, message, autor = "Anonumys") {
// 	if (date == undefined || message == undefined) {
// 		return alert("Данные переданы не коректно");
// 	}
// 	console.log(autor + ", " + date );
// 	console.log(message);
// };

// setComment('2016-11-02', 'Everything is ok', 'John');
// setComment('2016-11-02', 'You could do it better!');



// // Задача № 8
// function createTimer() {
// 	let time1 = performance.now();
// 	return function times() {
// 		let time2 = performance.now();
// 		let time = time2 - time1;
// 		return time;
// 	};
// }

// let timer = createTimer();
// alert("!");
// alert(timer());



// // Задача № 9
// function createAdder(firstArg) {
// 	return function (secondArg) {
// 		return firstArg + secondArg;
// 	};
// }

// const hello = createAdder("Hello, ");
// alert(hello('John'));
// alert(hello('Harry'));

// const plus = createAdder(5);
// alert(plus(1));
// alert(plus(5));
