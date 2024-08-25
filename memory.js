/* so if we use primitive datatype such as number string boolean etc
we will store value in stack
if we use non primitive such as object function or array we will store in heap 
now the difference is that when we use stack a copy is made and when heap is used refrence is used
*/

let c = 2
let a = c
a =3
console.log(a,c)
/* so in a=c, c is a copy of original 
that is why when we change a c does not change
*/
let us = {
    Name:'Devansh',
    ID:'21BCS7337'
}
console.log(us)
let us1 =us;
us1.Name='Shiv'

console.log(us)
console.log(us1)
//here as a refrence of us is passed when us1=us so if we change us1 us also changes