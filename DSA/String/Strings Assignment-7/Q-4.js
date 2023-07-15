// Question 4**

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// **Example 1:**

// **Input:** s = "Let's take LeetCode contest"

// **Output:** "s'teL ekat edoCteeL tsetnoc"


function reverseWords(s) {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

const s = "Let's take LeetCode contest";
console.log(reverseWords(s)); // Output: "s'teL ekat edoCteeL tsetnoc"

