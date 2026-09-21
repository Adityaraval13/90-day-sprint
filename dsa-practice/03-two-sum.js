/*You are given an array of numbers (nums) and a target number.
 You need to find the two numbers in the array that add up to the target,
  and return their indices (their positions in the array).

You can assume there is exactly one valid answer, and you cannot use the same element twice.

Example: nums = [2, 7, 11, 15], target = 9

Output: [0, 1] (Because nums[0] + nums[1] is 2 + 7 = 9)*/

function twoSum(nums, target) {
  const memory = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const difference = target - currentNum;

    if (memory[difference] !== undefined) {
      return [memory[difference], i];
    }

    memory[nums[i]] = i;
  }
}

const nums = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(nums, target));
