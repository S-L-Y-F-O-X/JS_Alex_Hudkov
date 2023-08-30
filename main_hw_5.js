// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// task_1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let areaRectangle = (a, b) => a * b;
console.log(areaRectangle(5, 7));

// task_2 - створити функцію яка обчислює та повертає площу кола з радіусом r

let areaCircle = (r) => Math.PI * r *r;
console.log(areaCircle(4))

// task_3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let areaCylinder = (h, r) => 2 * Math.PI * r * (h + r);
console.log(areaCylinder(2 ,4))

// task_4 - створити функцію яка приймає масив та виводить кожен його елемент

const elements = (arr) => {
    arr.forEach(element => {
        console.log(element);
    });
};
elements(['Hello Octen', 30, 8, true]);
elements(['Hello', 40, 6, false])

// task_5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const createParagraph = (text) => text;
document.write(createParagraph(`<p>Текст параграфу</p>`));

// task_6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const createListWithSameText = (text) => {
    return `
    <ul>
      <li>${text}</li>
      <li>${text}</li>
      <li>${text}</li>
    </ul>
  `;
};
document.write(createListWithSameText('Текст списку, 6 завдання'));
document.write(createListWithSameText('Текст списку, 6.1 завдання'));
// task_7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createListWithTextAndCount = (text, count) => {
    let listItems = '<ul>';
    for(let i = 0; i < count; i++) {
        listItems += `<li>${text}</li>`;
    }
    listItems += '</ul>';
    return listItems;
};
document.write(createListWithTextAndCount(`Текст списку, 7 завдання`, 4))
document.write(createListWithTextAndCount(`Текст списку, 7.1 завдання`, 2))

// task_8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const buildList = (arr) => {
    let listItems = '<ul>';
    arr.forEach((item) => {
        listItems += `<li>${item}</li>`;
    });
    listItems += '</ul>';
    return listItems;
};
document.write(buildList([3, 'hello', 56, true, "Okten"]))

// task_9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    // {id: 4, name: 'olya', age: 28},
    // {id: 5, name: 'max', age: 30},
    // {id: 6, name: 'anya', age: 31},
    // {id: 7, name: 'oleg', age: 28},
    // {id: 8, name: 'andrey', age: 29},
    // {id: 9, name: 'masha', age: 30},
    // {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

const Users = (arr) => {
    for (const user of arr) {
        document.write(`
            <div>
                <p>id: ${user.id}</p>
                <p>name: ${user.name}</p>
                <p>age: ${user.age}</p>
            </div>
        `);
    }
}
Users(users);


// task_10 - створити функцію яка повертає найменьше число з масиву

const minNumber = (arrOfNums) => {
    let min = arrOfNums[0];
    for (let i = 1; i < arrOfNums.length; i++) {
        if (arrOfNums[i] < min) {
            min = arrOfNums[i];
            return min;
        }
    }
}

console.log('minNumber : ', minNumber([96, -165, 18, -45, -4, 4, -24, 11, 32]));

// task_11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arrOfNums) =>{
    let result = 0;
    for (let i = 0; i < arrOfNums.length; i++) {
        result += arrOfNums[i];
    }
    return result;
}
console.log('sum : ', sum([1, 2, 10]));

// task_12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {
    const numIndex1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = numIndex1;
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));


// task_13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sum, currencies, resultCurrency) =>{
    for (let cur of currencies) {
        if (cur.currency === resultCurrency) {
            return `${sum / cur.value} ${resultCurrency}`
        }
    }
    return 'Wrong currency!!!'
}

const currencies = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42},
    {currency: 'W', value: 2},
    {currency: 'DE', value: 6},
    {currency: 'SS', value: 25},
    {currency: 'RE', value: 13},
    {currency: 'PL', value: 8},
]
const result = exchange(10000, currencies, 'USD')
console.log('result : ', result)
