//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// function Car(model, manufacturer, year, max_speed, engine) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.max_speed = max_speed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//     };
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//         }
//     };
//     this.newMaxSpeed = function (newSpeed) {
//         this.max_speed = this.max_speed + newSpeed;
//     };
//     this.newVolue = function (newVolueYear) {
//         this.year = newVolueYear
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
//
//
// }
//
// let car = new Car('BMW', 'Germany', 1999, 280, 3.5);
// console.log(car);
// car.drive();
// car.info();
// car.newMaxSpeed(30);
// car.newVolue(10);
// car.addDriver('koks');
// console.log(car);


//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// class Car {
//
//     constructor(model, manufactari, year, max_speed, engine) {
//         this.model = model;
//         this.manufactari = manufactari;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.engine = engine;
//     }
//
//     drive() {
//         return `їдемо зі швидкістю ${this.max_speed} на годину`
//     };
//
//     info() {
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`);
//         }
//
//     };
//
//     newSpeed(newsSpeed) {
//         this.max_speed = this.max_speed + newsSpeed
//     };
//
//     changeYear(newVolue) {
//         this.year = newVolue
//     };
//
//     addDriver(driver) {
//         console.log(driver);
//     }
// }
//
// let car = new Car('BMW', 'Germany', 1999, 280, 3.5);
// console.log(car);
// console.log(car.drive());
// car.info();
// car.newSpeed(50);
// car.changeYear(2020);
// car.addDriver('persik');
// console.log(car);
