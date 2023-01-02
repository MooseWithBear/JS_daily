// 배열의 삭제

let nums = [100, 200, 300, 400, 500];

// delete 400, 500 from nums

nums.pop(); // this deletes the last element from the array which is 500
nums.pop(); // this deletes the last element from the array which is 400

console.log(nums);
// [100, 200, 300];

// this way, you can save sliced elements from nums to new array
let newNums = nums.slice(0, 3); // slice from index 0 to index 3-1(before index 3)
console.log(newNums);
// [100, 200, 300];
