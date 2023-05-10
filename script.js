// Написать функцию, которая принимает массив строк и возвращает новую строку, 
// состоящую из всех элементов этого массива, объединенных в одну строку, с использованием метода reduce().

// const getStr = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return acc = acc + " " + rec
//     }, "")
// }

// console.log(getStr(["hello", "world!", "get", "started"]));

// Написать функцию, которая принимает массив строк и возвращает количество символов во всех строках с использованием метода reduce().

// const getNum = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return acc = acc + rec.length
//     }, 0)
// }

// console.log(getNum(["hello", "world!", "get", "started"]));

// Написать функцию, которая принимает массив чисел и возвращает новый массив, состоящий только из элементов, 
// которые больше заданного значения, с использованием метода reduce(), (Без использования метода push()) 
// let num = 2
// const getArr = (arr) => {
// return arr.filter((el) => {
//     return el > num
// }).reduce((acc, rec) => {
//     return acc = [...acc, rec]
// }, [])

// }

// console.log(getArr([1, 2, 3, 4, 5]));