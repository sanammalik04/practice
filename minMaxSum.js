function miniMaxSum(arr) {
  let min = Infinity
  let max = -1
  let fullArray = [...arr]
  for(let i = 0; i < arr.length; i++){
      fullArray = [...arr]
      fullArray.splice(i, 1)
      let sum = fullArray.reduce((a, b) => a + b, 0)
      if(sum > max){
          max = sum
      }
      if(sum < min){
          min = sum
      }
  }

  console.log(min + ' ' + max)
//   console.log(max)
}

miniMaxSum([1,2,3,4,5])