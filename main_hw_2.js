// task_1_1
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let object = [2, 33, 'hello', true, null, undefined, 5.7, 'world', false, [1, 2, 3]];

console.log(object);


// task_1_2
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "Harry Potter and the Philosopher's Stone",
    pageCount: 432,
    genre: 'Fantasy'
};

let book2 = {
    title: 'The Intelligent Investor',
    pageCount: 640,
    genre: 'essay'
};

let book3 = {
    title: 'A Briefer History of Time',
    pageCount: 176,
    genre: 'Popular science literature'
};

console.log(book1);
console.log(book2);
console.log(book3);


// task_1_3
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book_1 = {
    title: 'Book 1',
    pageCount: 127,
    genre: 'Fiction',
    author: [{name: 'Author_1', age: 35}]
};
console.log(book_1);

let book_2 = {
    title: 'Book 2',
    pageCount: 220,
    genre: 'Short stories',
    author: [{name: 'Author_2', age: 45}]
};
console.log(book_2);

let book_3 = {
    title: 'Book 3',
    pageCount: 380,
    genre: 'Western',
    author: [{name: 'Author_3', age: 60}]
};
console.log(book_3);

// task_1_4
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'User_1', username: 'user1', password: 'password1'},
    {name: 'User_2', username: 'user2', password: 'password2'},
    {name: 'User_3', username: 'user3', password: 'password3'},
    {name: 'User_4', username: 'user4', password: 'password4'},
    {name: 'User_5', username: 'user5', password: 'password5'},
    {name: 'User_6', username: 'user6', password: 'password6'},
    {name: 'User_7', username: 'user7', password: 'password7'},
    {name: 'User_8', username: 'user8', password: 'password8'},
    {name: 'User_9', username: 'user9', password: 'password9'},
    {name: 'User_10', username: 'user10', password: 'password10'},
];
    console.log(users[0].password);
    console.log(users[1].password);
    console.log(users[2].password);
    console.log(users[3].password);
    console.log(users[4].password);
    console.log(users[5].password);
    console.log(users[6].password);
    console.log(users[7].password);
    console.log(users[8].password);
    console.log(users[9].password);



// task_2_1
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// task_2_2
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 25;

if (time < 0){
    console.log('Введіть число від 0 до 60');
} else if (time < 15) {
    console.log('Перша чверть години');
} else if (time < 30) {
    console.log('Друга чверть години');
} else if (time < 45) {
    console.log('Третя чверть години');
} else if (time < 60) {
    console.log('Четверта чверть години');
} else if (time > 60) {
    console.log('Введіть число до 60');
}

// task_2_3
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 12;

if (day <= 10) {
    console.log('Перша половина місяця');
} else if (day <= 20) {
    console.log('Друга половина місяця');
} else {
    console.log('Третя половина місяця');
}

// task_2_4
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNumber = 3;
switch(dayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid number');
}


// task_2_5
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num_1 = 2;
let num_2 = 43;

if (num_1 > num_2) {
    console.log(num_1);
} else if (num_2 > num_1) {
    console.log(num_2);
} else {
    console.log('Числа рівні');
}


// task_3
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


let xx= 3453;

xx = xx || "default";

console.log(xx);


// task_4
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let k = 5;
    if (coursesAndDurationArray[0].monthDuration>k){
        console.log('Супер');}
    else {
        console.log('Менше 5 місяців');
    }
    if (coursesAndDurationArray[1].monthDuration>k){
        console.log('Супер');}
    else {
        console.log('Менше 5 місяців');
    }
    if (coursesAndDurationArray[2].monthDuration>k){
        console.log('Супер');}
    else {
        console.log('Менше 5 місяців');
    }
    if (coursesAndDurationArray[3].monthDuration>k){
        console.log('Супер');}
    else {
        console.log('Менше 5 місяців');
    }
    if (coursesAndDurationArray[4].monthDuration>k){
        console.log('Супер');}
    else {
        console.log('Менше 5 місяців');
    }
    if (coursesAndDurationArray[5].monthDuration>k){
        console.log('Супер');}
    else {
        console.log('Менше 5 місяців');
    }
