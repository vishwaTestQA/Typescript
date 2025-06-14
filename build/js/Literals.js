"use strict";
function button(props, ...args) {
    switch (props.type) {
        case 'submit':
            props.onClick();
            return "submit value is";
        case 'reset':
            const [a, b] = args; //destructuring
            const ret = props.onClick(a, b);
            return "reset value is" + ret;
        default:
            const _exhaustCheck = props;
            return _exhaustCheck;
    }
}
let ret1 = button({ type: 'submit', onClick: () => { console.log(3); } });
console.log(ret1);
let ret2 = button({ type: 'reset', onClick: (a, b) => a + b }, 10, 20);
console.log(ret2);
function button2(props, ...args) {
    if (props.type === 'submit') {
        return "submit is clicked";
    }
    else if (props.type === 'reset') {
        const [a, b] = args;
        const res = props.onClick(a, b);
        return "reset is clicked " + res;
    }
    else {
        throw Error('no other values');
    }
}
let ret3 = button2({ type: 'submit', onClick: () => { console.log(3); } });
console.log(ret3);
let ret4 = button2({ type: 'reset', onClick: (a, b) => a + b }, 20, 20);
console.log(ret4);
let ret5 = button2({ type: 'delete', onClick: (a, b) => a + b }, 20, 20);
console.log("result5  ", ret5);
