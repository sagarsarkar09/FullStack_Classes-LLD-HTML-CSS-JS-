// Find out all the even numbers from this array

let numsArr = [1 ,2 ,5 ,4 ,7 ,8 ,10 ,42 ,57 ,78]


// function checkEven(nums){
//   let results = []

//   for(let i=0 ; i<nums.length ; i++){
//     if(nums[i]%2==0){
//         results.push(nums[i])
//     }
//   }
//   return results
// }

// let evenArr = checkEven(numsArr)
// console.log(evenArr)


// condition , what we want to do



let evenArray = numsArr.filter(function(num){
    return num%2==0
 })
console.log(evenArray)

console.log(numsArr)






