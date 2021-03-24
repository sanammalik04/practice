//divide array into sorted and unsorted part
//find the smallest number in unsorted part
//swap it with first number in unsorted part
//add the first number from unsorted part to the end of the sorted part

//REPEAT UNTIL THERE IS ONLY ONE ELEMENT IN UNSORTED PART
// 1st using spliter- the the left side i sorted part, on the right side unsorted part
// delare a variable for a spliter

//break it down to small parts 


function selectionSort(arr){
    for(let wall = 0; wall < arr.length -1; wall++){ //the wall increment is movign the wall by one number
        //find smallest number
        // wall - which is index, points to first number behind the wall
        //define a variable outside of the loop
        //wall is the spliter
    
        let indexOfSmallestElement = wall;
        for(let j = wall + 1; j < arr.length; j++){ //wall + 1 will only look at the elements behind the wall
            if(arr[indexOfSmallestElement] > arr[j]){ 
                indexOfSmallestElement = j; //arr of j is the smallest element
            }
    
        }
        //smallest element is on indexOfSmallest
        //implement the swap- swap the smallest number with the first number behind the wall
        let temp = arr[wall]; //we took the value of indexOfSmallestElement and set that to temp
        arr[wall] = arr[indexOfSmallestElement];
        arr[indexOfSmallestElement] = temp 

    }
    

}


let arr = [1, 10, 15, 23, 2, 9, 28, 1, 36, 1]
console.log(arr);
selectionSort(arr);
console.log(arr);
