//JavaScript Algorithm Samples - Arrays

'use strict';
/* 1. SubArray an Array (Chunked) - Given an array and a number, create subarrays inside array.
   Number is number of elements in each subarray. Example - [1,2,3,4,5,6,7,8,9,10], 4  = [[1,2,3,4],[5,6,7,8],[9,10]]
    a. create an empty array
    b. create index starting at 0;
    c. loop through array less than array.length
    d. array.slice chunks and push into empty array
    e. add count */

const subArray = (arr, num) => {
    let newArr = [];
    let index = 0;

    while (index < arr.length) {
        newArr.push(arr.slice(index, index + num));
        index = index + num;
    }
    return newArr;
};
/* 2. Min and Max in Array - Find the minimum and maximum number in an array.
   find min and max in array
   a. set min and max at array index 0;
   b. create empty array
   c. loop through array 
   d. conditional if min > or max < */

const minMax = arr => {
    let min = arr[0];
    let max = arr[0];

    for (let index of arr) {
        if (min > index) {
            min = index;
        }
        if (max < index) {
            max = index;
        }
    }
    console.log(min);
    console.log(max);
};

/* 3. Sort Array - Bubblesort. Given an array, sort ascending. Note - worst case O(n^2). Not to be used on large data.
    a. Loop through the array
    b. Iterate through inner array
    c. conditional with swap
    d. return array */

const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const less = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = less;
            }
        }
    }
    return arr;
};

/* 4. Sort Array - Selection. 
    a. loop through the array
    b. assume element at i is lowest, assign to variable
    c. loop through array from i+1
    d. compare value to other element
    e. if current index and lowest are not same - swap. */

const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let less = arr[min];
            arr[min] = arr[i];
            arr[i] = less;
        }
    }
    return arr;
};
/* 5. Binary Search - only works with sorted array. Given a sorted array if target in array return index.
    a.  create a minimum variable and set to 0;
    b. create a maximum variable and set to array.length-1
    c. create a variable for target guess.
    d. if target does not exist return -1 
    e. start guess from middle of array */

const binary = (array, target) => {
    let min = 0;
    let max = array.length - 1;
    let guess;

    while (min <= max) {
        guess = (min + max) / 2;
        let element = array[guess];

        if (element === target) {
            return 'Index number: ' + guess;
        }
        if (element < target) {
            min = guess + 1;
        }
        {
            max = guess - 1;
        }
    }
    return 'number not in array';
};

/* 6. Simple Sum of Array - without using reduce method.
     a. set a counter to start at 0;
     b. loop through array
     c. add array element to counter with each iteration.
     d. return count */

const sumArray = arr => {
    count = 0;
    for (let num of arr) {
        count = count + num;
    }
    return count;
};

/* 7. Lowest missing positive number in sequence.
    // a. sort array ascending
    // b. set counter to compare values
    // c. loop through array and compare to counter
    // d. check condition to see if meets the criteria */

const missing = arr => {
    arr.sort((a, b) => a - b);
    let num = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] === num) {
            num++;
        }
        if (arr[i] > 0 && arr[i] > num) {
            return num;
        }
    }
    return num;
};

/* 8. Single element in array with pairs- Find the single element which is not duplicated in the array
    a. sort array which will put them in sorted pairs
    b. iterate 2 spots to check value of next item. If pair it will have same value, 
    c. check value to see if both have same value. If not break and return value */

const notpair = arr => {
    if (arr.length === 1) {
        return arr[0];
    }
    arr.sort((a, b) => a - b);
    let item = null;
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] != arr[i + 1]) {
            item = arr[i];
            break;
        }
    }
    console.log(item);
};

/* 9. Check distinct values in an array. See how many distinct elements are in the array without duplicates - return the count
  a. set condition for counter array length greater than 0
  b. set new array variable
  c. loop through using includes(method) to see if element is in the new array, if not push to array
  d. increment the count.
  e. return count */

const distinct = array => {
    if (array.length > 0) {
        let count = 0;
        let newArr = [];
        for (let item of array) {
            if (!newArr.includes(item)) {
                newArr.push(item);
                count++;
            }
        }
        return count;
    }
};

/* 10. Rotate Right - Given an array, shift items a specified number of times to the right, last index becomes first index.
    a. set counter for number of rotations
    b. set temporary array to hold removed element
    c. set conditional loop
    d. remove last item and put in front of array
    e. return array.
*/

const moveRight = (arr, x) => {
    let count = x;
    let last = [];

    while (count > 0) {
        last = arr.splice(arr.length - 1);
        arr.unshift(...last);
        count--;
    }
    return arr;
};

/* 11. Rotate Left - Given an array, shift items a specified number of times to the left, last index becomes first index.
    a. set counter for number of rotations
    b. set temporary array to hold removed element
    c. set conditional loop
    d. remove first item and push to back of array
    e. return array.
*/
const moveLeft = (arr, x) => {
    let first = [];
    let count = x;

    while (count > 0) {
        first = arr.shift();
        arr.push(first);
        count--;
    }
    return arr;
};
/* 12. Second largest - given an array of integers, return the second largest. Edge - empty array, 1 element in array */

// condition array length over 1
// sort the array
// slice from the second to last to last

const secondLargest = arr => {
    if (arr.length > 1) {
        return arr.sort((a, b) => a - b).slice(arr.length - 2, -1);
    }
};
// another option allows returning largest or second.

const second2 = (arr)=> {
    let largest = 0;
    let second = 0;

    for (let num of arr) {
        if(largest ===0) {
            largest = num;
        }
        else if (num > largest) {
            second = largest;
            largest = num;
        }
        else if (num < largest) {
            second = num;
        }
    }
  return second;
}
/* 13. Two-Sum problem. Given an array and a target number, check to see if any 2 items in the array add up to target
        Inputs - array, target number,
*/
// using object for better O complexity - O(n)
const twoSum = (arr, target) => {
	let numObj = {};
	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];
		numObj[num] = i;
	}
	for (let i = 0; i < arr.length; i++) {
		let remain = target - arr[i];
		if (numObj.hasOwnProperty(remain) && numObj[remain] !== i) {
			return [i, numObj[remain]];
		}
	}
}
