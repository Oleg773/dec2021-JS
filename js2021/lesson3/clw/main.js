// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


// let nmb1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i=0;
// while (i<nmb1.length){
//     let numberOne = nmb1[i];
//     i++;
//     console.log(numberOne);
// }

// let nmb2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < nmb2.length; i++) {
//     let nmb2Element = nmb2[i];
//     console.log(nmb2Element);
// }

// let nmb3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// i = 0;
// while (i < nmb3.length) {
//     i++;
//     if (i % 2 !== 0) {
//         console.log(nmb3[i]);
//     }
// }

// let nmb4 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < nmb4.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(nmb4[i]);
//     }
// }

// let nmb5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// i = 0;
// while (i < nmb5.length){
//     if (i%2 === 0){
//         console.log(nmb5[i]);
//     }
//     i++;
// }

// let nmb6 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < nmb6.length; i++) {
//     if (i % 2 === 0) {
//         console.log(nmb6[i]);
//     }
//
// }

// let nmb7 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < nmb7.length; i++) {
//     if (nmb7[i] % 3 === 0) {
//         nmb7[i] = 'okten';
//         console.log(nmb7[i]);
//     }
//     console.log(nmb7)
//
// }

// let nmb8 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = nmb8.length - 1; i >= 0; i--) {
//     console.log(nmb8[i]);
//
// }



// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let nmb1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = nmb1.length - 1;
// while (i) {
//     let numberOne = nmb1[i];
//     i--;
//     console.log(numberOne);
// }

// let nmb2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = nmb2.length-1; i >=0 ; i--) {
//     let nmb2Element = nmb2[i];
//     console.log(nmb2Element);
// }

// let nmb3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// i = nmb3.length-1;
// while (i >= 0) {
//     i--;
//     if (i % 2 !== 0) {
//         console.log(nmb3[i]);
//     }
// }

// let nmb4 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = nmb4.length-1; i >=0 ; i--) {
//     if (i % 2 !== 0) {
//         console.log(nmb4[i]);
//     }
// }

// let nmb5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// i = nmb5.length-1;
// while (i >=0) {
//     if (i % 2 === 0) {
//         console.log(nmb5[i]);
//     }
//     i--;
// }

// let nmb6 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = nmb6.length - 1; i >= 0; i--) {
//     if (i % 2 === 0) {
//         console.log(nmb6[i]);
//     }
//
// }

// let nmb7 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = nmb7.length - 1; i >= 0; i--) {
//     if (nmb7[i] % 3 === 0) {
//         nmb7[i] = 'okten';
//         console.log(nmb7[i]);
//     }
//     console.log(nmb7)
//
// }