// In TypeScript, an index signature allows you to define the shape of an object 
// when you don’t know all the property names ahead of time, but you do know the type of the keys and values.

//  Purpose of Index Signatures
// To describe objects with dynamic property names of a consistent type.


interface Transactions{
    books: number;
    pizza: number;
    toys:number;
}

const todaysTransaction: Transactions = {
    books: 10,
    toys: 100,
    pizza: -10
}

console.log(todaysTransaction.pizza)
console.log(todaysTransaction['pizza'])     // both will work

//issue with dynamic calling 
let prop: string = 'pizza'

// console.log(todaysTransaction[prop]);  //err: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Transactions'.

let prop2: "pizza" = 'pizza'
 console.log("Accessing" +todaysTransaction[prop2]);  //this works only for the literal types


 // issue in iterating the obj properties using loop
//  function iterateTransactions(transactionObj: Transactions): number{
//     let total = 0;
//     for(const trans in transactionObj){
//         total += transactionObj[trans];     //here error like above, so we cannot iterate over the properties as here shows error
//     }
//     return total
//  }

 //iterateTransactions(todaysTransaction)

interface Transactions2{ 
   readonly [index: string] : number     // here the key is string and value is number but we can use union type as well number | boolean
    // books: number;
    // pizza: number;
    // toys:number;
}

const todaysTransaction2: Transactions2 = {
    pizza: 100,
    books: 200,
    toys:300
}

 function iterateTransactions(transactionObj: Transactions2): number{
    let total = 0;
    for(const trans in transactionObj){
        total += transactionObj[trans];     // here it works 
    }
    return total
 }

 console.log(iterateTransactions(todaysTransaction2))

//  todaysTransaction2.misc = 10; // if the interface is readonly then we cant push anything after initialization


//snother issue with ts is
todaysTransaction2['hi']    //here hi is not present in the obj



//interface
 interface Transaction3 {
    readonly [index:string] : number
    pizza: number,
    toys: number       //here the interface has 2 properties which is mandatory
 }


 const todaysTransaction3: Transaction3 = {
    pizza: 10,
    toys:10,

    laptop:10   //  its additionaly defined props   
 }

//  todaysTransaction3.pc = 10   //it wont allow because interface says it cannt modify/add a prop

interface Student{
    [key: string]: number | string | number[] | undefined    //here undefined is provided since we use class as optional
    GPA: number,
    name:string,
    class?: number[]
}

const student: Student = {
    name: 'tom',
    GPA: 8.5,
    class: [100, 200]
}

console.log(student['test'])  // here its undefined no issues because we provided undefined as value, its ts issue it wont complaint

function iterateStudent(studentobj: Student): void{
   for(const studKey in studentobj){
    console.log(`${studKey} is ${studentobj[studKey]} `)   //here no issu because we provided index signature in interface so dynamically ts will
   }
}


interface Student2{
   // no index signature
    GPA: number,
    name:string,
    class?: number[]
}

const student2: Student2 = {
    name: 'tom',
    GPA: 8.5,
    class: [100, 200]
}


function iterateStudent2(studentobj2: Student2): void{
   for(const studKey2 in studentobj2){
    console.log(`${studKey2} is ${studentobj2[studKey2 as keyof Student2]} `)  
    // here the interface doesnt have index signature hence the object cannot be iterated dynamically as the passed studkey is of type string 
    // and the keys in the interface is different as per ts, so here we asserting that the keys will be typeof the interface keys
   }
}

//keyOf will create union type of the object keys and allows us to loop through the object

iterateStudent2(student2);

Object.keys(student2).map(key => {
    // console.log(student2[key  as keyof Student2])  //when we know the name of the interface that is used by the object to loop over
    console.log(student2[key as keyof typeof student2])   // when we dont know about the interface type that the object uses
})



//Record types

type Streams = 'salary' | 'bonus' | 'misc'

type Incomes = Record<Streams, number|string>

const incomeObj: Incomes = {
    salary: 1000,
    bonus:100,
    misc:200
}

for(const revenue in incomeObj){
    console.log(incomeObj[revenue as keyof Incomes])  //here we dont use interface and index signature in it,  
    // though keysof not required when literal types is used to access the property dynamically, here to loop over 
}






