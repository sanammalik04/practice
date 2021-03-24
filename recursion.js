//function calls itself if some condition is met
//conditionis important otherwise we end up in an infinite loop

//factorial- 6! = 6 * 5 * 4 * 3 * 2 * 1

function factorial(n){
     //first is iterative approach
    let result = n;
     while(n > 1) {
         n--;
         result = result * n;
     }
     return result;



}

function recursiveFactorial(n){
    //recursive approach
    if(n <= 1){ //if n is smaller than or equal to 1
        return 1
    } else {
        return n * recursiveFactorial(n -1);
        //6 * recursiveFactorial(5)
        //recursiveFactorial(5) = 5 * f(4)
       //recursiveFactorial(4) = 4 * f(3)
       //recursiveFactorial(3) = 3 * f(2)
       //recursiveFactorial(2) = 2 * f(1) -- here the if statement will be true 
       //so it'll return 1
    }



}


console.log(factorial(4));
console.log(recursiveFactorial(4));