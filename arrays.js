//JavaScript Algorithm Samples - Arrays

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

    }
 /* 2. Min and Max in Array - Find the minimum and maximum number in an array.
    find min and max in array
    a. set min and max at array index 0;
    b. create empty array
    c. loop through array 
    d. conditional if min > or max < */

    const minMax = (arr) => {
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
    }

    /* 3. Sort Array - Bubblesort. Given an array, sort ascending. Note - worst case O(n^2). Not to be used on large data.
        a. Loop through the array
        b. Iterate through inner array
        c. conditional with swap
        d. return array */
        
    const bubbleSort = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < (arr.length-i -1); j++) {
                if (arr[j] > arr[j+1]) {
                    const less = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = less;
                }
            }
        }
        return arr;
    }

    /* 4. Sort Array - Selection. 
        a. loop through the array
        b. assume element at i is lowest, assign to variable
        c. loop through array from i+1
        d. compare value to other element
        e. if current index and lowest are not same - swap. */

        const selectionSort = (arr) => {
            for (let i = 0; i < arr.length; i++) {
                let min = i;

                for (let j = i +1; j < arr.length; j++) {
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
        }
    /* 5. Binary Search - only works with sorted array. Given a sorted array if target in array return index.
        a.  create a minimum variable and set to 0;
        b. create a maximum variable and set to array.length-1
        c. create a variable for target guess.
        d. if target does not exist return -1 
        e. start guess from middle of array */

        const binary = (array, target) => {
            let min = 0;
            let max = array.length-1;
            let guess;

            while (min <=max) {
                guess = (min + max)/2;
                let element = array[guess];

                if (element === target) {
                    return 'Index number: ' +guess;
                }
                else if (element < target) {
                    min = guess +1;
                }
                else {
                    max = guess -1;
                }
            }
            return "number not in array";
        }


   /* 6. Simple Sum of Array - without using reduce method.
        a. set a counter to start at 0;
        b. loop through array
        c. add array element to counter with each iteration.
        d. return count */

        const sumArray=(arr)=> {
            count = 0;
            for (let num of arr) {
               count = count + num;
                
            }
          return count;
        }
      console.log(sumArray([3,6,2,9,1]));