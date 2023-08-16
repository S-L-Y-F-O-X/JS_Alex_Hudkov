// task_1

let h = 'hello';
let o = 'owu';
let co = 'com';
let u = 'ua';
let one = 1;
let ten = 10;
let nine = -999;
let ott = 123;
let pi = 3.14;
let e = 2.7;
let pud = 16;
let tr = true;
let fa = false;
console.log(h + o + co + u + one + ten + nine +ott + pi + e + pud + tr + fa)
console.log(h + o + co + u + [one + ten + nine +ott + pi + e + pud] + tr + fa)

// task_2

let firstName= 'Alexey';
let middleName='Volodimirovich';
let lastName='Hudkov';
let person= lastName + ' ' + firstName + ' ' + middleName;
console.log(person);

// task_3

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// ask_4

let first_name = prompt('Enter your first name');
console.log(first_name);
if (!!first_name){
    alert('Thank you' + ' ' + first_name)
}
if (!!!first_name){
    alert('I want to know your name!')
}

let middle_name = prompt('Enter your middle name');
console.log(middle_name);
if (!!middle_name){
    alert('Nice to meet you' + ' ' + first_name + ' ' + middle_name)
}
if (!!!middle_name){
    alert('I also do not think I need it.')
}

let age = prompt('Enter your age');
console.log(age);
if(!!!age){
    alert('I want to know your age')
}
if (age>1<18){
    alert('You are still young!')
}
if (age>18){
    alert('With such age already sell beer')
}