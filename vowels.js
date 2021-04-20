function findSubstring(s, k) {
    k = 0
    const checker = "aeiou"
    let vowelStrg = ''
    
    for(let char of s.toLowerCase()){
        //console.log(s)
        if(checker.includes(char)){
            vowelStrg = char
            console.log(char)
        }
    }

}

findSubstring("azerdii", 5)