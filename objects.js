//singleton only from constructor not from literals
//singleton is basically an unique object 
//Object.create
// object literals
//symbol declaration
const mysym = Symbol("key1")
const mysym1 = Symbol("key2")
const jsuser = {
    name: "Hitesh",
    "bawa ":"yes",
    mysym:"my key1",
    [mysym1]:"my key2",
    age: "22",
    location: "himachal",
    isloggedin: true,
    email: "devansh3075@gmail.com"
};

// console.log(jsuser.email)// not correct way but can be done
// console.log(jsuser["email"])// correct way why? answer

//basically the key values like name age location isloggedin in above context are stored as strings
//so if we store a string as key then we willl not be able to acces the object.key thing example

//console.log(jsuser.bawa )not correct way but can be done if spaced in between
// console.log(jsuser["bawa "]
// console.log(typeof jsuser.mysym);
// console.log(jsuser[mysym1]);

// jsuser.email = "devansh@5231gmail.com";
// Object.freeze(jsuser)
// jsuser.email = "devansh@gmail.com";
// console.log(jsuser);// when i call this you will understand why the 
// symbole is different although typeof will not show diff in mysym and (msym1 will show undefined)
//but when we console.log whole object it will show what is symbol and what is not

// jsuser.greeting = function(){
//     console.log("hello devansh");
// }

// console.log(jsuser.greeting)
// jsuser.greeting();
//just greeting syntax
