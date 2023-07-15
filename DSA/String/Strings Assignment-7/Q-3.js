// Question 3**

// Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// **Example 1:**

// **Input:** num1 = "11", num2 = "123"

// **Output:**

// "134"

function addStrings(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = '';

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? Number(num1[i]) : 0;
        const digit2 = j >= 0 ? Number(num2[j]) : 0;
        const sum = digit1 + digit2 + carry;

        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;

        i--;
        j--;
    }

    return result;
}

const num1 = "11";
const num2 = "123";
console.log(addStrings(num1, num2)); // Output: "134"  