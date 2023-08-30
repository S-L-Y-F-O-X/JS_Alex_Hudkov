
// task_1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaRectangle(a, b) {
    return a * b;
}
// let num = areaRectangle(10, 20);
console.log(areaRectangle(10, 20));

// task_2 - створити функцію яка обчислює та повертає площу кола з радіусом r

let PI = 3.14;
function areaCircle(r) {
    return PI * r * r;
}
let areaCi = areaCircle(4);
console.log(areaCi);

// task_3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(h, r) {
    return 2 * PI * r * (h + r);
}
let areaCy = areaCylinder(2, 4);
console.log(areaCy);

// task_4 - створити функцію яка приймає масив та виводить кожен його елемент

function elements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
let array = [1, 2, 'text', true, 5];
elements(array);

// task_5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph.outerHTML;
}
    const text = 'Hello World';
    const paragraph = createParagraph(text);
    document.write(paragraph)

// task_6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createListWithSameText(text) {
    const ul = document.createElement('ul');
    let listItems = '';

    for (let i = 0; i < 3; i++) {
        const li = `<li>${text}</li>`;
        listItems += li;
    }

    ul.innerHTML = listItems;
    return ul;
}

const text_1 = 'Hello Okten';
const list_1 = createListWithSameText(text_1);
document.body.appendChild(list_1);


// task_7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createListWithTextAndCount(count, text) {
    const ul = document.createElement('ul');
    let listItems = '';

    for (let i = 0; i < count; i++) {
        const li = `<li>${text}</li>`;
        listItems += li;
    }

    ul.innerHTML = listItems;
    return ul;
}
const count = 5;
const text_2 = 'Hello Okten N';
const list_2 = createListWithTextAndCount(count, text_2);
document.body.appendChild(list_2);

// task_8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function buildList(arr) {
    const list = document.createElement('ul');

    for (let i = 0; i < arr.length; i++) {
        const item = document.createElement('li');
        item.textContent = arr[i];
        list.appendChild(item);
    }

    return list;
}
const aarr = [1, 'Hello', true, 'World', false];

const list = buildList(aarr);
document.body.appendChild(list);


// task_9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function displayObjects(objects) {
    const container = document.querySelector('body');
    let blocks = '';

    for (let i = 0; i < objects.length; i++) {
        const object = objects[i];

        const block = `<div class="object-block">
                     <p>ID: ${object.id}</p>
                     <p>Name: ${object.name}</p>
                     <p>Age: ${object.age}</p>
                   </div>`;

        blocks += block;
    }

    container.innerHTML += blocks;
}
const objects = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    // {id: 3, name: 'kolya', age: 29},
    // {id: 4, name: 'olya', age: 28},
    // {id: 5, name: 'max', age: 30},
    // {id: 6, name: 'anya', age: 31},
    // {id: 7, name: 'oleg', age: 28},
    // {id: 8, name: 'andrey', age: 29},
    // {id: 9, name: 'masha', age: 30},
    // {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];
displayObjects(objects);

// task_10 - створити функцію яка повертає найменьше число з масиву

function findMin(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
let ar = [5, 32, 2, 15, 6];
let minValue = findMin(ar);
console.log(minValue);

// task_11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let arrr = [1, 2, 10];

let totalSum = sum(arrr);
console.log(totalSum);

// task_12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
let arr = [11, 22, 33, 44];
let index1 = 0;
let index2 = 3;

let swappedArr = swap(arr, index1, index2);
console.log(swappedArr);

// task_13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchangedAmount = 0;

    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchangedAmount = sumUAH / currencyValues[i].value;
            break;
        }
    }
    return exchangedAmount;
}
let sumUAH = 10000;
let currencyValues = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];
let exchangeCurrency = 'USD';

let exchangedAmount = exchange(sumUAH, currencyValues, exchangeCurrency);
console.log(exchangedAmount);




