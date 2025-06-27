"use strict";
// In TypeScript, an index signature allows you to define the shape of an object 
// when you don’t know all the property names ahead of time, but you do know the type of the keys and values.
const todaysTransaction = {
    books: 10,
    toys: 100,
    pizza: -10
};
console.log(todaysTransaction.pizza);
console.log(todaysTransaction['pizza']); // both will work
//issue with dynamic calling 
let prop = 'pizza';
// console.log(todaysTransaction[prop]);  //err: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Transactions'.
let prop2 = 'pizza';
console.log("Accessing" + todaysTransaction[prop2]); //this works only for the literal types
const todaysTransaction2 = {
    pizza: 100,
    books: 200,
    toys: 300
};
function iterateTransactions(transactionObj) {
    let total = 0;
    for (const trans in transactionObj) {
        total += transactionObj[trans]; // here it works 
    }
    return total;
}
console.log(iterateTransactions(todaysTransaction2));
//  todaysTransaction2.misc = 10; // if the interface is readonly then we cant push anything after initialization
//snother issue with ts is
todaysTransaction2['hi']; //here hi is not present in the obj
const todaysTransaction3 = {
    pizza: 10,
    toys: 10,
    laptop: 10 //  its additionaly defined props   
};
const student = {
    name: 'tom',
    GPA: 8.5,
    class: [100, 200]
};
console.log(student['test']); // here its undefined no issues because we provided undefined as value, its ts issue it wont complaint
function iterateStudent(studentobj) {
    for (const studKey in studentobj) {
        console.log(`${studKey} is ${studentobj[studKey]} `); //here no issu because we provided index signature in interface so dynamically ts will
    }
}
const student2 = {
    name: 'tom',
    GPA: 8.5,
    class: [100, 200]
};
function iterateStudent2(studentobj2) {
    for (const studKey2 in studentobj2) {
        console.log(`${studKey2} is ${studentobj2[studKey2]} `);
        // here the interface doesnt have index signature hence the object cannot be iterated dynamically as the passed studkey is of type string 
        // and the keys in the interface is different as per ts, so here we asserting that the keys will be typeof the interface keys
    }
}
//keyOf will create union type of the object keys and allows us to loop through the object
iterateStudent2(student2);
Object.keys(student2).map(key => {
    // console.log(student2[key  as keyof Student2])  //when we know the name of the interface that is used by the object to loop over
    console.log(student2[key]); // when we dont know about the interface type that the object uses
});
const incomeObj = {
    salary: 1000,
    bonus: 100,
    misc: 200
};
for (const revenue in incomeObj) {
    console.log(incomeObj[revenue]); //here we dont use interface and index signature in it,  
    // though keysof not required when literal types is used to access the property dynamically, here to loop over 
}
