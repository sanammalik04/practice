//sorting problem
// 1. let the biggest number bubble to the end of an array
// 2. compare two numbers to each other
// 3. if the first one is smaller we move to the next two numbers
// 4. if the first one is bigger we swap the first number with second then move on
// 5. Repeat step one until the array is sorted

//the optimization will work same as the code above but we will check for swap 
//and if no swap heppens we want to end the algorthim meaning just return. 
// this will save us time if by not going through the entire array if the array is already sorted


function bubbleSortOptimalized(arr){
   for(let i = 0; i < aInput.length - 1; i++){ //this is for the sorted nums
    //loop whole array 
    //except the last i elements
    //i represents the number of already sorted elements
    for(let j = 0; j < aInput.length - i - 1; j++){ //aInput.length - i - 1 means we will stop before the already sorted element
        //implement the swap
        //a, b
        if(aInput[j] > aInput[j + 1]){ // these are two elements that are next to each other
            swapHappened = true; 
            let temp = aInput[j] //setting to first and strating element
            aInput[j] = aInput[j +1];
            aInput[j +1] = temp;
        } 

    }
    if(!swapHappened){
        //the array is sorted
        return;
    }

   }

}




let aInput = [100, 10, 15, 23, 2, 9, 28, 1, 36, 1]
console.log(aInput);
bubbleSortOptimalized(aInput);
console.log(aInput)


