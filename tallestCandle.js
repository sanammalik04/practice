function birthdayCakeCandles(candles) {
    //declare an empty object
    let counter = {}
    //take the array and make into an object with key value pairs.
    //all keys will have the value of how many times that key is in the objec so 3 will have 2 as it's value
    for(let val of candles){
        counter[val] = (counter[val] || 0) + 1
    }
    //here I am getting the value that is the greatest from the object which is also the tallest candle
    let tallestCandle = Object.values(counter).reduce((a, b) => counter[a] > counter[b] ? a : b)
    console.log(counter)
    console.log(tallestCandle)

}

birthdayCakeCandles([3, 2, 1, 3])