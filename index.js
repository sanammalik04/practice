// let array = [5, -2, 4, 9, 1]
// let sum = 6

// function twoSum(sum, array){
// let newArray = []
// for(let x in array){
// for(let y in array){
//   if(array[x] + array[y] === sum){
//     newArray.push([array[x], array[y]])
//   }

// }

// }
// console.log(newArray)
// return newArray

// }

// twoSum(sum, array)

// ///////////////////////////////////////////////////////////////////////////

// function countUniqueValues(arr){
//     let i = 0;
//     for(let j = 1; j<arr.length; j++){
//       if(arr[i] !== arr[j]){
//         i++;
//         arr[i] = arr[j]
//       }
    
//     }
//     console.log(i+1)
//     return i+1
    
     
//     }
    
//     countUniqueValues([1, 1, 2, 3, 4, 5, 6, 6, 7])

// ///////////////////////////////////////////////////////////////////////////

//     l1 = [1, 2, 4]
//     l2 = [1, 3, 4]
//     // sortedList = [1, 1, 2, 3, 4, 4]
    
//     var mergeTwoLists = function(l1, l2) {
//         let lists = [...l1, ...l2]
//         let sorted = lists.sort ((a, b) => a - b) 
//         return sorted
//     };
    
//     // var mergeTwoLists = function(l1, l2) {
//     //     let newList = l1.concat(l2)
//     //     let sorted = newList.sort ((a, b) => a - b) 
//     //     return sorted
//     // };
    
//     console.log(mergeTwoLists(l1, l2))

//     ////////////////////////////////////////////////////////////////////

//     function instructors(){
//         let instructor = {
//           firstName: "Kelly",
//           isInstructor: true,
//       favoriteNumbers: [1,2,3,4]
//         }
//         console.log(instructor.favoriteNumbers)
//       }
      
//       instructors()

//       ///////////////////////////////////////////////////////////////////////////




// function solution(A) {
//   let min = 1;
//   A.sort(function(a, b){
//       return a - b;
//   });
//   for(num in A){
//       if(A[num] > -1 && A[num] == min){
//           min++;
//       }
//   }
//   return min
  
// }

// solution([1, 3, 6, 4, 1, 2])
function truncateString(str, num) {
  let ending = str.length - 1
  //console.log(ending)
  if(str <= num){
    return str
  }else{
    if(str.length > num){
      console.log(str.length)
    }
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 8);