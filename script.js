// Palindrome Check
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// Minimum and Maximum Numbers
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return [min, max];
}

// Test cases
console.log(findMinMax([3, 1, 5, 7, 2, 8])); // [1, 8]

// Missing Number Identification
function findMissing(arr) {
    let missing = 0;
    for (let i = 11; i <= 20; i++) {
        if (!arr.includes(i)) {
            missing = i;
            break;
        }
    }
    return missing;
}

// Test case
console.log(findMissing([11, 12, 14, 15, 16, 18, 19, 20])); // 13