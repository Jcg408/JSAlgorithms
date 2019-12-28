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