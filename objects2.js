// const user1 = new Object() //singleton object
// const user1 = {
//     id: 123,

// }
// user1.id = 1234
// user1.name = "devansh"
// user1.gmail = "devansh@gmail.com"

// console.log(user1);

const obj1 ={1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = obj1 +obj2 //wrong way
// console.log(obj3);
const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {...obj1,...obj2} // when assign is used without {} then obj1 which is written first is also overwritten and will provide the value of obj3
// spread operator does not do this mistake mostly spread operator is used spread operator is ...
console.log(obj3);

console.log(Object.keys(obj1));
console.log(obj1.hasOwnProperty('4'));



