// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone */
// function User(id,name,surname,email,phone){
//     this.id = id;
//     this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
// }

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let arr = [
//     new User(1,'Oleg','Ihorovych','qw@gmial.com',38083939234),
//     new User(2,'Lucas','Ivanovych','as@gmial.com',38073849443),
//     new User(3,'Vitaliy','Pavlovych','zx@gmial.com',3808949343),
//     new User(4,'Ostap','Grigoryevich','ed@gmial.com',3809032424),
//     new User(5,'Max','Pavlovich','hg@gmial.com',3809239432),
//     new User(6,'Andriy','Andreevich','ll@gmial.com',380899020432),
//     new User(7,'Sasha','Olegovich','gg@gmial.com',38002344283),
//     new User(8,'Volodymr','Maksimovich','tg@gmial.com',3808474834),
//     new User(9,'Ivan','Dmitrovich','mm@gmial.com',38084747644),
//     new User(10,'Pasha','Yuriyovich','po@gmial.com',380324341314)
// ];
// console.log(arr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filUser = arr.filter((log)=>{
//     if (log.id % 2 === 0){
//         return log
//     }});
//    console.log(filUser)
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// arr.sort((a, b) => a.id - b.id);
// console.log(filUser)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client{
//     constructor(id,name,surname,email,phone,order){
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// створити пустий масив, наповнити його 10 об'єктами Client
// let mas = [
//     new Client(10,'Oleg','Ihorovych','qw@gmial.com',38083939234,'fish'),
//     new Client(20,'Lucas','Ivanovych','as@gmial.com',38073849443,'iphone'),
//     new Client(30,'Vitaliy','Pavlovych','zx@gmial.com',3808949343,'samsung'),
//     new Client(40,'Ostap','Grigoryevich','ed@gmial.com',3809032424,'macbook'),
//     new Client(50,'Max','Pavlovich','hg@gmial.com',3809239432,'apple'),
//     new Client(60,'Andriy','Andreevich','ll@gmial.com',380899020432,'banana'),
//     new Client(70,'Sasha','Olegovich','gg@gmial.com',38002344283,'car'),
//     new Client(80,'Volodymr','Maksimovich','tg@gmial.com',3808474834,'table'),
//     new Client(90,'Ivan','Dmitrovich','mm@gmial.com',38084747644,'carpet'),
//     new Client(100,'Pasha','Yuriyovich','po@gmial.com',380324341314,'paper')
// ];
// console.log(mas)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sorClin = mas.sort((a, b) => a.order.length - b.order.length);
// console.log(sorClin)