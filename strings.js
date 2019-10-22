'use strict'
// JavaScript Algorithm Samples -Strings

/* 1. String Repeat - Given a string return the repeated string a specified number of times.
    a. create empty string 
    b. set loop to iterate until reach number
    c. add string to new string
    d. return new string */

const strRepeat = (str, num) => {
    let newStr = '';
    for (let i = 1; i <= num; i++) {
        newStr = newStr + str

    }
    return newStr;
}


/* 2. String Reverse  - Given a string, return the reverse of the string
    Most straight forward way using string and array methods

    a. convert string to array
    b. reverse the array
    c. join back to string
    d. return new string */

const revStr = (str) => {
    let newStr = str.split('').reverse().join('');
    return newStr;
}

/* OR
Without using reverse method

a. create empty string
b. loop through characters
c. concatenate char with newStr to equal new string */

const revStr2 = (str) => {
    let newStr = ''

    for (let char of str) {
        newStr = char + newStr;
    }
    return newStr;
}

/* 3. Most Used Character - Given a string, return the character most used in the string;
    a. use empty object to hold string info
    b. iterate through string and set key/value with character/count
    c. keep track of count and increment if over 1
    d. iterate through obj to get character and count
    e. return character that has most */

const MostChar = (str) => {
    const strObj = {};
    let most = 0;
    let mostChar = '';

    for (let char of str) {
        strObj[char] = strObj[char] + 1 || 1
    }
    for (let key in strObj) {
        if (strObj[key] > most) {
            most = strObj[key];
            mostChar = key;
        }
    }
    return mostChar;
}

/* 4. Palindrome -  Given a string, check to see if a it is the same forward as backward. 
    a. normalize string - to lowercase
    b. remove punctuation and spaces using reg exp
    c. convert to array, reverse, join back to string
    d. console.log response*/


const palindrome = (str) => {
    let string = str.toLowerCase().replace(/[\W\_]/g, "");
    let newString = string.split('').reverse().join('');

    string === newString ? console.log('Palindrome') : console.log('Not a palindrome')
}

/* 5. Anagram - Given 2 strings, check to see if both have same characters even though 2 diff strings.

    a. Check to make sure they are the same length. If not return false;
    b. convert to array, sort, join and compare strings.
    c. if same return true, else false. */

const anagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    let newStr1 = str1.split('').sort().join('');
    let newStr2 = str2.split('').sort().join('');

    return newStr1 === newStr2;

}

/*6 Starts With Uppercase - Given a string, check to see if the first letter is uppercase.

    a. check to see what current letter is at index 0
    b. compare to uppercase value of letter
    c. return true, false */

const startsWith = (str) => {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        return true
    } else {
        return false
    }
}

/* 7 String permutation comparison - Given 2 strings, check to see if they are permutations of each other.

    a. If string lengths are not the same - return false
    b. set empty object to hold string for comparison.
    c. iterate through 1st string and store in object.
    d. iterate through 2nd string and compare to object. Remove characters if already in object, if character not in object return false.
    e. Return true if there is permutation */

const strPerm = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    let strObj = {};
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if (strObj[char]) {
            strObj[char]++
        } else {
            strObj[char] = 1;
        }
    }
    for (let i = 0; i < str2.length; i++) {
        let char2 = str2[i];
        if (strObj[char2] && strObj[char2] !== 0) {
            strObj[char2]--
        } else {
            return false;
        }
    }
    return true;
}

/*8 String ending - Given a string and target , check to see if string ending same as target.
   a. boolean conditional with substring method.
   b. compare to string to target length from end.*/

const strEnd = (str, target) => {
    if (str.substr(-target.length) === target) {
        return true;
    }
    return false;
}

/*9 String Caesar Cipher - Given a string , shift the letters a specified amount to decipher the code.
    Shift the letters 13 places for a ROT13 encoded string. All letters will be uppercase, do not transform any non-alphabetic character.
    a. check ascii codes to get number values of letters. Capital letters are 65-90
    b. loop through string to get corresponding letter
    c. return any non alphabetic characters.*/

const caesar = (str) => {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        const numAscii = str[i].charCodeAt();
        if (numAscii >= 65 && numAscii <= 77) {
            newStr += String.fromCharCode(numAscii + 13)
        }
        else if (numAscii > 77 && numAscii <= 90) {
            newStr += String.fromCharCode(numAscii - 13)
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;
}
//    caesar('PBQVAT'))

/* 10. Capitalize Words - Given a string, capitalize first letter of every work in a string
    a. set variable for new string
    b. normalize string with lowercase
    c. split string into words
    d. iterate and uppercase first letter of word, concat the rest of letters
    e. return new string
*/
const cap = (str) => {
    if (str.length > 1) {
        let newStr = str.toLowerCase().split(' ').map(word => {
            return word[0].toUpperCase() + word.slice(1)
        })
        return newStr.join(' ');
    }
}
/* 11. Given a string containing only lowercase letters, find whether every letter appearing in the string
   appears the same number of times. 
    a. Check for empty string.
    b. make sure string is lowercase
    c. use object to store letters and values
    d. check values to see if they are the same.
*/
const sameValue = (string) => {
    if (string.length <= 1) {
        return string;
    }
    const str = string.toLowerCase();
    let count = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (count[char]) {
            count[char]++
        } else {
            count[char] = 1;
        }
    }
    const value = Object.values(count);
    return value.every(num => num === value[0]);

}
/* 12. Letter change
Replace every letter in the string with the letter following
it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel
in this new string (a, e, i, o, u) and finally return this modified string.
*/
const letterChange = (str) => {
    if (str.length) {
        let string = str.toLowerCase();
        let newStr = " ";
        for (let i = 0; i < string.length; i++) {
            const code = string[i].charCodeAt();

            if (code >= 97 && code <= 121) {
                newStr += String.fromCharCode(code + 1)
            }
            else if (code === 122) {
                newStr += String.fromCharCode(97)
            }
            else {
                newStr += string[i];
            }
            newStr = newStr.replace(/a|e|i|o|u/gi, (vowel) => {
                return vowel.toUpperCase();
            });
        }
        return newStr
    }
}