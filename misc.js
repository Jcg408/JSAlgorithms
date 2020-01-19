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

// 2. Inverse Binary Complement
const inverseBinary = num => {
    let binary = parseInt(num).toString(2);
    let complement = '';
    for (let i in binary) {
        complement = complement + (binary[i] === '1' ? 0 : 1);
    }
    return parseInt(complement, 2);
};

// 3. Given a string of parenthesis, brackets, braces  such as ‘{}()[]’  Yes or No if every opening  matches its closing partner.
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

/* 4. Given an amount and an array of coin denomination, find the least amount of coins equaling amount. If the amount can not 
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

/* Given a number, return the reverse number. Positive number should reverse to positive, negative reverse to negative. 
    If number ends in zero, remove zero from lead in reverse. */

const revInteger = num => {
    let numString = num
        .toString()
        .split('')
        .reverse()
        .join('');
    return parseInt(numString) * Math.sign(num); //convert to integer - make sure the integer retains sign of input
};

/* Codility challenge - Ropes
There are N ropes numbered from 0 to N − 1, whose lengths are given in an array A, lying on the floor in a line. For each I (0 ≤ I < N), the length of rope I on the line is A[I].
We say that two ropes I and I + 1 are adjacent. Two adjacent ropes can be tied together with a knot, and the length of the tied rope is the sum of lengths of both ropes. The resulting new rope can then be tied again.
For a given integer K, the goal is to tie the ropes in such a way that the number of ropes whose length is greater than or equal to K is maximal.
For example, consider K = 4 and array A such that:
    A[0] = 1
    A[1] = 2
    A[2] = 3
    A[3] = 4
    A[4] = 1
    A[5] = 1
    A[6] = 3

We can tie:
rope 1 with rope 2 to produce a rope of length A[1] + A[2] = 5;
rope 4 with rope 5 with rope 6 to produce a rope of length A[4] + A[5] + A[6] = 5.
After that, there will be three ropes whose lengths are greater than or equal to K = 4. It is not possible to produce four such ropes.
*/
const ropes = (arr, num) => {
    let length = null;
    let count = 0;

    for (let rope of arr) {
        length += rope;
        if (length >= num) {
            count++;
            length = 0;
        }
    }
    return count;
};
