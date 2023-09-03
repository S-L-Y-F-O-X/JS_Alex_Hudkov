// task_1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const strings_1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
console.log(strings_1.map(str => str.length));

// task_2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

const strings_2 = ['hello world', 'lorem ipsum', 'javascript is cool'];
console.log(strings_2.map(str => str.toUpperCase()));

// task_3 - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const strings_3 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
console.log(strings_3.map(str => str.toLowerCase()));

// task_4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let string_4 = '   dirty string   ';
console.log(string_4.trim());

// task_5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

function stringToarray(str) {
    return str.split(' ');
}
let str = 'Ревуть воли як ясла повні';
console.log(stringToarray(str));

// task_6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let num = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(num.map(num => num.toString()));

// task_7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

function sortNums(nums, direction) {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    }
}
let nums = [11, 21, 3];
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));

// task_8 - є масив

let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

//  -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filteredCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filteredCourses);

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let transformedArray = coursesAndDurationArray.map((course, index) => {
    return { id: index + 1, title: course.title, monthDuration: course.monthDuration };
});
console.log(transformedArray);



// task_9 описати колоду карт (від 6 до туза без джокерів)

const deck = [];
const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king','ace'];
suits.forEach((suit) => {
    values.forEach((value) => {
        const color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';
        deck.push({ cardSuit: suit, value, color });
    });
});

// - знайти піковий туз
const aceOfSpades = deck.find((card) => card.cardSuit === 'spade' && card.value === 'ace');
console.log(aceOfSpades);
// - всі шістки
const sixes = deck.filter((card) => card.value === '6');
console.log(sixes);
// - всі червоні карти
const redCards = deck.filter((card) => card.color === 'red');
console.log(redCards);
// - всі буби
const diamonds = deck.filter((card) => card.cardSuit === 'diamond');
console.log(diamonds);
// - всі трефи від 9 та більше
const ninesAndAbove = deck.filter((card) => card.cardSuit === 'club' && values.indexOf(card.value) >= values.indexOf('9'));
console.log(ninesAndAbove);

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

const packedDeck = deck.reduce((acc, card) => {
    acc[card.cardSuit].push(card);
    return acc;
}, {
    spade: [],
    diamond: [],
    heart: [],
    club: []
});
console.log(packedDeck);

// task_10
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass

const sassCourses = coursesArray.filter(course => course.modules.includes('sass'));
console.log(sassCourses);

// --написати пошук всіх об'єктів, в який в modules є docker

const dockerCourses = coursesArray.filter(course => course.modules.includes('docker'));
console.log(dockerCourses);