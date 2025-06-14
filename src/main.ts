let obj1 = ['viswa', 8, true]

obj1.push(10)
obj1.push(11)
obj1.push('vishwa')

console.log(obj1)

let tuplesObj: [string, number, boolean] = ['vishwa', 5, false]

// let newObj: [string, number, boolean] = ["tom",6,true]
// tuplesObj.push(newObj)

console.log(tuplesObj)
// tuplesObj[3] = 'main'

console.log(tuplesObj)

// let tuple2:[string, number, boolean] = []
let tuple3:[string, number, boolean];

// tuple3 = ['vis', 4, false, 'ss', 8, false]
// tuple3[0] = 'main';

// tuple3 = []
type point = [number, number]

function distance([x,y]: point): number{
   return Math.sqrt(x* x+y * y)
}

console.log(distance([1,2]))

type val = string | number

let varia : val;

varia = 1;
varia ='string'
varia= false

type objType = {
    name: string,
    id: number,
}

// interface objType {
//     name: string,
//     id: number,
// }

let obj: objType = {
    name: "vishwa",
    id: 8,
}

obj.addres =  "10/1"




