/*
Given an array of strings, group the anagrams together and return them. 
What is an anagram? 
Two strings are known as an anagram of each other if they contain the same characters. One string is just a different rearrangement of the  other. 

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
TC: O(nklogk)
SC: O(n)
**/

var groupAnagrams = function (strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
  }
  return Object.values(obj);
};

let ans = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(ans)