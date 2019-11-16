/*1. Time Convert - take the num parameter  being passed and return 
the number of hours and minutes the parameter converts to (ie. if num = 63 
then the output should be 1:3). Separate the number of hours and minutes with a colon.
Examples
Input: 126
Output: 2:6 */

const convert = (num) => {
    let hr
    let min;
    if (num < 60) {
        hr = 0;
        min = num;
    }
    else if (num >= 60) {
        hr = Math.floor(num / 60)
        if (num % 60 < 10) {
            min = '0' + (num % 60);
        }
        else {
            min = num % 60
        }
    }
    return (hr + ':' + min)
}

/* 2. Matching Socks - Hackerrank. Given an array of numbers, each number 
representing a color, find how many matching pairs in the array */

const socks = (arr) => {
    let count = {};
    for (let i = 0; i<arr.length; i++) {
        let sock = arr[i];
        if (count[sock]) {
            count[sock]++;
        } else {
            count[sock]=1;
        }
    }
    let pairs = 0;
    for (let num in count) {
        if(count[num] > 1){
             pairs += Math.floor(count[num]/2);
        }
    }
    return pairs
}

/* 3. Counting Valleys - Hackerrank. Given a string representing the path taken - 'U' is 1 unit up, 
'D' is 1 unit down. Mountain is above sea level, valley is below sea level. Return the number of valleys traversed.
Path starts and ends at sea level. */

 const valleys = (str)=> {
     let path = 0;
     let valley = 0;
     for (let i = 0; i < str.length; i++) {
         if(str[i]==='U') {
             path ++
         }
         if(str[i]==='D') {
             path --
             if(path=== -1) {
                 valley ++
             }
         }
     }
     return valley
 }

 function inverseBinaryComplement(num){ 
   let binary = parseInt(num).toString(2); 
   let complement = ""; 
   for (let i in binary)  {
     complement = complement + ((binary[i] === "1") ? 0 : 1);
   } 
   return parseInt(complement, 2);
}


function isBalanced(s) {
    const arr = s.split("")
    const opening = ['[', '{', '(']
    const closing = [']', '}', ')']
    const stack = []
    for(let i=0; i< arr.length; i++) {
        const element = arr[i]
        if (opening.includes(element)) {
            stack.push(element)
        }
        else if (closing.includes(element)) {
            if (closing.indexOf(element) === opening.indexOf(stack[stack.length - 1])) {
                stack.pop()
            }
            else {
                return 'NO'
            }
        }
    }
    if (stack.length) {
        return 'NO'
    }
    return 'YES'
}

console.log(isBalanced('{}[]()'))
console.log(isBalanced('{[}]}'))