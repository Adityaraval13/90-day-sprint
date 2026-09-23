/*You are given an integer array nums and an integer k. Your job is to return the k most frequent elements within the array.

Example: nums = [1,2,2,3,3,3], k = 2

Output: [2,3] (because 3 appears three times, and 2 appears twice) */

function topKFrequent(nums, k) {
  // Step 1: Count the frequencies
  const count = {};
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  // Step 2: Convert to an array of [key, frequency] pairs
  const entries = Object.entries(count);
  // entries looks like: [['2', 2], ['3', 3]]

  // Step 3: Sort by frequency (descending)
  entries.sort((a, b) => b[1] - a[1]);

  // Step 4: Extract the top K
  const topK = entries.slice(0, k);

  // Step 5: Clean up the output — return just the numbers
  const result = [];
  for (const pair of topK) {
    result.push(Number(pair[0]));
  }

  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));     
console.log(topKFrequent([1], 1));                     
console.log(topKFrequent([4, 4, 4, 4, 5, 5, 5, 6, 6], 2));