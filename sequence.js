//JavaScript Algorithm Samples - working with numbers and sequences.

/* 1. FizzBuzz - Given a number as input, console.log from 0 up to number. If number divisible by 3 - console.log() 'fizz', divisible by 5 - console.log 'buzz',
divisible by both 3 & 5 - console.log() 'fizzbuzz'.
    a. Use loop to set up sequence.
    b. Use conditional statement with modulo to determin which number is divisible
    c. If conditions not met console.log() number. */

const fizzBuzz = (num) => {
    for (let i = 0; i <= num; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if (i % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
}

/* 2. Factorial - given number as input, factorial is the multiplication of integers
in sequence starting with target number to 1. Example - input is 5 so sequence is 5 x 4 x 3 x 2 x 1 = 120.
    a. set limit for iteration to prevent endless loop.
    b. use recursion - call on function itself to countdown to 1. */


const factorial = (num) => {
    if (num ===0) {
        return 1;
    }
        return num * (factorial(num -1));
    }

    
/* 2a. Factorial using while loop instead of recursion */
const factor = (num) => {
    let n = num;
    if (num === 0 || num === 1) {
        return 1;
    }
    while (num > 1) {
        num--;
        n = n * num;
    }
    return n;
}


/* 3. Fibonacci - Find the number at a given index in the sequence using Fibonacci's number sequence.
 the number is the sum of the two precedent numbers in sequence. 0, 1, 1, 2, 3, 5, 8, 13, 21.....
    a. create variable with initial values
    b. loop through sequence and reset variables
    c. return result */

    const fibonacci = (index) => {
        let a = 0;
        let b = 1;
        let c = 1;

        for(let i = 2; i <= index; i++) {
            c = a + b;
            a = b;
            b = c;

        }
        console.log(c)
    }
    fibonacci(7);
