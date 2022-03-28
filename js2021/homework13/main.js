// callback hell
setTimeout(()=>{
    let num = 1;
    console.log(num, 'Підйом о 9:15')
        setTimeout(()=>{
            num++;
            console.log(num, 'о 9:15 підключитися на пару')
            setTimeout(()=>{
                num++;
                console.log(num, 'Поки ідуть лекції можна зробити завдання/тести')
                setTimeout(()=>{
                    num++;
                    console.log(num, 'Обід, пари закінчилися')
                    setTimeout(()=>{
                        num++;
                        console.log(num, 'Піти полежати')
                        setTimeout(()=>{
                            num++;
                            console.log(num, 'Поснідати(пообідати)')
                            setTimeout(()=>{
                                num++;
                                console.log(num, 'Віддихати якийсь час(зіграти в пк ігри)')
                                setTimeout(()=>{
                                    num++;
                                    console.log(num, 'Після того вчити матеріал та зробити завдання з курсів Okten')
                                        setTimeout(()=>{
                                            num++;
                                            console.log(num, 'Перекус')
                                            setTimeout(()=>{
                                                num++;
                                                console.log(num, 'Віддих')
                                                        setTimeout(()=>{
                                                            num++;
                                                            console.log(num, 'Перегляд лекцій або іншого цікаво матеріалу')
                                                            setTimeout(()=>{
                                                                num++;
                                                                console.log(num, 'Перекус')
                                                                setTimeout(()=>{
                                                                    num++;
                                                                    console.log(num, 'Віддих/ігри/навчання')
                                                                    setTimeout(()=>{
                                                                        num++;
                                                                        console.log(num, 'Спати коли мозок захоче')
                                                                        setTimeout(()=>{
                                                                            num++;
                                                                            console.log(num, 'Сон 6-7 год')
                                                                        },2000)
                                                                    },2000)
                                                                },2000)
                                                            },2000)
                                                        },2000)
                                                    },2000)
                                                },2000)
                                            },2000)
                                        },2000)
                                    },2000)
                                },2000)
                            },2000)
                        },2000)
                    },2000)
                },2000)
// promise
new Promise((resolve, reject) =>  {
    let num = 1;
    setTimeout(()=>{
        console.log(`${num}. Підйом о 9:15`)
        num++;
        resolve(num);
    },2000)
})
    .then(num => {
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                console.log(`${num}. о 9:15 підключитися на пару`)
                num++;
                resolve(num);
            },2000)
        })
    })
    .then(num => {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log(`${num}. Поки ідуть лекції можна зробити завдання/тести`)
            num++;
            resolve(num);
        },2000)
    })
})
    .then(num => {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log(`${num}. Обід, пари закінчилися`)
            num++;
            resolve(num);
        },2000)
    })
})
    .then(num => {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log(`${num}. Піти полежати`)
            num++;
            resolve(num);
        },2000)
    })
})
    .then(num => {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log(`${num}. і т.д.`)
            num++;
            resolve(num);
        },1000)
    })
})
