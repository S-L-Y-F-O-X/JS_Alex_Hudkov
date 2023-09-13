// task_1
// - створити блок
let newBlock = document.createElement("div");

// - додати йому класи wrap, collapse, alpha, beta
newBlock.classList.add("wrap", "collapse", "alpha", "beta");
newBlock.textContent = "Hello Okten";

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
newBlock.style.width = "40vw";
newBlock.style.height = "10vh"
newBlock.style.backgroundColor = "yellow";
newBlock.style.color = "blue";
newBlock.style.fontSize = "20px";
newBlock.style.margin = "50px";
newBlock.style.display = "flex";
newBlock.style.justifyContent = "center";

// - додати цей блок в body.
document.body.appendChild(newBlock);

// - клонувати його повністю, та додати клон в body.
let clonedBlock = newBlock.cloneNode(true);
document.body.appendChild(clonedBlock);


// task_2
//- Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let mas = ['Main', 'Products', 'About us', 'Contacts'];
let ulElement = document.createElement("ul");
for (let i = 0; i < mas.length; i++) {
    let liElement = document.createElement("li");
    liElement.textContent = mas[i];
    ulElement.appendChild(liElement);
}
document.body.appendChild(ulElement);

// task_3
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let containerDiv = document.createElement("div");

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let education = coursesAndDurationArray[i];

    let elementDiv = document.createElement("div");
    elementDiv.classList.add("education");

    let titleElement = document.createElement("p");
    titleElement.textContent = "Title: " + education.title;

    let durationElement = document.createElement("p");
    durationElement.textContent = "Duration: " + education.monthDuration + " months";

    elementDiv.append(titleElement, durationElement);
    containerDiv.appendChild(elementDiv);
}
document.body.appendChild(containerDiv);


// task_4
// - Є масив. За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.

// -----------------Цей масив повторюэться, але я на всяк випадок його залишив -------------
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let div = document.createElement('div');
    div.className = 'item';

    let h1 = document.createElement('h1');
    h1.className = 'heading';
    h1.textContent = coursesAndDurationArray[i].title;

    let p = document.createElement('p');
    p.className = 'description';
    p.textContent = coursesAndDurationArray[i].monthDuration;

    div.append(h1, p);

    document.body.appendChild(div);
}

// task_5
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

let divbySimpsons = document.createElement('div');
divbySimpsons.className = 'simpsons';

for (let i = 0; i < simpsons.length; i++) {
    let blockDiv = document.createElement('div');
    blockDiv.className = 'member';

    let name = document.createElement('h3');
    name.textContent = simpsons[i].name + " " + simpsons[i].surname;

    let age = document.createElement('p');
    age.textContent = "Age: " + simpsons[i].age + "years";

    let divInfoPhoto = document.createElement('div');
    divbySimpsons.className = 'divInfoPhoto';

    let info = document.createElement('p');
    info.textContent = simpsons[i].info;

    let photo = document.createElement('img');
    photo.src = simpsons[i].photo;

    blockDiv.append(name, age, divInfoPhoto);
    divInfoPhoto.append(info, photo);
    divbySimpsons.appendChild(blockDiv);

    divInfoPhoto.style.display = "flex";
    divInfoPhoto.style.width = "40vw";
    blockDiv.style.width = "40vw";
    name.style.width = "40vw";
    name.style.textAlign = "center";
}
document.body.appendChild(divbySimpsons);


// task_6
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


let mainBlock = document.createElement('div');
mainBlock.id = 'main';

for (let i = 0; i < coursesArray.length; i++) {
    let titleNameBlock = coursesArray[i];

    let courseBlock = document.createElement('div');
    courseBlock.className = 'Title_block';

    let titleBlock = document.createElement('div');
    titleBlock.textContent = "Title: " + titleNameBlock.title;

    let monthAndHourBlock = document.createElement('div');
    monthAndHourBlock.className = 'Month_and_hour';

    let monthDurationBlock = document.createElement('div');
    monthDurationBlock.textContent = "Month Duration: " + titleNameBlock.monthDuration;

    let hourDurationBlock = document.createElement('div');
    hourDurationBlock.textContent = "Hour Duration: " + titleNameBlock.hourDuration;

    let modulesBlock = document.createElement('div');
    let modulesList = document.createElement('ul');
    modulesBlock.textContent = "Modules: ";
    for (let j = 0; j < titleNameBlock.modules.length; j++) {
        let moduleLi = document.createElement('li');
        moduleLi.textContent = titleNameBlock.modules[j];
        modulesList.appendChild(moduleLi);
    }
    modulesBlock.appendChild(modulesList);
    courseBlock.append(titleBlock, monthAndHourBlock, modulesBlock);
    monthAndHourBlock.append(monthDurationBlock, hourDurationBlock)
    mainBlock.appendChild(courseBlock);

    monthAndHourBlock.style.display = "flex";
    monthDurationBlock.style.width = "30%";
    hourDurationBlock.style.width = "69%"
}
document.body.appendChild(mainBlock);

