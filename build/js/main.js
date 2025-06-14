"use strict";
let obj1 = ['viswa', 8, true];
obj1.push(10);
obj1.push(11);
obj1.push('vishwa');
console.log(obj1);
let tuplesObj = ['vishwa', 5, false];
// let newObj: [string, number, boolean] = ["tom",6,true]
// tuplesObj.push(newObj)
console.log(tuplesObj);
// tuplesObj[3] = 'main'
console.log(tuplesObj);
// let tuple2:[string, number, boolean] = []
let tuple3;
function distance([x, y]) {
    return Math.sqrt(x * x + y * y);
}
console.log(distance([1, 2]));
let varia;
varia = 1;
varia = 'string';
varia = false;
// interface objType {
//     name: string,
//     id: number,
// }
let obj = {
    name: "vishwa",
    id: 8,
};
obj.addres = "10/1";
