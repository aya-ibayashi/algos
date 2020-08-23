// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

// Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
 

// Example 1:

// Input:
// matrix = [
//   [1,2,3,4],
//   [5,1,2,3],
//   [9,5,1,2]
// ]
// Output: True
// Explanation:
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.
// Example 2:

// Input:
// matrix = [
//   [1,2],
//   [2,2]
// ]
// Output: False
// Explanation:
// The diagonal "[1, 2]" has different elements.

function toeplitzMatrix(matrix){

    let rLength = matrix[0].length;
    let cLength = matrix.length;

    if(rLength == 1 || matrix.length == 1){
        return true;
    }

    for(let r=0; r<rLength-1; r++){
        let number = matrix[0][r];
        let testR = r+1;
        let testC = 1;
        while(testR < rLength && testC < cLength ){
            if(matrix[testC][testR] != number){
                return false
            }
            testR++;
            testC++;
        }
    }

    for(let c=1; c<matrix.length-1; c++){
        number = matrix[c][0]
        testC = c+1;
        testR = 1;
        while(testC < cLength && testR < rLength){
            if(matrix[testC][testR] != number){
                return false;
            }
            testR++;
            testC++;
        }

    }
    return true
}

let matrix = [
      [1,2],
      [1,2]
    ]

console.log(toeplitzMatrix(matrix))