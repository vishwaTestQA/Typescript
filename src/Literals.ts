type mathFun = (a:number, b:number) => number

type ButtonProps = 
{type: 'submit', onClick: ()=> void} | {type:'reset', onClick:mathFun}

function button (props: ButtonProps, ...args:any[]): string {
   switch(props.type){
    case 'submit':
        props.onClick()
        return "submit value is"
     case 'reset':
        const [a,b] = args as [number, number]  //destructuring
        const ret = props.onClick(a,b)
        return "reset value is"+ ret  
     default:
         const _exhaustCheck:never = props;
         return _exhaustCheck;      
   }
}

let ret1 = button({type:'submit', onClick: () => {console.log(3)}})
console.log(ret1)

let ret2 = button({type:'reset', onClick:(a,b)=> a+b}, 10,20)
console.log(ret2)

// let ret3 = button({type:'anything', onClick: () => {console.log(3)}})
// console.log(ret3)
type ButtonProps2 = 
{type: 'submit', onClick: ()=> void} | {type:'reset', onClick:mathFun} | {type: 'delete', onClick:mathFun}

function button2 (props: ButtonProps2, ...args:any[]): string {
  if(props.type === 'submit'){
    return "submit is clicked"
  }
  else if(props.type === 'reset'){
     const [a,b] = args as [number, number]
     const res = props.onClick(a,b)
     return "reset is clicked "+res
  }else{
    throw Error('no other values')
  }
}

let ret3 = button2({type:'submit', onClick: () => {console.log(3)}})
console.log(ret3)

let ret4 = button2({type:'reset', onClick:(a,b)=> a+b}, 20,20)
console.log(ret4)

let ret5 = button2({type:'delete', onClick:(a,b)=> a+b}, 20,20)
console.log("result5  ",ret5)


