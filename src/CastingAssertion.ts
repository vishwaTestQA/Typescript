// 10 as string

let unknow1 = (10 as unknown) as string

console.log(typeof unknow1)

let num1: number = ('a' as unknown) as number

console.log(typeof  num1)

const img1 = document.querySelector('#img');

const img2 = document.getElementById('img') as HTMLImageElement

const img3 = document.getElementsByClassName('.cls')

const img4 = document.getElementsByTagName('.cls')

const img5 = document.getElementsByName('.cls')

img2.src