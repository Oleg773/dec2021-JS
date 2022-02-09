// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function lina(one, two, three) {
//     if (one < two && one < three) {
//         document.write(one);
//     } else if (two < three && two < one) {
//         document.write(two);
//     } else {
//         document.write(three);
//     }
// };
// lina(400, 200, 70);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function lina(one, two, three) {
//     if (one > two && one > three) {
//         document.write(one);
//     } else if (two > three && two > one) {
//         document.write(two);
//     } else {
//         document.write(three);
//     }
// };
// lina(400, 200, 70);

// - створити функцію яка повертає найбільше число з масиву
// let arr = [1,2,3,4,5]
// function puck(arr){
//     let max = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement > max) {
//             max = arrElement
//         }
//     }
//     return max;
// }
// document.write(`<h1>Найбільший елемент: ${puck(arr)}</h1>`)

// створити функцію яка повертає найменьше число з масиву

// let one = [76,89,90,53,23,-90]
// function array(array){
//     let min = one[0]
//     for (const minElement of array) {
//         if(minElement < min){
//             min = minElement;
//         }
//     }
//     return min;
// }
//
// document.write(`<h1> Найменший елемент: ${array(one)}</h1>`)

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let nmbArray = [1, 2, 3, 44, 32, 23, 11, 1234, 12];
//
// function sumArray(array) {
//     let sum = 0;
//     for (let arrayElement of array) {
//         sum = arrayElement + sum;
//     }
//     return sum;
// }
//
// document.write(sumArray(nmbArray));


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let nmbArray = [1, 2, 3, 11, 22, 33, 44, 34, 23, 12];
//
// function serArray(array) {
//     let sum = 0;
//     for (let arrayElement of array) {
//         sum = arrayElement + sum
//     }
//     return sum / array.length;
// }
//
// document.write(serArray(nmbArray));


//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let nmb = [1, 2, 3, 4, 5, 44, 33, 22, 11,];
//
// function allArray(array) {
//     let min = array[0];
//     let max = array[0];
//     for (let arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement
//         }
//         if (arrayElement > max) {
//             max = arrayElement
//         }
//     }
//
//     console.log(max);
//     return min;
// }
//
// document.write(allArray(nmb));


// //- створити функцію яка заповнює масив рандомними числами

// function arrayRandom(array) {
//     let someRondom = [];
//     for (i = 0; i < array; i++) {
//         someRondom.push(Math.floor(Math.random() * 100));
//     }
//     return someRondom;
// }
//
// document.write(arrayRandom(22));