/*You are given two strings, s and t. You need to return true if t is an anagram of s,
 and false if it is not.

An anagram is a word formed by rearranging the letters of another word, 
using every original letter exactly once.

Example 1: s = "anagram", t = "nagaram" ➔ returns true

Example 2: s = "rat", t = "car" ➔ returns false */

function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  s = s.toLowerCase();
  t = t.toLowerCase();

  const count = {};

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (!count[char] || count[char] === 0) {
      return false;
    }
    count[char]--;
  }

  return true;
}

const s = "rat",
  t = "car";
console.log(validAnagram(s, t));
