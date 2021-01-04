let array = [5, -2, 4, 9, 1]
let sum = 6

function twoSum(sum, array){
let newArray = []
for(let x in array){
for(let y in array){
  if(array[x] + array[y] === sum){
    newArray.push([array[x], array[y]])
  }

}

}
console.log(newArray)
return newArray

}

twoSum(sum, array)

function countUniqueValues(arr){
    let i = 0;
    for(let j = 1; j<arr.length; j++){
      if(arr[i] !== arr[j]){
        i++;
        arr[i] = arr[j]
      }
    
    }
    console.log(i+1)
    return i+1
    
     
    }
    
    countUniqueValues([1, 1, 2, 3, 4, 5, 6, 6, 7])

