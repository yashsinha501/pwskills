// Question 1**

// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// - s[i] == 'I' if perm[i] < perm[i + 1], and
// - s[i] == 'D' if perm[i] > perm[i + 1].

// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

// **Example 1:**

// **Input:** s = "IDID"

// **Output:**

// [0,4,1,3,2]

const s = "IDID";

function reconstructPermutation(s) {
    const perm = [];
    let minNum = 0;
    let maxNum = s.length;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I') {
            perm.push(minNum);
            minNum++;
        } else if (s[i] === 'D') {
            perm.push(maxNum);
            maxNum--;
        }
    }
    perm.push(minNum);
    return perm;
}

console.log(reconstructPermutation(s));