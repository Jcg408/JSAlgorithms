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

/* 9. Jumping clouds - Emma is playing a new mobile game that starts with consecutively numbered clouds.
Some of the clouds are thunderheads and others are cumulus.She can jump on any cumulus cloud having a number that is equal 
to the number of the current cloud plus  or.She must avoid the thunderheads.
Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud.
It is always possible to win the game.
 
For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided.For example, indexed from.
The number on each cloud is its index in the list so she must avoid the clouds at indexes  and.
She could follow the following two paths: or.The first path takes jumps while the second takes.*/

const jumpClouds = (arr)=> {
    let jumps = []

    let i = 0;
    while (i < arr.length) {
        let next = arr[i + 1];
        let third = arr[i + 2];

        if (third === 0) {
            jumps.push(i + 2);
            i = i + 2;
        } else if (next === 0) {
            jumps.push(i + 1)
            i = i + 1;
        } else {
            i += 1;
        }
    }
    return jumps.length;
}

/* 10. HackerLand University has the following grading policy:
Every student receives a  in the inclusive range 0 from  to 100 . Any  less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:
If the difference between the  grade and the next multiple of  5 is less than 3 , round  up to the next multiple of 5 .
If the value of  grade is less than 38 , no rounding occurs as the result will still be a failing grade.
For example, 84 will be rounded to  85 but  29 will not be rounded because the rounding would result in a number that is less than .
Given the initial value of  for each of Sam's  students, write code to automate the rounding process.
Function Description
Complete the function grading. It should return an integer array consisting of rounded grades.
grades: an array of integers representing grades before rounding*/

const grading = arr => {
    let newGrades = [];
    arr.forEach(element => {
        if (element >= 0 && element <= 100) {
            if ((element + 1) % 5 === 0 && element >= 38) {
                newGrades.push(element + 1);
            } else if ((element + 2) % 5 === 0 && element >= 38) {
                newGrades.push(element + 2);
            } else {
                newGrades.push(element);
            }
        }
    });
   return newGrades;
};

/* 11. print the number of apples and oranges that land on Sam's house, each on a separate line.

countApplesAndOranges has the following parameter(s):

s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.*/

const  countApplesAndOrange = (s, t, a, b, apples, oranges) => {
    let inRange = []
    let appleCount = 0;
    let orangeCount = 0;
    for (let apple of apples) {
        if (apple + a >= s && apple + a <= t) {
            appleCount += 1
        }
    }
    for (let orange of oranges) {
        if (orange + b >= s && orange + b <= t) {
            orangeCount += 1
        }
    }
    inRange.push(appleCount, orangeCount)
    console.log(inRange[0])
    console.log(inRange[1])

}