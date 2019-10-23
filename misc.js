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