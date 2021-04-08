function reverseArray(a) {
    // let reversedArr = a.reverse()
    // console.log(reversedArr)
    let arr = []
    for(let i = a.length-1; i >= 0; i--){
        arr.push(a[i])
    }
    console.log(arr)


}

reverseArray([1, 4, 3, 2])