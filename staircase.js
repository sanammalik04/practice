function staircase(n) {
  let height = n;

  for(let i = 0; i < height; i++){
      let row = '';
      for(let j = 0; j < height; j++){
          if(i + j > height - 2){
              row += '#'
          }else{
              row += ' '
          }
      }
      console.log(row)
  }

}

staircase(6)


// function steps(n) {
//     // iterate through rows from 0 to n
//     for(let row = 0; row < n; row++){
//         let stair = ''; //created an empty string
        
//         for(let column = 0; column < n; column++){
//            //for each column, if the current column is less than or equal to the current row
//             if(column <= row) {
//                 stair += '#'; //then we want to add a pound symbol to the stari string
//             } else {
//                 stair += ' '; //otherwise add a space
//             }
//         }
//        //after we process one entire row above we need to console log it
//         console.log(stair)
//     }

//     //second solution with recursion only do this in interviews if asked to solve with recursion
//     //define my basecase. Check more in udeamy video
// //     if(n === row){
// //         return;
// //     }
// }