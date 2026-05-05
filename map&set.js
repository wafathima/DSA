// count repeated value in Array📍=====================================
// function frequencyMap(arr){
//   let freq = {};
  
//   for(let num of arr){
//     freq[num] = (freq[num] || 0) + 1;
//   }
//   return freq;
// }
// console.log(frequencyMap([1,2,3,3,4,1]))

// print repeated value in array📍===========================================

// function repeatedValue(arr){
//   let freq = {};
//   let result = [];
  
//   for(let num of arr){
//     freq[num] = (freq[num]|| 0) + 1;
//   }
//   for(let num in freq){
//     if(freq[num] > 1){
//       result.push(Number(num))
//     }
//   }
//   return result;
// }
// console.log(repeatedValue([1,2,2,3,4,5,3]))


// Count Character Frequency📍=======================================================

// function chatFreqencey(str){
//   let freq = {};
  
//   for(let ch of str){
//     freq[ch] = (freq[ch] || 0 )+1;
//   }
//   return freq;
// }
// console.log(chatFreqencey("abbcc"))

// First Unique Character📍======================================================
// function fristUnique(str){
//   let freq = {};
  
//   for(let ch of str){
//     freq[ch] = (freq[ch] || 0) +1;
//   }
//   for(let ch of str){
//     if(freq[ch] === 1) return ch
//   }
//   return null
// }
// console.log(fristUnique("sunny"))

// Duplicate Character Check📍=========================================================

// function hasDuplicate(str){
//   let seen = new Set()
  
//   for(let ch of str){
//     if(seen.has(ch)) return true;
//     seen.add(ch)
//   }
//   return false;
// }
// console.log(hasDuplicate("silk"))

// Time → O(n)
// Space → O(n)

// Two Sum📍==========================================================
// function twoSum(nums, target){
//   let map = {};
  
//   for(let i=0; i<nums.length; i++){
//     let need = target - nums[i]
    
//     if(map[need] !== undefined){
//       return [map[need],i]
//     }
//     map[nums[i]] = i;
//   }
  
// }
// console.log(twoSum([1,3,5,2,5,3],7))

// Duplicate Strings📍====================================================

// function duplicate(arr){
//   let seen = new Set();
//   let dup = new Set();
  
//   for(let item of arr){
//     if(seen.has(item)){
//       dup.add(item)
//     } else{
//       seen.add(item)
//     }
//   }
//   return [...dup]
// }
// console.log(duplicate(["a","a","b","c","b","d"]))

// Group List of Anagrams📍=================================================

// function groupAnagrams(strs){
//   let map = new Map();
  
//   for(let word of strs){
//     let key = word.split('').sort().join('');
    
//     if(!map.has(key)){
//       map.set(key,[])
//     }
//     map.get(key).push(word)
//   }
//   return [...map.values()]
// }
// console.log(groupAnagrams(["eat","tab","ate","tea","bat","tan"]))

// Time:
// Sorting → O(n * k log k)
// (k = word length)
// Space: O(n)

// Username Duplicate Checker📍==============================================

// function checkDuplicate(usernames){
//   let seen = new Set();
  
//   for(let name of usernames){
//     if(seen.has(name)){
//       return `Duplicate found: ${name}`
//     }
//     seen.add(name)
//   }
//   return "No Duplicate!"
// }
// console.log(checkDuplicate(["wafa","sulu","wafa"]))

// Time: O(n)
// Space: O(n)


// Simulate API Response Cache (Object)📍================================================
let cache = {};
async function fetchData(id){
  if(cache[id]){
    console.log("Returning from cache");
    return cache[id];
  }
  console.log("Fetching API...")
  
  let data = {id, value:Math.random()};
cache[id] = data  
  return data;
}
console.log(await fetchData(1))
console.log(await fetchData(1))











































