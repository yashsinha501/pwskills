// Question 2**

// Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

// A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

// **Example 1:**

// **Input:** num = "69"

// **Output:**

// true

function isStrobogrammatic(num) {
    const strobogrammaticDigits = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };

    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        if (!(num[left] in strobogrammaticDigits && num[right] === strobogrammaticDigits[num[left]])) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

const num = "69";
console.log(isStrobogrammatic(num)); // Output: true  