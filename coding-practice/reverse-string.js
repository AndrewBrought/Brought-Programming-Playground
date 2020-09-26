
const reverse = str => {

    let stack = [];

    for(let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    let reverseStr = '';

    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
        return reverseStr;
}

let test = "...tekcop sih ni notgnihsaW tog eh ,gnihctaw lla erew ew elihW";
let test2 = "21 - 11 ...01 ,9 ,8 ,7 ,6 ...5 ,4 ,3 ,2 ,1";

console.log(reverse(test));
console.log(reverse(test2));