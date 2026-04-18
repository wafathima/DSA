// ============================= ⭐mixed array practice======================================
//*************for loop
// let arr = [1,3,5,3,1,6,4];
// let j = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] !== 1){
//         arr[j] = arr[i]
//         j++;
//     }
// }
// for(let i = j; i<arr.length; i++){
//     arr[i] = 1
// }
// console.log(arr)

//**************first non repeate
// let arr = [1,3,5,2,3,9,7,5];
// let map = [];
// for(let num of arr){
//     map[num] =( map[num]||0)+1
// }
// for(let num of arr){
//     if(map[num] ===1){
//         console.log(num);
//         break;

//     }
// }

//***************first non repeat and duplicate
// let arr = [4,6,3,6,7,3,8,9,4];
// let map = [];
// for(let num of arr){
//     map[num] = (map[num] || 0)+1
// }
// for(let num of arr){
//     if(map[num] ===1){
//         console.log("non-repeate:", num);
//         break;
//     }
// }
// let duplicate = [];
// for(let key in map){
//     if(map[key]>1){
//         duplicate.push(Number(key))
//     }
// }
// console.log("Duplicates:-",duplicate)

//*********sum of arry
// let arr = [4,3,6,8,7,4,6];
// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum)

//************duplicate check brute force
// let arr = [1,3,5,2,4,6,3]
// for(let i =0; i<arr.length; i++){
//     for (let j= i+1; j<arr.length; j++){
//         if(arr[i] === arr[j]){
//             console.log(true)
//         }
//     }
// }

//*************duplicat chech optimize
// let arr = [2,3,5,3,4,6];
// let set = new Set();
// for(let i =0; i<arr.length; i++){
//     if(set.has(arr[i])){
//         console.log(true)
//     }
//     set.add(arr[i])
// }

//***************two sum*********************
// let arr = [1,4,2,6,4,5,8,5];
// let target = 12;
// let map = {};

// for(let i=0; i<arr.length; i++){
//     let diff = target - arr[i]

//     if(map[diff] !== undefined){
//         console.log([map[diff],i])
//     }
//     map[arr[i]] =i
// }

//******************nested two pairs
// let arr = [1,2,3];
// for(let i = 0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         console.log(arr[i],arr[j])
//     }
// }

//******************nested loop reverse
// let arr = [1,2,3];
// for(let i=0; i<arr.length; i++){
//     for(let j = 0; j<arr.length; j++){
//         if(i !== j)
//             console.log(arr[i],arr[j])
//     }
// }

//***********************two sum nested loop
// let arr = [4,6,4,7,8,3,5];
// let target = 10;
// for(let i =0; i<arr.length; i++){
//     for(let j= i+1; j<arr.length; j++){
//         if(arr[i]+arr[j]=== target){
//             console.log([i,j])
//         }
//     }
// }

//*********************triple print
// let arr = [1,2,3,4,5];
// for(let i=0; i<arr.length; i++){
//     for(let j= i+1; j<arr.length; j++){
//         for(let y= j+1; y<arr.length; y++){
//             console.log(arr[i],arr[j],arr[y])
//         }
//     }
// }

//**************************fing second large
// let arr = [1,4,3,7,5,4,8];
// let max = -Infinity;
// let second = -Infinity;
// for(let num of arr){
//     if(num > max){
//         second = max;
//         max = num
//     }else if(num > second && num !== max){
//         second + num
//     }
// }
// console.log(second)


// **************** check palindrome
// let str = "wow";
// let left = 0;
// let right = str.length;
// let isPalindrome = true;
// while(left > right){
//     if(str[left] !== str[right]){
//         isPalindrome = false
//     }
//     left ++;
//     right --
// }
// console.log(isPalindrome)