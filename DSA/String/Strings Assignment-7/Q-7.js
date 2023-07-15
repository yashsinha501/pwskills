// Question 7**

// Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// **Example 1:**

// **Input:** s = "ab#c", t = "ad#c"

// **Output:** true

// **Explanation:**

// Both s and t become "ac"

function backspaceCompare(s, t) {
    return applyBackspace(s) === applyBackspace(t);
}

function applyBackspace(str) {
    const stack = [];

    for (const char of str) {
        if (char === '#') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
}

const s = "ab#c";
const t = "ad#c";
console.log(backspaceCompare(s, t)); // Output: true  