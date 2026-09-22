/*You are given an array of strings. Your job is to group all the anagrams together and return them as an array of arrays. You can return the groups in any order.

Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]] */


   function groupAnagrams(strs) {

        let result = {} ;

        for(let s of strs){

            let sorted = s.split("").sort().join("");

            if(!result[sorted]){
                result[sorted] = [];
            }

            result[sorted].push(s);
        }
        return Object.values(result);
    }


    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
    console.log(groupAnagrams(strs));