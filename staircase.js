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


