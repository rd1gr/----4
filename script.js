// Задание 1
// Необходимо с помощью цикла for вывести 
// следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// let size = 10

// for (let index = 0; index < size; index++) {
//     if (index === 0) {
//         console.log(`${index} - это ноль`);
//     } else if (index % 2 === 0){
//         console.log(`${index} - это чётное число`);
//     } else {
//         console.log(`${index} - нечётное число`);
//     }
// }


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий 
// [1, 2, 3, 6, 7]

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 2);
// console.log(arr);


// Задание 3
// Используя Math.random() вам необходимо 
// генерировать цифры от 0 до 9, и создать 
// массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3


const arr = []
let size = 5; 
for (let index = 0; index < size; index++) {
    let num = Math.floor((Math.random() * 9));
    arr[index] = num;
}
console.log(arr);


let sum = 0; 
for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
}
console.log(`${sum} сумма чисел `);


let minNum = arr[0]; 
for (let index = 0; index < arr.length; index++) {
    if (arr[index] < minNum) {
        minNum = arr[index];
    }
}
console.log(`${minNum} наименьшее число`);


for (let index = 0; index < arr.length; index++) {
    if (arr[index] === 3){
        console.log(`число 3 есть в массиве`);
    }
}
