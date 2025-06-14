function logMsg (num:number): void {
    console.log(num)
}

let addFunction = (a:number, b:number) => {
    return a+b
}

let res = addFunction(1,2)

logMsg(res)

let subtract = function sub(a:number, b:number){
    return a-b;
}

logMsg(subtract(5,2))
// logMsg(sub(6,2))    wont work

type mathFunc = (a: number, b:number) => number

let multiply: mathFunc = (a,b) => a*b

interface mathFunc2 {
    (a:number, b:number) : number
}

let divide: mathFunc2  = (a,b) => {
    return a/b
}

logMsg(multiply(2,4))
logMsg(divide(5,2))


