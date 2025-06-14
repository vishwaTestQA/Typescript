"use strict";
class Basic {
    getName() {
        return "name";
    }
}
const basic = new Basic();
console.log(basic.getName());
basic.name = "tom";
console.log(basic.name);
class Coder {
    constructor(name, music, age, language = 'Typescript') {
        this.music = music;
        this.age = age;
        this.language = language;
        this.name = name;
        // this.age = age
        // this.music = music
    }
    getData() {
        return `Hellow ${this.name} of ${this.age} and your lang is ${this.language}`;
    }
}
const coder1 = new Coder('Tom', 'Rock', 30);
coder1.name = 'Mr Tom';
// coder1.music = 'gana';
const coder2 = new Coder('Jerry', 'Gana', 29);
class WebDev {
    constructor(tech, exp) {
        this.tech = tech;
        this.exp = exp;
    }
    get name() {
        return this.name;
    }
    set name(name) {
        this.name = name;
    }
    getData() {
        return `Hi ${this.name} of exp ${this.exp} in ${this.tech}`;
    }
}
class Base {
    constructor(name) {
        this.name = name;
    }
}
const base = new Base('tom');
// base.name = 'chellapa'
class BaseStatic {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = ++BaseStatic.count;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getCount() {
        return BaseStatic.count; //returning static memebr
    }
    static getData() {
        return this.some;
    }
}
BaseStatic.count = 0;
const baseStat = new BaseStatic('tom', 30);
console.log(baseStat.getId());
const baseStat2 = new BaseStatic('jerry', 30);
console.log(baseStat2.getId());
const baseStat3 = new BaseStatic('doggy', 30);
console.log(baseStat3.getId());
console.log("total", baseStat3.getCount());
console.log(BaseStatic.getData());
