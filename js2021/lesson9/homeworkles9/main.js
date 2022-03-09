// 1) // - створити блок,
// let block = document.createElement('block')

// - додати йому класи wrap, collapse, alpha, beta
// block.classList.add = ('wrap');
// block.classList.add = ('collapse');
// block.classList.add = ('alpha');
// block.classList.add = ('beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// block.style.background = 'blue';
// block.style.color = 'red';
// block.style.fontSize = '50px';

// - додати цей блок в body.
// document.body.appendChild(block);

// - клонувати його повністю, та додати клон в body.
// document.body.appendChild(block.cloneNode(true))

// 2) - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let arr = ['Main','Products','About us','Contacts'];



// 3) - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let block = document.createElement('div')
//     block.InnerText = `${course.title} ${course.monthDuration}`;
//     document.body.appendChild('block')
// }

// 4) - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let one = document.createElement('div')
//     let heading = document.createElement('heading')
//     heading.innerText = coursesAndDurationArrayElement.title;
//
//     let p = document.createElement('p')
//     p.innerText = coursesAndDurationArrayElement.monthDuration
//
//     one.appendChild(heading);
//     one.appendChild(p);
//     document.body.appendChild(one);
// }