// Question 8**

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// **Example 1:**

// **Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

// **Output:** true

function checkStraightLine(coordinates) {
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];

    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];

        if ((y1 - y0) * (x - x0) !== (y - y0) * (x1 - x0)) {
            return false;
        }
    }

    return true;
}

const coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
console.log(checkStraightLine(coordinates)); // Output: true  