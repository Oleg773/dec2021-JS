//  a) додає клас з назвою групи, елементу з ід main_header
// let someClassByMainHeader = document.getElementById('main_header');
// someClassByMainHeader.classList.add('main_header')

// b) робить шириниу елементу ul 400px
// let ulrx = document.getElementsByTagName('ul');
// console.log(ulrx)
// ulrx[0].style.width = '400px;'

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let liklist = document.getElementsByTagName('linklist')
// for (const liklistElement of liklist) {
//     liklistElement.style.width = '50%'
// }

//     d) отримує текст який зберігається в елементі з класом listElement2
// let textListElement2 = document.getElementsByClassName('listElement2');
// textListElement2[0].innerHTML = '<a href=""><b>hello</b></a>';

// //     e) отримує всі елементи li та змінює ім колір фону на сірий
// let someLi = document.getElementsByTagName('li')
// for (const someLiElement of someLi) {
//     someLiElement.style.background = 'silver'
// }


//     f) отримує всі елементи 'a' та додає їм клас anchor
// let a = document.getElementsByTagName('a');
// for (const aElement of a) {
//     aElement.classList.add('anchar')
//     console.log(aElement);
// }


//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let aTxt = document.getElementsByTagName('a');
// for (const aTxtElement of aTxt) {
//     if (aTxtElement.innerText === 'link3') {
//         aTxtElement.style.fontSize = '40px'
//         console.log(aTxtElement);
//     }
// }


//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aClassXxx = document.getElementsByTagName('a');
// console.log(aClassXxx);
// for (const aClassXxx1 of aClassXxx) {
//     console.log(aClassXxx1);
//     let element_xxx = aClassXxx1.innerText
//     aClassXxx1.classList.add('element_$(element_xxx');
// }


//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let colorSubHeader = document.getElementsByClassName('sub-header');
// for (const item of colorSubHeader) {
//     item.style.background = prompt('color: (silver, tomato)')
// }
