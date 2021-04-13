function isPangram(string){
     const letters = string.toLowerCase().match(/[a-z]/g);
        console.log(letters)
        // Add those letters to a Set to deduplicate
    const alphabet = [...new Set(letters)]
        console.log(alphabet)
        // Assert that the length of the variable is 26
        return alphabet.length === 26;
    
  }

isPangram("The quick brown fox jumps over the lazy dog.")