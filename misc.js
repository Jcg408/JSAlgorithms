/*1. Time Convert - take the num parameter  being passed and return 
the number of hours and minutes the parameter converts to (ie. if num = 63 
then the output should be 1:3). Separate the number of hours and minutes with a colon.
Examples
Input: 126
Output: 2:6 */

const convert = num => {
    let hr;
    let min;
    if (num < 60) {
        hr = 0;
        min = num;
    } else if (num >= 60) {
        hr = Math.floor(num / 60);
        if (num % 60 < 10) {
            min = '0' + (num % 60);
        } else {
            min = num % 60;
        }
    }
    return hr + ':' + min;
};

/* 2. Matching Socks - Hackerrank. Given an array of numbers, each number 
representing a color, find how many matching pairs in the array */

const socks = arr => {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        let sock = arr[i];
        if (count[sock]) {
            count[sock]++;
        } else {
            count[sock] = 1;
        }
    }
    let pairs = 0;
    for (let num in count) {
        if (count[num] > 1) {
            pairs += Math.floor(count[num] / 2);
        }
    }
    return pairs;
};

/* 3. Counting Valleys - Hackerrank. Given a string representing the path taken - 'U' is 1 unit up, 
'D' is 1 unit down. Mountain is above sea level, valley is below sea level. Return the number of valleys traversed.
Path starts and ends at sea level. */

const valleys = str => {
    let path = 0;
    let valley = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'U') {
            path++;
        }
        if (str[i] === 'D') {
            path--;
            if (path === -1) {
                valley++;
            }
        }
    }
    return valley;
};

function inverseBinaryComplement(num) {
    let binary = parseInt(num).toString(2);
    let complement = '';
    for (let i in binary) {
        complement = complement + (binary[i] === '1' ? 0 : 1);
    }
    return parseInt(complement, 2);
}

function isBalanced(s) {
    const arr = s.split('');
    const opening = ['[', '{', '('];
    const closing = [']', '}', ')'];
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (opening.includes(element)) {
            stack.push(element);
        } else if (closing.includes(element)) {
            if (
                closing.indexOf(element) ===
                opening.indexOf(stack[stack.length - 1])
            ) {
                stack.pop();
            } else {
                return 'NO';
            }
        }
    }
    if (stack.length) {
        return 'NO';
    }
    return 'YES';
}

/* Given an amount and an array of coin denomination, find the least amount of coins equaling amount. If the amount can not 
    be distributed evenly or there are coins leftover, return -1 */
const minCoins = (amount, money) => {
    // edge - make sure there is an amount and an array that is not empty or nil.
    if (amount > 0 && money.length) {
        //set an object to hold number of money used
        const change = {};
        //set variable to return number of money(coins) used
        let minCoins = 0;
        // reverse and map through array of coins
        money.reverse().map(coin => {
            change[coin] = Math.floor(amount / coin);
            amount -= coin * change[coin];
            if (change[coin] > 0 && amount == 0) {
                minCoins += change[coin];
            }
        });
        // return -1 if final amount is not 0;
        if (amount > 0) {
            console.log(-1);
        }
        console.log(minCoins);
    }
};
