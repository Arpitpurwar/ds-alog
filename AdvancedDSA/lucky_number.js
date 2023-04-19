/** https://leetcode.com/problems/lucky-numbers-in-a-matrix/description/ 
 * Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
   A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.
 * 
   Example1 :
   Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
    Output: [15]
    Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.

    Example2:
    Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
    Output: [12]
    Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

    Time Complexity: o(m*n);
    Space Complexity: o(m)

    */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let row = matrix.length;
    let column = matrix[0].length;
    let answer = [];

    for(let i =0 ; i< row; i++){
        let minIndex = 0;
        let minValue = Number.MAX_VALUE;

        for(let j = 0; j< column; j++){
            if(matrix[i][j] < minValue){
                minValue = matrix[i][j];
                minIndex = j;
            }
        }

        let isLucky = true;

        for(k=0; k< row; k++){
            if(matrix[k][minIndex] > minValue){
                isLucky = false;
                break;
            }
        }

        if(isLucky){
            answer.push(minValue);
        }
    }

    return answer;
};