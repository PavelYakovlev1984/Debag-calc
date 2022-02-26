// const people = [
//     {id: 1, name: 'Vladilen', age: 20},
//     {id: 2, name: 'Elena', age: 40},
//     {id: 3, name: 'Igor', age: 10},
//     {id: 4, name: 'Vasilisa', age: 40}
// ]
//
// console.table(people)


console.time('timer')
const items = []

for (let i =0; i < 1000000; i++) {
    items.push({el: i + 1})
}
console.timeEnd('timer')

