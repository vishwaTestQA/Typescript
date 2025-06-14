class Basic{
    name!: string       // act as public so we can access outside
    public getName(){      // here no constructor required, ts wont complain
        return "name"
    }
}

const basic = new Basic()
console.log(basic.getName())
basic.name = "tom"
console.log(basic.name)

class Coder{
    public name: string
    // age: number

    laterUsed!: string

    constructor(name:string, 
                public readonly music: string,
                private age: number,
                protected language: string = 'Typescript'  
            ){
        this.name = name
        // this.age = age
        // this.music = music
    }

    public getData(){
        return `Hellow ${this.name} of ${this.age} and your lang is ${this.language}`
    }
}

const coder1 = new Coder('Tom', 'Rock', 30)
coder1.name = 'Mr Tom'
// coder1.music = 'gana';
const coder2 = new Coder('Jerry', 'Gana', 29)

interface developer{
   name: string
   tech: string
   readonly exp: number
   getData: () => string
}

class WebDev implements developer{
   constructor(public tech:string, public exp: number){}

   public get name(){
    return this.name
   }

 public set name(name:string){
    this.name = name
 }

 public getData(){
    return `Hi ${this.name} of exp ${this.exp} in ${this.tech}`
 }
}

class Base{
    readonly name:string
    constructor( name:    string){
        this.name = name 
    }
}

const base = new Base('tom')
// base.name = 'chellapa'

class BaseStatic{
    static count = 0;
    id: number;
    
    constructor(public name:string, public age:number){
      this.id = ++BaseStatic.count;
    }

   public getName(){
    return this.name
   }

   public getId(){
    return this.id
   }

   public getCount(){      //instance method
    return BaseStatic.count   //returning static memebr
   }

   public static getData(){
    return this.some;
   }
}

const baseStat = new BaseStatic('tom',30)
console.log(baseStat.getId())

const baseStat2 = new BaseStatic('jerry',30)
console.log(baseStat2.getId())

const baseStat3 = new BaseStatic('doggy',30)
console.log(baseStat3.getId())

console.log("total", baseStat3.getCount())

console.log(BaseStatic.getData())

