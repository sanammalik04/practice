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