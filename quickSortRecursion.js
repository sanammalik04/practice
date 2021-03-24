//solving a sorting problem with recursion
    //choose 'pivot' which is the last number in the array
    //move smaller numbers on it's left side, larger on it's right
    //recursively call quick sort on the left and right side

    function quickSort(aInput, from, to){
        //first define the recursive condition
        //decide when to end; we don't want to end when fro is smaller than to 
        if(from < to){
            let indexOfPivot = partition(aInput, from, to); //this will return the index of pivot
            quickSort(aInput, from, indexOfPivot - 1); // elements in the front of the pivot in the left side
            quickSort(aInput, indexOfPivot + 1, to); //elements in the right of the pivot
        }
    }
    
    function partition(aInput, from, to){
        let pivot = aInput[to] //last element is on index to. We grab it.
        let wall = from; //points at first number behind our wall

        for(let i = from; i < to; i++){
            if(aInput[i] <= pivot){ //whether the input on index i is smaller than or equal to pivot
                //swap with first number behind our wall is the
                var temp = aInput[wall];
                aInput[wall] = aInput[i];
                aInput[i] = temp;

                //move the wall
                wall++;
            }
        }
        aInput[to] = aInput[wall]; //this is the swap
        aInput[wall] = pivot;
        return wall;
    }
    

    
    var aInput = [100, 10, 15, 23, 2, 9, 28, 1, 36, 1]
    console.log(aInput);
    quickSort(aInput, 0, aInput.length - 1);
    console.log(aInput);
