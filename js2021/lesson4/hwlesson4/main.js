// 1) - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function square(a, b) {
//     let one = a * b;
//     return one;
// }
//
// console.log(square(60, 30))
// document.write('Площа прямокутника: ' + square(60, 30))

// 2) - створити функцію яка обчислює та повертає площу кола з радіусом r

// function arr(r){
//     let two = r * 2;
//     let balon = 3.14 * two;
//     return balon;
// }
// console.log(arr(50))
// document.write('Площа кола:' + arr(50))

// 3) створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function arrow(h,r){
//     let one = r * h;
//     let two = 2 * 3.14 * one;
//     return two;
// }
// console.log(arrow(10,50))
// document.write('Площа циліндра:' + arrow(10,50))

// 4) - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1,2,3,4,5,'maw', 'mew','mrt'];
// function arrow (array) {
//     for (let i = 0; i < array.length; i++) {
//        document.write(array[i])
//     }
// }
// arrow(array)


// 5) створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function par(oblx){
//     document.write(`<p>${oblx}</p>`);
// }
// par('hi world')

// 6)  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function subway(dazle){
//     document.write(`<ul>`);
//     document.write(`<li>${dazle}</li>`);
//     document.write(`<li>${dazle}</li>`);
//     document.write(`<li>${dazle}</li>`);
//     document.write(`</ul>`);
// }
// subway(`par`);

// 7) - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [1,2,3,4,5,5,'one','false'];
// function arrayDazle(array){
//     document.write(`<ol>`)
//     for ( i = 0; i < array.length; i++){
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ol>`)
// }
// arrayDazle(array);

// 8) - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let papa = [{id: 1, name: 'Oleg', age: 19}];
// function arrowRgb(papa){
//     for (const papaKey of papa) {
//         document.write(`<div>${papaKey.id}.${papaKey.name}.${papaKey.age}</div>`);
//     }
// }
// arrowRgb(papa);