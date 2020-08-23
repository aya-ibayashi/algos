// 198 Easy
// https://leetcode.com/problems/house-robber/

// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed, 
// the only constraint stopping you from robbing each of them is that 
// adjacent houses have security system connected and it will 
// automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, 
// determine the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.
 

// Constraints:
// 0 <= nums.length <= 100
// 0 <= nums[i] <= 400

function houseRobber( arr ) {

    let max = Math.max( ...arr );
    let maxIndex = arr.indexOf( max );


};

function houseRobberRecursive( arr ) {

    let arrCopy = [...arr];
    let max = 0;
    let temp = 0;

    function hrHelper( arr, nextHouse, sum ) {
        if( arr.length < 1 ) return;
        if (nextHouse > arr.length){
            return sum
        }
        
        hrHelper(arr, nextHouse + 1, sum + arr[nextHouse])
        hrHelper(arr, nextHouse + 2, sum + arr[nextHouse])
    
    }


};


// [ COPIED ]
// Runtime: 68 ms, faster than 26.57% of JavaScript online submissions for House Robber.
// Memory Usage: 33 MB, less than 100.00% of JavaScript online submissions for House Robber.
function rob(nums) {  
    if(nums.length==0) return 0;
    if(nums.length==1) return nums[0];

    //Initialize an arrays to store the money
	let mark = [];

    //We can infer the formula from problem:mark[i]=max(num[i]+mark[i-2],mark[i-1])
    //so initialize two nums at first.
	mark[0] = nums[0];
	mark[1] = Math.max(nums[0], nums[1]);

    //Using Dynamic Programming to mark the max money in loop.
	for( let i=2;i<nums.length;i++ ){
		mark[i] = Math.max(nums[i]+mark[i-2], mark[i-1]);
	}
	return mark[nums.length-1];
}

const arr1 = [1,2,3,1]; // 4
const arr2 = [2,7,9,3,1] // 12

const arr3 = [1, 5, 6, 72, 289, 342, 179, 22, 134];
const arr4 = [1, 8, 5, 6, 72, 3, 4, 22, 1];
const arr5 = [1, 5, 6, 72, 289, 399, 2, 134];
const arr6 = [1, 5, 6, 72, 289, 399, 2, 134];
// look 4 places down from current index
// in order to make best decision 
// 