// task_1_1 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write("<div>Блок з довільним текстом " + "</div>");
}


document.write("--------------------------------------------------");
// task_1_2 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write("<div>Знову блок тільки з індексом " + (i + 1) + "</div>");
}

document.write("--------------------------------------------------");
// task_1_3 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let header = 0;
while (header < 20) {
    document.write("<h1> Теж саме що блок тільки тепер заголовок " + "</h1>");
    header++;
}

document.write("--------------------------------------------------");

// task_1_4 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let header_num = 0;
while (header_num < 20) {
    document.write("<h1> А це заголовок з індексом " + (header_num + 1) + "</h1>");
    header_num++;
}

document.write("--------------------------------------------------");

// task_2 - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write("<ul>");

for (let i = 0; i < listOfItems.length; i++) {
    document.write("<li>" + listOfItems[i] + "</li>");
}

document.write("</ul>");


document.write("--------------------------------------------------");

// task_3 -Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону.

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let i = 0; i < products.length; i++) {
    document.write(`
    <div class="product-card">
      <h3 class="product-title">${products[i].title}. Price - ${products[i].price}</h3>
      <img src="${products[i].image}" alt="" class="product-image">
    </div>
  `);
}

// task_4 -  за допомоги циклу вивести:....



let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


document.write("<h3>Користувачі зі статусом true:</h3>");
for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        document.write("<p>" + users[i].name + "</p>");
    }
}
// Або як з лекції використовуючи forof
// for (let user of users) {
//     if (user.status) {
//         document.write(`<p>${user.name}</p>`);
//     }
// }

// ------------------------------------------------------------------
document.write("<h3>Користувачі зі статусом false:</h3>");
for (let i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        document.write("<p>" + users[i].name + "</p>");
    }
}
// Або як з лекції використовуючи forof
// for (let user of users) {
//     if (!user.status) {
//         document.write(`<p>${user.name}</p>`);
//     }
// }

// ------------------------------------------------------------------
document.write("<h3>Користувачі, які старші за 30 років:</h3>");
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        document.write("<p>" + users[i].name + "</p>");
    }
}

// Або як з лекції використовуючи forof
// for (let user of users) {
//     if (user.age > 30) {
//         document.write(`<p>${user.name}</p>`);
//     }
// }
