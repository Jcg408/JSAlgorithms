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

/* 6. Counting Holes - Given a number, count the number of holes.  Integers  1,2,3,5,7 have no holes;  
    integers  0, 4, 6, 9  have 1 hole; the integer 8 has 2 holes. */

    const numHoles = (num) => {
        let holes = 0;

        const numStr = num.toString();
        for (let i =0; i<numStr.length; i++) {
            if (numStr[i]=== '8') {
                holes +=2;
            }
            if(numStr[i]==='0'||numStr[i]==='4'||numStr[i]==='6'||numStr[i]==='9') {
                holes +=1;
            }
        }
        return holes;
    }
 /* 7. Time Conversion - Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM 
on a 12-hour clock, and 12:00:00 on a 24-hour clock.
Function Description:
Complete the timeConversion function in the editor below. It should return a new string representing the 
input time in 24 hour format. The function has the following parameter(s):   a string representing time in  hour format. */

const timeConvert = str => {
      let newStr = str.split(/\D/);
   
    if (str.startsWith('12') && str.endsWith('AM')) {
        newStr[0] = '00';
    } else if (!str.startsWith('12') && str.endsWith('PM')) {
        newStr[0] = parseInt(newStr[0]) + 12;
        newStr[0].toString();
    }
    return newStr.join(':').slice(0, 8);
};

/* 8. Your niece is turning 4 years old, and the cake will have  candles of height 4,3 1,4 , she will be 
able to blow out  2 candles successfully, since the tallest candles are of height 4 and there are 2  such candles.
Function Description:
Complete the function birthdayCakeCandles in the editor below. It must return an integer
 representing the number of candles she can blow out. The function has the following parameter(s):
 an array of integers representing candle heights*/

 const birthdayCandles = arr => {
    let candleCount = 0;
    let newArr = arr.sort((a, b) => b - a);
    newArr.filter(num => {
        if (num === newArr[0]) {
            candleCount += 1;
        }
    });
    candleCount;
};