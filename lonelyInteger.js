function lonelyinteger(a) {
    let obj = {}

    for(let num of a){
        obj[num] = (obj[num] || 0) + 1
        //console.log(obj)
    }
    let unique = Object.keys(obj).reduce((a, b) => obj[a] < obj[b] ? a : b)
    console.log(unique)
    
}






lonelyinteger([1,2,3,4,3,2,1])