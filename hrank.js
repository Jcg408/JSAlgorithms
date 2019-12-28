// Hackerrank challenges and algorithms

/* 1. Hackerrank diagonal difference challenge. Given a square matrix of integers with equal number of rows/columns, calculate the sum
    of the left and right diagonals and return the absolute difference */

const diagonal = arr => {
    const root = arr[0].length; //the length of the first row which is the same for all rows.
    let left = 0; //left diagonal
    let right = 0; // right diagonal

    //loop through both diagonals , i for left, j for right
    for (let i = 0, j = root - 1; i < root; i++, j--) {
        left += arr[i][i];
        right += arr[i][j];
    }

    //calculate diff and return as absolute value
    let result = left - right;
    return Math.abs(result);
};

/* 2. Hackerrank plus minus challenge. Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros.
     Print the decimal value of each fraction on a new line. */
const plusMinus = arr => {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negative++;
        } else if (arr[i] > 0) {
            positive++;
        } else {
            zero++;
        }
    }
    console.log(positive / arr.length);
    console.log(negative / arr.length);
    console.log(zero / arr.length);
};

/* 3. Hackerrank Staircase - Given a number,  print a right aligned staircase. Base and height are both equal = number, and the image is drawn using # symbols and spaces. 
The last line is not preceded by any spaces. */

const staircase = num => {
    let stairs = '';
    for (let i = 0; i <= num; i++) {
        stairs += ' '.repeat(num - i) + '#'.repeat(i) + '\n';
    }
    return stairs;
};

/* 4. Counting Valleys - Hackerrank. Given a string representing the path taken - 'U' is 1 unit up, 
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
/* 5. Matching Socks - Hackerrank. Given an array of numbers, each number 
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
