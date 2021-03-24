function removeElement(nums, val) {
    // have to use two pointers
    let pointer1 = 0;
    for(let pointer2 = 0; pointer2 < nums.length; pointer2++){
        if(nums[pointer2] !== val){
            nums[pointer1] = nums[pointer2];
            pointer1++;
        }
    }
    return pointer1;



}

// let nums = [3,2,2,3]
// let val = 3
console.log(removeElement([3,2,2,3], 3));

